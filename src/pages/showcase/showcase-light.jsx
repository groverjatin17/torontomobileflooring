import React from "react";
import Navbar from "../../components/Navbar";
import ShowcasesFullScreen from "../../components/Showcases-full-screen";
import LightTheme from "../../layouts/Light";

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
      {/* <NavbarFullMenu theme="light" /> */}
      <Navbar nr={navbarRef} lr={logoRef} />

      <ShowcasesFullScreen />
    </LightTheme>
  );
};

export default ShowcaseLight;
