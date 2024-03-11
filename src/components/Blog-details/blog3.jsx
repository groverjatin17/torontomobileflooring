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
                <img src="/img/blog/blog3.jpg" alt="" />
              </div>
              <div className="content pt-20">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="cont">
                      <div className="spacial">
                        <p>
                          As summer approaches, families everywhere eagerly plan
                          their vacations, with the beach being a popular
                          destination for creating cherished memories. Why limit
                          the beachy feeling to just a vacation? Spruce up your
                          beach house or even your everyday home with some cozy
                          coastal elements that the whole family will absolutely
                          adore!
                        </p>
                      </div>

                      <p>Beach House Interior Design And Flooring Ideas</p>

                      <ul>
                        <li>
                          Imagine stepping into your own serene oasis, where
                          every detail evokes the peacefulness of the shoreline.
                          From the moment you open the door, you’ll be
                          transported to a perfect space of pure relaxation,
                          where unforgettable memories await.
                        </li>
                        <li>
                          When it comes to creating the perfect beach house
                          vibe, choosing the right flooring is essential. You
                          want something that complements the coastal aesthetic
                          and withstands sandy feet, wet swimsuits, and
                          occasional beachside mishaps. Here are some flooring
                          options that will bring that breezy, seaside feel to
                          your beach retreat:
                        </li>
                        <li>
                          Nothing quite captures the vibe of coastal living like
                          weathered hardwood flooring. Its worn look and rustic
                          charm mimic the natural weathering process of
                          driftwood found along the shore, adding an authentic
                          coastal touch to your space. Opting for lighter hues
                          of wood like white oak or ash will further enhance the
                          airy and relaxed atmosphere, creating a tranquil
                          haven.
                        </li>
                        <li>
                          The beauty of weathered wood flooring extends beyond
                          its aesthetic appeal. These floors effortlessly blend
                          with other nautical elements, such as a rowboat oar or
                          a surfboard hung on the wall, tying the entire beach
                          house theme together. Moreover, the wear and tear from
                          sandy feet and wet bathing suits won’t be as
                          noticeable on distressed-looking hardwood flooring,
                          making it a practical choice for a beach-inspired
                          space.
                        </li>
                      </ul>

                      <div className="quotes text-center">
                        <p>Build a Home, Not a House.</p>
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
                  <Link href="/blog-details/2/">Prev Post</Link>
                </span>
                <span className="icon">
                  <Link href="/">
                    <a>
                      <i className="fas fa-th-large"></i>
                    </a>
                  </Link>
                </span>
                <span className="text-right">
                  <Link href="/blog-details/3/">Next Post</Link>
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
