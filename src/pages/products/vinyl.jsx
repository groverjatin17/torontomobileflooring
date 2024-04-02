import React from "react";
import LightTheme from "../../layouts/Light";
import Navbar from "../../components/Navbar";
import addParlx from "../../common/addParlx";
import SmallFooter from "../../components/Small-footer";
import CallToAction from "../../components/Call-to-action";
import { builder } from "@builder.io/react";
import PortfolioTwoColumn from "../../components/Portfolio-two-column";
import Head from "next/head";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

const VinylPage = () => {
  const fixedHeader = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  const [pageLoaded, setPageLoaded] = React.useState(false);
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    async function fetchContent() {
      const products = await builder.getAll("product", {
        query: {
          data: {
            category: "lvp",
          },
        },
      });
      setProducts(products);
    }
    fetchContent();
  }, []);

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
    if (fixedHeader.current) {
      var slidHeight = fixedHeader.current.offsetHeight;
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }

    // if (document.readyState === "complete") {
    //   console.log("Page already loaded");
    //   if (fixedHeader.current) {
    //     var slidHeight = fixedHeader.current.offsetHeight;
    //     if (MainContent.current) {
    //       MainContent.current.style.marginTop = slidHeight + "px";
    //     }
    //   }
    // } else {
    //   console.log("Page yet to be loaded");
    // }
    window.addEventListener("load", () => {
      setTimeout(() => {
        if (fixedHeader.current) {
          var slidHeight = fixedHeader.current.offsetHeight;
          if (MainContent.current) {
            MainContent.current.style.marginTop = slidHeight + "px";
          }
        }
      }, 0);
    });
  }, [fixedHeader, MainContent, navbarRef]);

  return (
    <LightTheme>
      <Head>
        <title>Luxury Vinyl Planks | Toronto Mobile Flooring</title>
        <meta
          name="description"
          content="Explore our collection of luxury vinyl planks, designed for commercial-grade durability and style. Our scratch-proof and dent-proof vinyl floors feature click-lock technology for easy installation. Enjoy the benefits of 100% waterproof flooring that is also pet-friendly, making it perfect for any space. Upgrade to our premium vinyl floors for lasting beauty and functionality."
        />
        <meta
          name="keywords"
          content="luxury vinyl floors, durable flooring, waterproof luxury vinyl, scratch resistant, pet friendly flooring, wood look vinyl, tile look vinyl, commercial grade vinyl, easy maintenance, vinyl planks, vinyl tiles, embossed texture"
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
                  <h2 className="custom-font">LUXURY VINYL PLANKS</h2>
                  <p>Floors that repel, Water&apos;s spell</p>
                </div>

                <div className="bactxt custom-font valign">
                  <span className="full-width">VINYL</span>
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

export default VinylPage;
