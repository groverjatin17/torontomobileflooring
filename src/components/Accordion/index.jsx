import React, { useState } from "react";
// import './Accordion.css'; // Import CSS file for styles (create your own styles)

const Accordion = ({ panels }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const togglePanel = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="accordion">
      {panels.map((panel, index) => (
        <div key={index} className="accordion-panel">
          <div
            className={`accordion-panel__header ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => togglePanel(index)}
          >
            <div className="accordion-title">
              <div className="accordion-title-icon">
                <img src={panel.iconPath} alt={panel.alt} />
              </div>
              {panel.label}
            </div>
            <div className="accordion-title-arrow">
              {activeIndex === index ? (
                <img
                  src="/img/icons/chevron-up-solid.svg"
                  alt="chevron up icon"
                />
              ) : (
                <img
                  src="/img/icons/chevron-down-solid.svg"
                  alt="chevron down icon"
                />
              )}
            </div>
          </div>

          <div
            className={`accordion-panel__content ${
              activeIndex === index ? "open" : ""
            }`}
            style={{
              maxHeight: activeIndex === index ? "100px" : "0px",
            }} // Adjust height as needed
          >
            {panel.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
