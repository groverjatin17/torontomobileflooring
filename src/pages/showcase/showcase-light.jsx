import React from "react";
import Navbar from "../../components/Navbar";
import ShowcasesFullScreen from "../../components/Showcases-full-screen";
import LightTheme from "../../layouts/Light";
import Head from "next/head";

const ShowcaseLight = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  React.useEffect(() => {
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
  }, [navbarRef]);

  return (
    <LightTheme bdOn>
      <Head>
        <title>Flooring Projects | Toronto Mobile Flooring</title>
        <meta
          name="description"
          content="Discover our journey and expertise through a showcase of diverse projects completed across the city. From residential renovations to commercial developments, our About Us page highlights our commitment to quality, innovation, and customer satisfaction. Explore our portfolio of projects to see how we bring visions to life and make a positive impact in our community."
        />
        <meta name="robots" content="index, follow" />
      </Head>
      {/* <NavbarFullMenu theme="light" /> */}
      <Navbar nr={navbarRef} lr={logoRef} />

      <ShowcasesFullScreen />
    </LightTheme>
  );
};

export default ShowcaseLight;
