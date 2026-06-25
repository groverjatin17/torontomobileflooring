/* eslint-disable @next/next/no-img-element */
import React from "react";

const ProjectDetailsImages = () => {
  return (
    <section className="projdtal">
      <div style={{ display: "none" }}> &nbsp; </div>
      <div className="container-fluid">
        <div className="justified-gallery">
          <div className="row">
            <div className="col-md-6 pr-0">
              <a href="img/portfolio/project1/1.jpg">
                <img alt="Portfolio project image 1" src="/img/portfolio/project1/1.jpg" />
              </a>
            </div>
            <div className="col-md-6">
              <a href="img/portfolio/project1/2.jpg">
                <img alt="Portfolio project image 2" src="/img/portfolio/project1/2.jpg" />
              </a>
            </div>
            <div className="col-md-2 pr-0">
              <a href="img/portfolio/project1/3.jpg">
                <img alt="Portfolio project image 3" src="/img/portfolio/project1/3.jpg" />
              </a>
            </div>
            <div className="col-md-5 pr-0">
              <a href="img/portfolio/project1/4.jpg">
                <img alt="Portfolio project image 4" src="/img/portfolio/project1/4.jpg" />
              </a>
            </div>
            <div className="col-md-5 ">
              <a href="img/portfolio/project1/5.jpg">
                <img alt="Portfolio project image 5" src="/img/portfolio/project1/5.jpg" />
              </a>
            </div>
            <div className="col-md-6">
              <a href="img/portfolio/project1/6.jpg">
                <img alt="Portfolio project image 6" src="/img/portfolio/project1/6.jpg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsImages;
