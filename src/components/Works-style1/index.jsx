/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import tooltipEffect from "../../common/tooltipEffect";

const WorksStyle1 = () => {
  React.useEffect(() => {
    tooltipEffect();
  }, []);
  return (
    <section className="works section-padding pb-70">
      <div style={{ display: 'none' }}> &nbsp; </div>
      <div className="container">
        <div className="row lg-space">
          <div className="col-lg-4 col-md-6">
            <div className="item">
              <Link href="/project-details2/project-details2-dark">
                <a>
                  <div
                    className="img"
                    data-tooltip-tit="Work image"
                    data-tooltip-sub="Design"
                  >
                    <img src="/img/portfolio/works/1.jpg" alt="Portfolio work image 1" />
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 valign">
            <div className="item">
              <Link href="/project-details2/project-details2-dark">
                <a>
                  <div
                    className="img"
                    data-tooltip-tit="Work image"
                    data-tooltip-sub="Branding"
                  >
                    <img src="/img/portfolio/works/2.jpg" alt="Portfolio work image 2" />
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item">
              <Link href="/project-details2/project-details2-dark">
                <a>
                  <div
                    className="img"
                    data-tooltip-tit="Work image"
                    data-tooltip-sub="Photography"
                  >
                    <img src="/img/portfolio/works/3.jpg" alt="Portfolio work image 3" />
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 valign">
            <div className="item">
              <Link href="/project-details2/project-details2-dark">
                <a>
                  <div
                    className="img"
                    data-tooltip-tit="Work image"
                    data-tooltip-sub="Design"
                  >
                    <img src="/img/portfolio/works/6.jpg" alt="Portfolio work image 6" />
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item">
              <Link href="/project-details2/project-details2-dark">
                <a>
                  <div
                    className="img"
                    data-tooltip-tit="Work image"
                    data-tooltip-sub="Web Design"
                  >
                    <img src="/img/portfolio/works/5.jpg" alt="Portfolio work image 5" />
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 valign">
            <div className="item">
              <Link href="/project-details2/project-details2-dark">
                <a>
                  <div
                    className="img"
                    data-tooltip-tit="Work image"
                    data-tooltip-sub="Photography"
                  >
                    <img src="/img/portfolio/works/4.jpg" alt="Portfolio work image 4" />
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item">
              <Link href="/project-details2/project-details2-dark">
                <a>
                  <div
                    className="img"
                    data-tooltip-tit="Work image"
                    data-tooltip-sub="Creative"
                  >
                    <img src="/img/portfolio/works/7.jpg" alt="Portfolio work image 7" />
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 valign">
            <div className="item">
              <Link href="/project-details2/project-details2-dark">
                <a>
                  <div
                    className="img"
                    data-tooltip-tit="Work image"
                    data-tooltip-sub="Branding"
                  >
                    <img src="/img/portfolio/works/8.jpg" alt="Portfolio work image 8" />
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item">
              <Link href="/project-details2/project-details2-dark">
                <a>
                  <div
                    className="img"
                    data-tooltip-tit="Work image"
                    data-tooltip-sub="Design"
                  >
                    <img src="/img/portfolio/works/9.jpg" alt="Portfolio work image 9" />
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyle1;
