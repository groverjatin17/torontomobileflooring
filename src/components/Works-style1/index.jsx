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
                    <img src="/img/portfolio/works/1.jpg" alt="Portfolio showcase - Classic hardwood flooring installation with traditional design" />
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
                    <img src="/img/portfolio/works/2.jpg" alt="Portfolio showcase - Contemporary laminate flooring with modern aesthetic" />
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
                    <img src="/img/portfolio/works/3.jpg" alt="Portfolio showcase - Luxury vinyl plank flooring in upscale residential setting" />
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
                    <img src="/img/portfolio/works/6.jpg" alt="Portfolio showcase - Dark hardwood flooring in professional office space" />
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
                    <img src="/img/portfolio/works/5.jpg" alt="Portfolio showcase - Coastal tile flooring design for interior renovation" />
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
                    <img src="/img/portfolio/works/4.jpg" alt="Portfolio showcase - Premium engineered hardwood flooring installation" />
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
                    <img src="/img/portfolio/works/7.jpg" alt="Portfolio showcase - Light wood flooring creating bright open concept room" />
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
                    <img src="/img/portfolio/works/8.jpg" alt="Portfolio showcase - Mixed flooring materials in multi-room residential project" />
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
                    <img src="/img/portfolio/works/9.jpg" alt="Portfolio showcase - Geometric pattern flooring design in contemporary home" />
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
