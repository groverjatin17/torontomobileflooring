import { mailOptions, transponder } from "../../../config/nodemailer";

const RATE_LIMIT = 5;
const RATE_WINDOW_SECONDS = 60 * 60;
const RATE_LIMIT_SCRIPT =
  "local count = redis.call('INCR', KEYS[1]); " +
  "if count == 1 then redis.call('EXPIRE', KEYS[1], ARGV[1]); end; " +
  "return count;";

const escapeHtml = (value) =>
  value.replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });

const getClientIp = (req) => {
  return (
    req.headers["cf-connecting-ip"] ||
    req.headers["x-real-ip"] ||
    req.socket.remoteAddress ||
    "unknown"
  );
};

const checkRateLimit = async (ip) => {
  const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!redisUrl || !redisToken) throw new Error("Rate limiter is not configured");

  const { createHash } = await import("crypto");
  const ipHash = createHash("sha256").update(ip).digest("hex");
  const response = await fetch(redisUrl.replace(/\/$/, ""), {
    method: "POST",
    headers: {
      Authorization: `Bearer ${redisToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify([
      "EVAL",
      RATE_LIMIT_SCRIPT,
      1,
      `contact-rate:${ipHash}`,
      RATE_WINDOW_SECONDS,
    ]),
  });
  if (!response.ok) throw new Error("Rate limiter request failed");

  const result = await response.json();
  if (result.error || typeof result.result !== "number") {
    throw new Error("Rate limiter returned an invalid response");
  }
  return result.result <= RATE_LIMIT;
};

const verifyRecaptcha = async (token, ip) => {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) throw new Error("reCAPTCHA is not configured");

  const body = new URLSearchParams({ secret, response: token, remoteip: ip });
  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    { method: "POST", body }
  );
  if (!response.ok) throw new Error("reCAPTCHA verification request failed");

  const result = await response.json();
  return result.success === true;
};

const generateEmailContent = ({ name, email, message }) => {
  const fields = [
    ["Name", name],
    ["Email", email],
    ["Message", message],
  ];
  const text = fields.map(([label, value]) => `${label}:\n${value}`).join("\n\n");
  const html = fields
    .map(
      ([label, value]) =>
        `<h3>${label}</h3><p style="white-space: pre-wrap">${escapeHtml(value)}</p>`
    )
    .join("");

  return {
    text,
    html: `<html><body><h2>New Contact Message</h2>${html}</body></html>`,
  };
};

const handler = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed" });
  }

  const data = req.body;
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    return res.status(400).json({ message: "Invalid request" });
  }

  if (typeof data.website === "string" && data.website.trim()) {
    return res.status(200).json({ success: true });
  }

  const name = typeof data.name === "string" ? data.name.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const message = typeof data.message === "string" ? data.message.trim() : "";
  if (
    !name || name.length > 100 ||
    !email || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    !message || message.length > 5000
  ) {
    return res.status(400).json({ message: "Invalid contact details" });
  }

  const ip = getClientIp(req);
  try {
    if (!(await checkRateLimit(ip))) {
      res.setHeader("Retry-After", String(RATE_WINDOW_SECONDS));
      return res.status(429).json({ message: "Too many requests" });
    }
  } catch {
    return res.status(503).json({ message: "Contact form is temporarily unavailable" });
  }

  if (typeof data.recaptchaToken !== "string" || !data.recaptchaToken) {
    return res.status(400).json({ message: "Verification required" });
  }

  try {
    if (!(await verifyRecaptcha(data.recaptchaToken, ip))) {
      return res.status(400).json({ message: "Verification failed" });
    }
  } catch {
    return res.status(503).json({ message: "Verification is temporarily unavailable" });
  }

  try {
    await transponder.sendMail({
      ...mailOptions,
      ...generateEmailContent({ name, email, message }),
      replyTo: email,
      subject: "New contact form submission",
    });
    return res.status(200).json({ success: true });
  } catch {
    return res.status(500).json({ message: "Unable to send message" });
  }
};

export default handler;
