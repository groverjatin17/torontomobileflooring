import { useEffect } from "react";
import Link from "next/link";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import skills from "../../data/sections/skills-circle.json";
import Accordion from "../Accordion";

const panels = [
  {
    label: "Pay 25% Now, Get Your Floor Later",
    content:
      "We’ll store your floor for up to three months, for free. Whether you’re mid-renovation or moving houses, your floor will be ready when you are! ",
    iconPath: "/img/icons/warehouse-pickup.svg",
    alt: "warehouse pickup icon",
  },
  {
    label: "30-Day Hassle Free Returns",
    content: "You’ll have 30 calendar days to return 10% of excess boxes.",
    iconPath: "/img/icons/30-day-return.svg",
    alt: "30 day return icon",
  },
  {
    label: "Choose Your Delivery Date",
    content: "Pick a convenient day to receive your order.",
    iconPath: "/img/icons/truck-delivery.svg",
    alt: "delivery truck icon",
  },
];

const SkillsCircle2 = ({ theme }) => {
  const cpStyle = {
    path: {
      stroke: "#75dab4",
    },
    trail: {
      stroke: theme ? (theme == "dark" ? "#0f1218" : "#e5e5e5") : "",
    },
    text: {
      fill: theme ? (theme == "dark" ? "#ffffff" : "#4e4e4e") : "",
      fontSize: "16px",
    },
  };

  useEffect(() => {
    document
      .querySelectorAll(".CircularProgressbar-text")
      .forEach((el) => el.classList.add("custom-font"));
  }, []);

  return (
    <section className="skills-circle section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 flexiti">
            <div className="content md-mb50">
              <div className="sub-title">
                <h6>Frequently Asked Questions</h6>
                <span></span>
                <span></span>
                <span></span>
              </div>
              {/* <h3 className="mb-15 fw-700">
                Where quality meets Craftsmanship!!
              </h3>
              <p>
              Bespoke flooring solutions tailored to your brand. Custom Flooring Solutions That Define Excellence!
              </p>
              <Link href={`/contact/contact-${theme}`}>
                <a
                  className={`btn-curve ${
                    theme === "dark" ? "btn-lit" : ""
                  } mt-30 wow fadeInUp`}
                  data-wow-delay=".5s"
                >
                  <span>Discover Us</span>
                </a>
              </Link> */}
              <Accordion panels={panels} />
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 valign">
            <div className="">
              <div className="row">
                {skills.map((skill, index) => (
                  <div className="col-md-6" key={index}>
                    <div
                      className=" flexiti"
                      data-wow-delay=".6"
                    >
                      <div data-value={skill.value / 100}>
                        <img
                          src={skill.imagePath}
                          alt={skill.altText}
                          style={{ height: "250px" }}
                        />
                      </div>
                      <div className="cont">
                        <h6>{skill.title}</h6>
                        <p>{skill.details}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsCircle2;
