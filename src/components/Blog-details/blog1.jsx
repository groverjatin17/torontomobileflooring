/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { instagramHandle } from "../../constants";

const Blog1 = () => {
  return (
    <section className="blog-pg single section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="post">
              <div className="img">
                <img src="/img/blog/blog1.jpg" alt="" />
              </div>
              <div className="content pt-20">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="cont">
                      <div className="spacial">
                        <p>
                          When it comes to hardwood, Canada boasts an incredible
                          wealth of natural resources. From coast to coast, this
                          vast country is home to an abundant variety of
                          hardwood species that showcase the country&apos;s diverse
                          ecosystems and offer a stunning array of colors, grain
                          patterns, and durability. Let&apos;s take a closer look at
                          some of the hardwoods found in Canada, each with its
                          own unique charm and characteristics.
                        </p>
                      </div>

                      <p>Here are few types of Hardwood:</p>

                      <ul>
                        <li>
                          01. Maple, the iconic symbol of Canada, is revered for
                          its exceptional hardness and remarkable versatility.
                          With its light-colored and close-grained appearance,
                          maple is often favored for flooring, cabinetry, and
                          furniture. Its durability and resistance to wear make
                          it an excellent choice for high-traffic areas.
                        </li>
                        <li>
                          02. Oak: Renowned for its strength and durability, oak
                          is a popular choice for both traditional and
                          contemporary designs. The prominent grain patterns and
                          warm tones of red and white oak add a timeless
                          elegance to any space. From flooring and furniture to
                          paneling and millwork, oak is a versatile hardwood
                          that stands the test of time.
                        </li>
                        <li>
                          03. Cherry wood, with its distinctive reddish-brown
                          hue, is cherished for its rich, warm tones and smooth
                          texture. Highly sought after for its natural beauty,
                          cherry is often used in high-end cabinetry, furniture,
                          and decorative accents. Over time, cherry wood
                          develops a stunning patina, further enhancing its
                          allure.
                        </li>
                        <li>
                          04. Known for its deep, dark hues and exquisite grain
                          patterns, walnut is a hardwood of exceptional beauty
                          and richness. Its natural variations in color create a
                          sense of depth and character, making it a popular
                          choice for fine furniture, flooring, and decorative
                          items. Walnut&apos;s luxurious appeal adds an air of
                          sophistication to any interior.
                        </li>
                        <li>
                          05. Birch, a light-colored hardwood, offers a clean
                          and contemporary aesthetic. Its smooth and even
                          texture, combined with its strength and durability,
                          makes it a versatile choice for various applications,
                          including furniture, cabinetry, and flooring. Birch&apos;s
                          light tones and subtle grain patterns contribute to a
                          bright and inviting atmosphere.
                        </li>
                      </ul>

                      <div className="quotes text-center">
                        <p>
                          Hardwood: Timeless Beauty That Never Fades, A Classic
                          Choice That Outlasts Trends
                        </p>
                      </div>
                      <div className="share-info">
                        <div className="social">
                          <a href="#0">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a href={instagramHandle}>
                            <i className="fab fa-instagram"></i>
                          </a>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pagination">
                <span>
                  <Link href="/blog-details/1/">
                    <a>Prev Post</a>
                  </Link>
                </span>
                <span className="icon">
                  <Link href="/">
                    <a>
                      <i className="fas fa-th-large"></i>
                    </a>
                  </Link>
                </span>
                <span className="text-right">
                  <Link href="/blog-details/2/">Next Post</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog1;
