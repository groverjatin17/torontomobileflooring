/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const PortfolioTwoColumn = () => {
  const [pageLoaded, setPageLoaded] = React.useState(false);
  React.useEffect(() => {
    setPageLoaded(true);
    if (pageLoaded) {
      setTimeout(() => {
        initIsotope();
      }, 1000);
    }
  }, [pageLoaded]);
  return (
    <section className="portfolio section-padding pb-70">
      <div className="container">
        <div className="gallery full-width">
          <div className="col-md-6 items graphic">
            <div className="item-img wow fadeInUp" data-wow-delay=".4s">
              {/* <Link href="/project-details/project-details-dark"> */}
                <a>
                  <img src="/img/portfolio/works/blonde.jpg" alt="image" />
                </a>
              {/* </Link> */}
              <div className="cont">
                <h6>Blonde</h6>
                <span>
                  <a href="#0">Maple</a>, <a href="#0">4-1/4 inch</a>,{" "}
                  <a href="#0">31000</a>
                </span>
              </div>
            </div>
          </div>

          <div className="col-md-6 items web">
            <div className="row">
              <div className="col-lg-10">
                <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                  {/* <Link href="/project-details/project-details-dark"> */}
                    <a>
                      <img src="/img/portfolio/works/ebony.jpg" alt="image" />
                    </a>
                  {/* </Link> */}
                  <div className="cont">
                    <h6>Ebony</h6>
                    <span>
                      <a href="#0">Maple</a>, <a href="#0">4-1/4 inch</a>,{" "}
                      <a href="#0">31001</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 items brand">
            <div className="item-img wow fadeInUp" data-wow-delay=".4s">
              {/* <Link href="/project-details/project-details-dark"> */}
                <a>
                  <img src="/img/portfolio/works/biscotti.jpg" alt="image" />
                </a>
              {/* </Link> */}
              <div className="cont">
                <h6>Biscotti</h6>
                <span>
                  <a href="#0">Maple</a>, <a href="#0">4-1/4 inch</a>,{" "}
                  <a href="#0">31006</a>
                </span>
              </div>
            </div>
          </div>

          <div className="col-md-6 items brand">
            <div className="row">
              <div className="col-lg-10 offset-lg-2">
                <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                  {/* <Link href="/project-details/project-details-dark"> */}
                    <a>
                      <img src="/img/portfolio/works/syrup.jpg" alt="image" />
                    </a>
                  {/* </Link> */}
                  <div className="cont">
                    <h6>Syrup</h6>
                    <span>
                      <a href="#0">Maple</a>, <a href="#0">4-1/4 inch</a>,{" "}
                      <a href="#0">31004</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 items web">
            <div className="row">
              <div className="col-lg-11 offset-lg-1">
                <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                  {/* <Link href="/project-details/project-details-dark"> */}
                    <a>
                      <img
                        src="/img/portfolio/works/sweedish.jpg"
                        alt="image"
                      />
                    </a>
                  {/* </Link> */}
                  <div className="cont">
                    <h6>Sweedish</h6>
                    <span>
                      <a href="#0">Maple</a>, <a href="#0">4-1/4 inch</a>,{" "}
                      <a href="#0">31005</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 items graphic">
            <div className="item-img wow fadeInUp" data-wow-delay=".4s">
              {/* <Link href="/project-details/project-details-dark"> */}
                <a>
                  <img src="/img/portfolio/works/khakhi.jpg" alt="image" />
                </a>
              {/* </Link> */}
              <div className="cont">
                <h6>Khakhi</h6>
                <span>
                  <a href="#0">Maple</a>, <a href="#0">4-1/4 inch</a>,{" "}
                  <a href="#0">31002</a>
                </span>
              </div>
            </div>
          </div>

          <div className="col-md-6 items brand">
            <div className="row">
              <div className="col-lg-10">
                <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                  {/* <Link href="/project-details/project-details-dark"> */}
                    <a>
                      <img src="/img/portfolio/works/granola.jpg" alt="image" />
                    </a>
                  {/* </Link> */}
                  <div className="cont">
                    <h6>Granola</h6>
                    <span>
                      <a href="#0">Maple</a>, <a href="#0">4-1/4 inch</a>,{" "}
                      <a href="#0">31003</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 items web">
            <div className="item-img wow fadeInUp" data-wow-delay=".4s">
              {/* <Link href="/project-details/project-details-dark"> */}
                <a>
                  <img src="/img/portfolio/works/colada.jpg" alt="image" />
                </a>
              {/* </Link> */}
              <div className="cont">
                <h6>Colada</h6>
                <span>
                  <a href="#0">Maple</a>, <a href="#0">4-1/4 inch</a>,{" "}
                  <a href="#0">31007</a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-6 items web">
            <div className="row">
              <div className="col-lg-11 offset-lg-1">
                <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                  {/* <Link href="/project-details/project-details-dark"> */}
                    <a>
                      <img
                        src="/img/portfolio/works/sweedish.jpg"
                        alt="image"
                      />
                    </a>
                  {/* </Link> */}
                  <div className="cont">
                    <h6>Sweedish</h6>
                    <span>
                      <a href="#0">Maple</a>, <a href="#0">4-1/4 inch</a>,{" "}
                      <a href="#0">31005</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioTwoColumn;
