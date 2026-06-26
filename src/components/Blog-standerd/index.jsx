/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const BlogStanderd = () => {
  return (
    <section className="blog-pg section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="posts">
              <div className="item mb-80">
                <div className="img">
                  <Link href="/blog-details/blog-details-light">
                    <a>
                      <img src="/img/blog/b1.jpg" alt="Hardwood flooring solutions and Canadian wood species blog post" />
                    </a>
                  </Link>
                </div>
                <div className="content">
                  <div className="row">
                    <div className="col-10">
                      <a href="#0" className="date">
                        <span className="num">07</span>
                        <span>August</span>
                      </a>
                      <div className="tags">
                        <a href="#0">WordPress</a>
                      </div>
                      <h4 className="title">
                        <Link href="/blog-details/blog-details-light">
                          <a>Build a Beautiful Blog With Ease</a>
                        </Link>
                      </h4>
                      <p>
                        My job is simple and sophisticated, so it is possible to
                        describe and simple, and flowery language. I love the
                        feel and sophistication of its superiority. I like
                        people with a keen mind and at the same time easy to
                        talk to. These qualities can be combined perfectly
                        natural. However, things like people look miserable, if
                        these properties are connected.
                      </p>
                      <Link href="/blog-details/blog-details-light">
                        <a className="simple-btn mt-30">Read more about this blog post</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item mb-80">
                <div className="img">
                  <Link href="/blog-details/blog-details-light">
                    <a>
                      <img src="/img/blog/b2.jpg" alt="Blog article about tile flooring installation and bathroom renovation tips" />
                    </a>
                  </Link>
                </div>
                <div className="content">
                  <div className="row">
                    <div className="col-10">
                      <a href="#0" className="date">
                        <span className="num">07</span>
                        <span>August</span>
                      </a>
                      <div className="tags">
                        <a href="#0">WordPress</a>
                        <a href="#0">Themeforest</a>
                        <a href="#0">Avo</a>
                      </div>
                      <h4 className="title">
                        <Link href="/blog-details/blog-details-light">
                          <a>Build a Beautiful Blog With Ease</a>
                        </Link>
                      </h4>
                      <p>
                        My job is simple and sophisticated, so it is possible to
                        describe and simple, and flowery language. I love the
                        feel and sophistication of its superiority. I like
                        people with a keen mind and at the same time easy to
                        talk to. These qualities can be combined perfectly
                        natural. However, things like people look miserable, if
                        these properties are connected.
                      </p>
                      <Link href="/blog-details/blog-details-light">
                        <a className="simple-btn mt-30">Read more about this blog post</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item mb-80">
                <div className="img">
                  <Link href="/blog-details/blog-details-light">
                    <a>
                      <img src="/img/blog/b3.jpg" alt="Blog article covering hardwood, laminate, and luxury vinyl flooring options" />
                    </a>
                  </Link>
                </div>
                <div className="content">
                  <div className="row">
                    <div className="col-10">
                      <a href="#0" className="date">
                        <span className="num">07</span>
                        <span>August</span>
                      </a>
                      <div className="tags">
                        <a href="#0">WordPress</a>
                        <a href="#0">Themeforest</a>
                        <a href="#0">Avo</a>
                      </div>
                      <h4 className="title">
                        <Link href="/blog-details/blog-details-light">
                          <a>Build a Beautiful Blog With Ease</a>
                        </Link>
                      </h4>
                      <p>
                        My job is simple and sophisticated, so it is possible to
                        describe and simple, and flowery language. I love the
                        feel and sophistication of its superiority. I like
                        people with a keen mind and at the same time easy to
                        talk to. These qualities can be combined perfectly
                        natural. However, things like people look miserable, if
                        these properties are connected.
                      </p>
                      <Link href="/blog-details/blog-details-light">
                        <a className="simple-btn mt-30">Read more about this blog post</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="img">
                  <Link href="/blog-details/blog-details-light">
                    <a>
                      <img src="/img/blog/b4.jpg" alt="Blog post about contemporary flooring trends and interior design inspiration" />
                    </a>
                  </Link>
                </div>
                <div className="content">
                  <div className="row">
                    <div className="col-10">
                      <a href="#0" className="date">
                        <span className="num">07</span>
                        <span>August</span>
                      </a>
                      <div className="tags">
                        <a href="#0">WordPress</a>
                        <a href="#0">Themeforest</a>
                        <a href="#0">Avo</a>
                      </div>
                      <h4 className="title">
                        <Link href="/blog-details/blog-details-light">
                          <a>Build a Beautiful Blog With Ease</a>
                        </Link>
                      </h4>
                      <p>
                        My job is simple and sophisticated, so it is possible to
                        describe and simple, and flowery language. I love the
                        feel and sophistication of its superiority. I like
                        people with a keen mind and at the same time easy to
                        talk to. These qualities can be combined perfectly
                        natural. However, things like people look miserable, if
                        these properties are connected.
                      </p>
                      <Link href="/blog-details/blog-details-light">
                        <a className="simple-btn mt-30">Read more about this blog post</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pagination">
                <span className="active">
                  <a href="#0">1</a>
                </span>
                <span>
                  <a href="#0">2</a>
                </span>
                <span>
                  <a href="#0">
                    <i className="fas fa-angle-right"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogStanderd;
