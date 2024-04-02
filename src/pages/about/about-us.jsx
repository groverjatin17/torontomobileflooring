import React from "react";
import AboutHeader from "../../components/About-header";
import AboutIntro from "../../components/About-intro";
import CallToAction from "../../components/Call-to-action";
import Footer from "../../components/Footer";
import MinimalArea from "../../components/Minimal-area";
import Navbar from "../../components/Navbar";
import SkillsCircle from "../../components/Skills-circle";
import Team1 from "../../components/Team1";
import VideoWithTestimonials from "../../components/Video-with-testimonials";
import LightTheme from "../../layouts/Light";
import appData from "../../data/app.json";
import Head from "next/head";

const AboutDark = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
        logo.setAttribute("src", appData.darkLogo);
      } else {
        navbar.classList.remove("nav-scroll");
        logo.setAttribute("src", appData.lightLogo);
      }
    });
  }, [navbarRef]);
  return (
    <LightTheme>
      <Head>
        <title>About Us | Toronto Mobile Flooring</title>
        <meta
          name="description"
          content="Experience the convenience of our mobile flooring service. We bring a wide range of floor samples directly to your home, allowing you to choose the perfect flooring solution in the comfort of your own space. Say goodbye to showroom hassle and let us transform your floors with quality materials and expert installation. Book your in-home consultation today!"
        />
        <meta
          name="keywords"
          content="mobile flooring, floor on wheels, store at your door, floor at door, floor at home, flooring samples, in-home consultation, floor selection, convenient flooring, flooring options, home improvement, flooring solutions, expert installation, quality materials"
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <Navbar nr={navbarRef} lr={logoRef} />
      <AboutHeader />
      <AboutIntro />
      {/* <Services4 withPadding withOutTitle /> */}
      <VideoWithTestimonials />
      <SkillsCircle subBG theme="light" />
      <Team1 />
      <MinimalArea />
      {/* <Clients1 theme="light" /> */}
      <CallToAction theme="light" subBG />
      <Footer />
    </LightTheme>
  );
};

export default AboutDark;
