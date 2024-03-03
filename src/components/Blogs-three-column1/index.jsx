import React from "react";
import Link from "next/link";
import Split from "../Split";

const BlogsThreeColumn1 = ({ subBG, newHome }) => {
  return (
    <section className={`blog-grid section-padding ${subBG ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="sec-head custom-font text-center">
          <h6 className="wow fadeIn" data-wow-delay=".5s">
            Latest News
          </h6>
          <Split>
            <h3 className="wow" data-splitting>
              Our Blogs.
            </h3>
          </Split>
          {!newHome && <span className="tbg">Blogs</span>}
        </div>
        <div className="row">
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
            <div
              className={`item bg-img ${newHome ? "active" : ""}`}
              style={{ backgroundImage: "url(/img/blog/blog1.png)" }}
            >
              <div className="cont">
                <Link href="/blog-details/1/">
                  <a className="date custom-font">
                    <span>
                      <i>06</i> Jan 2022
                    </span>
                  </a>
                </Link>
                <div className="info custom-font">
                  <a href="#0" className="author">
                    <span>by CEO</span>
                  </a>
                  <Link href="/blog-details/1/">
                    <a className="tag">
                      <span>Hardwood</span>
                    </a>
                  </Link>
                </div>
                <h6>
                  <Link href="/blog-details/1/">
                    What are the most prominent Hardwoods in Canada
                  </Link>
                </h6>
                <div className="btn-more custom-font">
                  <Link href="/blog-details/1/">
                    <a className="simple-btn">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".6s">
            <div
              className="item active bg-img"
              style={{ backgroundImage: "url(/img/blog/blog2.jpg)" }}
            >
              <div className="cont">
                <Link href="/blog-details/2/">
                  <a className="date custom-font">
                    <span>
                      <i>11</i> Aug 2022
                    </span>
                  </a>
                </Link>
                <div className="info custom-font">
                  <a href="#0" className="author">
                    <span>by CEO</span>
                  </a>
                  <Link href="/blog-details/2/">
                    <a className="tag">
                      <span>AI</span>
                    </a>
                  </Link>
                </div>
                <h6>
                  <Link href="/blog-details/2/">
                    Why tiles are the best options for Bathrooms.
                  </Link>
                </h6>
                <div className="btn-more custom-font">
                  <Link href="/blog-details/2/">
                    <a className="simple-btn">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".9s">
            <div
              className={`item bg-img ${newHome ? "active" : ""}`}
              style={{ backgroundImage: "url(/img/blog/blog3.jpg)" }}
            >
              <div className="cont">
                <Link href="/blog-details/3/">
                  <a className="date custom-font">
                    <span>
                      <i>29</i> Aug 2022
                    </span>
                  </a>
                </Link>
                <div className="info custom-font">
                  <a href="#0" className="author">
                    <span>by / Admin</span>
                  </a>
                  <Link href="/blog-details/3/">
                    <a className="tag">
                      <span>WordPress</span>
                    </a>
                  </Link>
                </div>
                <h6>
                  <Link href="/blog-details/3/">
                    Beach House Interior Design And Flooring Ideas
                  </Link>
                </h6>
                <div className="btn-more custom-font">
                  <Link href="/blog-details/3/">
                    <a className="simple-btn">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsThreeColumn1;
