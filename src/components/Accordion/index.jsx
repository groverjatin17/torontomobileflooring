import React, { useState } from "react";
import Image from "next/image";
// import './Accordion.css'; // Import CSS file for styles (create your own styles)

const Accordion = ({ panels }) => {
  const [activeIndex, setActiveIndex] = useState(0);

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
                <Image src={panel.iconPath} alt={panel.alt} width={24} height={24} />
              </div>
              {panel.label}
            </div>
            <div className="accordion-title-arrow">
              {activeIndex === index ? (
                <Image
                  src="/img/icons/chevron-up-solid.svg"
                  alt="chevron up icon"
                  width={18}
                  height={18}
                />
              ) : (
                <Image
                  src="/img/icons/chevron-down-solid.svg"
                  alt="chevron down icon"
                  width={18}
                  height={18}
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
