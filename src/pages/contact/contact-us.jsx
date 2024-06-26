import React from "react";
import ContactHeader from "../../components/Contact-header";
import ContactWithMap from "../../components/Contact-with-map";
import Navbar from "../../components/Navbar";
import LightTheme from "../../layouts/Light";
import Head from "next/head";

const Contact = () => {
  const fixedHeader = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  React.useEffect(() => {
    document.querySelector("body").classList.add("menubarblack");
    setInterval(() => {
      if (fixedHeader.current) {
        var slidHeight = fixedHeader.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, []);
  return (
    <LightTheme>
      <Head>
        <title>Contact Us | Toronto Mobile Flooring</title>
        <meta
          name="description"
          content="Contact us for inquiries, questions, or to schedule a consultation with our team. Our friendly experts are ready to assist you with your flooring needs. Whether you're looking for product information, pricing details, or installation services, we're here to help. Reach out today and let us bring your flooring vision to life."
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <Navbar nr={navbarRef} theme="themeL" />
      <ContactHeader sliderRef={fixedHeader} />
      <div className="main-content" ref={MainContent}>
        <ContactWithMap theme="light" />
      </div>
    </LightTheme>
  );
};

export default Contact;
