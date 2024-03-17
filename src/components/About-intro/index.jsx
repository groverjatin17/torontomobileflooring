import React from "react";
import Split from "../Split";

const AboutIntro = () => {
  return (
    <section className="intro-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h4>Who We Are ?</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                  At Toronto Mobile Flooring, we offer a diverse range of
                  high-quality flooring options crafted with exclusive
                  construction and workmanship. Our professional team can create
                  bespoke floors for your home or commercial space. From
                  engineered hardwoods to designer laminates, we provide expert
                  guidance and exceptional customer service, including doorstep
                  delivery and efficient installation. Explore our online store
                  for top-notch flooring solutions that blend elegance, style,
                  and value.
                </p>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
