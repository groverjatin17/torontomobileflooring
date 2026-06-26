/* eslint-disable @next/next/no-img-element */
import React from "react";

const ProjectDetails2Images = () => {
  return (
    <section className="projdtal">
      <div style={{ display: 'none' }}> &nbsp; </div>
      <div className="container-fluid">
        <div className="justified-gallery">
          <div className="row">
            <div className="col-md-3 pr-0">
              <a href="img/portfolio/project2/1.jpg">
                <img alt="Digital Transformation project - modern flooring installation phase 1" src="/img/portfolio/project2/1.jpg" />
              </a>
            </div>
            <div className="col-md-3 pr-0">
              <a href="img/portfolio/project2/2.jpg">
                <img alt="Digital Transformation project - contemporary design flooring layout" src="/img/portfolio/project2/2.jpg" />
              </a>
            </div>

            <div className="col-md-3 pr-0">
              <a href="img/portfolio/project2/3.jpg">
                <img alt="Digital Transformation project - sleek floor installation details" src="/img/portfolio/project2/3.jpg" />
              </a>
            </div>
            <div className="col-md-3 pr-0">
              <a href="img/portfolio/project2/5.jpg">
                <img alt="Digital Transformation project - completed modern flooring section" src="/img/portfolio/project2/5.jpg" />
              </a>
            </div>
            <div className="col-12">
              <a href="img/portfolio/project2/7.jpg">
                <img alt="Digital Transformation project - complete room with modern flooring design" src="/img/portfolio/project2/7.jpg" className="big-img" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails2Images;
