import React, { useState } from "react";
import { builder } from "@builder.io/react";
import LightTheme from "../../layouts/Light";
import Navbar from "../../components/Navbar";
import addParlx from "../../common/addParlx";
import SmallFooter from "../../components/Small-footer";
import CallToAction from "../../components/Call-to-action";
import PortfolioTwoColumn from "../../components/Portfolio-two-column";
import Head from "next/head";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

const EngHardwoodPage = () => {
  const fixedHeader = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  const [pageLoaded, setPageLoaded] = React.useState(false);
  const [products, setProducts] = useState([]);

  React.useEffect(() => {
    document.querySelector("body").classList.add("menubarblack");
    setPageLoaded(true);
    if (pageLoaded) {
      addParlx();
    }
  }, [pageLoaded]);
  React.useEffect(() => {
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    }
    // else {
    //   navbar.classList.remove("nav-scroll");
    // }
    // window.addEventListener("scroll", () => {
    //   if (window.pageYOffset > 300) {
    //     navbar.classList.add("nav-scroll");
    //   } else {
    //     navbar.classList.remove("nav-scroll");
    //   }
    // });
    if (fixedHeader.current) {
      var slidHeight = fixedHeader.current.offsetHeight;
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }
    // window.addEventListener("load", () => {
    //   setTimeout(() => {
    //     if (fixedHeader.current) {
    //       var slidHeight = fixedHeader.current.offsetHeight;
    //       if (MainContent.current) {
    //         MainContent.current.style.marginTop = slidHeight + "px";
    //       }
    //     }
    //   }, 0);
    // });
  }, [fixedHeader, MainContent, navbarRef]);

  React.useEffect(() => {
    async function fetchContent() {
      const products = await builder.getAll("product", {
        query: {
          data: {
            category: "Engineered Hardwood",
          },
        },
      });
      setProducts(products);
    }
    fetchContent();
  }, []);
  return (
    <LightTheme>
      <Head>
        <title>Engineered Hardwood | Toronto Mobile Flooring</title>
        <meta
          name="description"
          content="Discover our premium collection of engineered hardwood products, including versatile flooring options and durable furniture pieces. 100% Canadian Engineered hardwood floors combines the natural beauty of wood with enhanced stability, making it ideal for a wide range of interior designs. Explore our selection of oak, hickory, maple and walnut engineered hardwood for a timeless and sophisticated look in your home or commercial space. "
        />
        <meta
          name="keywords"
          content="engineered hardwood floors, durable flooring, engineered wood, Canadian engineered hardwood, oak engineered hardwood, maple engineered hardwood, hickory engineered hardwood, walnut engineered hardwood, sustainable flooring, easy installation, moisture resistant, engineered wood planks, Canadian market"
        />
        <meta
          name="keywords"
          content="mobile flooring, floor on wheels, store at your door, floor at door, floor at home, flooring samples, in-home consultation, floor selection, convenient flooring, flooring options, home improvement, flooring solutions, expert installation, quality materials"
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
      <header
        ref={fixedHeader}
        className="works-header fixed-slider hfixd valign"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-11 static">
              <div className="capt mt-50">
                <div className="parlx">
                  <h2 className="custom-font">Hardwood</h2>
                  <p>100% Canadian, handcrafted right here at home.</p>
                </div>

                <div className="bactxt custom-font valign">
                  <span className="full-width">SOLID</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div ref={MainContent} className="main-content">
        <PortfolioTwoColumn products={products} />
        <CallToAction theme="light" />
        <SmallFooter />
      </div>
    </LightTheme>
  );
};

export default EngHardwoodPage;
