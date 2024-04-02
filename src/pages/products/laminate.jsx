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

const LaminatePage = () => {
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
            category: "laminate",
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

  return (
    <LightTheme>
      <Head>
        <title>Laminate | Toronto Mobile Flooring</title>
        <meta
          name="description"
          content="Discover the latest in laminate floors with our sale on high-quality products featuring German technology. Our waterproof and pet-friendly laminate flooring options offer durability and style for any space. Explore a wide range of designs and finishes, from classic oak to modern grey tones, perfect for residential and commercial use. Upgrade your floors today with our top-rated laminate options."
        />
        <meta
          name="keywords"
          content="laminate floors, durable flooring, hardwood look laminate, oak laminate, maple laminate, cherry laminate, walnut laminate, scratch resistant, water resistant, easy maintenance, laminate wood planks, embossed texture, laminate flooring types"
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
                  <h2 className="custom-font">LAMINATE</h2>
                  <p>Style meets durability in our quality laminate floors</p>
                </div>

                <div className="bactxt custom-font valign">
                  <span className="full-width">LAMINATE</span>
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

export default LaminatePage;
