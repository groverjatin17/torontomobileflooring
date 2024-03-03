/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import { companyName } from "../../constants/index";
const Services5 = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    console.clear();
  }, []);

  return (
    <section className="simpl-intro section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 offset-lg-1 md-mb50">
            <div className="img">
              <img src="/img/intro/planning.jpg" alt="" />
              <div className="vid-icon">
                <a
                  className="vid"
                  href="https://vimeo.com/135368003"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(true);
                  }}
                >
                  <div className="vid-butn">
                    <span className="icon">
                      <i className="fas fa-play"></i>
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1 valign">
            <div className="cont">
              <div className="sub-title">
                <h6>Who We Are ?</h6>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <h3 className="mb-30 fw-700">
                Investing in <br /> the digital future.
              </h3>
              <p>
                Welcome to &nbsp;
                <span style={{ color: "#75dab4", fontWeight: "bold" }}>
                  {companyName.toUpperCase()}
                </span>                , where imagination meets innovation and floors come alive with
                boundless possibilities.
                <br />
                <br />
                We are a passionate team of flooring enthusiasts, dedicated to
                transforming ordinary spaces into extraordinary experiences.
                With our unrivaled craftsmanship, superior quality materials,
                and an unwavering commitment to customer satisfaction, we
                redefine what it means to step onto a floor.
                <br />
                <br />
                From classic elegance to modern flair, we are here to turn your
                vision into reality. Discover the artistry, discover the beauty,
                and discover the limitless potential of flooring with{" "}
                <span style={{ color: "#75dab4", fontWeight: "bold" }}>
                  {companyName.toUpperCase()}
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
      {typeof window !== "undefined" && (
        <ModalVideo
          channel="vimeo"
          autoplay
          isOpen={isOpen}
          videoId="135368003"
          onClose={() => setOpen(false)}
        />
      )}
    </section>
  );
};

export default Services5;
