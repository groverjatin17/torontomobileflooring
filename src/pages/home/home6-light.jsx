import { useRef, useEffect, useState } from "react";
//= ================== Layout ==================//
import LightTheme from "../../layouts/Light";
//= ================== Components ==================//
import Navbar from "../../components/Navbar";
import Intro from "../../components/Intro-txt2";
import Features from "../../components/Features";
import ServicesTop from "../../components/Services5";
import Skills from "../../components/Skills-circle2";
import ServicesBottom from "../../components/Services6";
import Testimonials from "../../components/Testimonials2";
import Clients from "../../components/Clients1";
import Blogs from "../../components/Blogs-three-column1";
import CallToAction from "../../components/Call-to-action";
import Footer from "../../components/Footer";
import Accordion from "../../components/Accordion";
import { builder } from "@builder.io/react";

//= ================== Page Data ==================//
import appData from "../../data/app.json";
import PortfolioCustomColumn from "../../components/Portfolio-custom-column";
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

const Homepage6 = () => {
  const navbarRef = useRef(null);
  const logoRef = useRef(null);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchContent() {
      const listOfProducts = await builder.getAll("categories");

      setProducts(listOfProducts);
    }
    fetchContent();
  }, []);

  useEffect(() => {
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

    // window.addEventListener("load", () => {
    //   // document.body.classList.add('dark2');
    //   if (document.querySelector(".fixed-slider")) {
    //     var slidHeight = document
    //       .querySelector(".fixed-slider")
    //       .getBoundingClientRect().height;
    //     console.log("slidHeight", slidHeight);
    //   }

    //   document
    //     .querySelector(".main-content")
    //     .style.setProperty("margin-top", slidHeight + "px");
    // });
  }, [navbarRef]);

  useEffect(() => {
    // window.addEventListener("load", () => {
    // document.body.classList.add('dark2');
    if (document.querySelector(".fixed-slider")) {
      var slidHeight = document
        .querySelector(".fixed-slider")
        .getBoundingClientRect().height;

      document
        .querySelector(".main-content")
        .style.setProperty("margin-top", slidHeight + "px");
    } else {
      console.log("slidHeight not found");
    }

    // });
  });

  return (
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <Intro />
      <div className="main-content">
        <Features />
        <ServicesTop />
        {products.length && (
          <PortfolioCustomColumn
            products={products}
            column={3}
            filterPosition="center"
            hideFilter
          />
        )}

        <ServicesBottom />
        <Testimonials />
        <Clients theme="light" />
        <Blogs newHome subBG />
        <Skills theme="light" />

        <CallToAction theme="light" img="/img/pattern-light.png" />
        <Footer noSubBG />
      </div>
    </LightTheme>
  );
};

export default Homepage6;
