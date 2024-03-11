/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Formik, Form, Field } from "formik";
import Link from "next/link";
import appData from "../../data/app.json";
import {
  handleDropdown,
  handleMobileDropdown,
  handleSearch,
} from "../../common/navbar";

const Navbar = ({ lr, nr, theme }) => {
  // React.useEffect(() => {
  //   handleSearch();
  // }, []);
  return (
    <nav
      ref={nr}
      className={`nav-scroll navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container" style={{ padding: "10px 0" }}>
        <Link href="/">
          <a className="logo">
            {theme ? (
              theme === "themeL" ? (
                <img ref={lr} src={`${appData.darkLogo}`} alt="logo" />
              ) : (
                <img ref={lr} src={`${appData.lightLogo}`} alt="logo" />
              )
            ) : (
              <img ref={lr} src={`${appData.lightLogo}`} alt="logo" />
            )}
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Products
              </span>
              <div className="dropdown-menu">
                <Link href="/products/solid">
                  <a className="dropdown-item">Solid Hardwood</a>
                </Link>
                <Link href="/products/eng-hardwood">
                  <a className="dropdown-item">Engineered Hardwood</a>
                </Link>
                <Link href="/products/vinyl">
                  <a className="dropdown-item">Premium LVP Vinyl</a>
                </Link>
                <Link href="/products/laminate">
                  <a className="dropdown-item">Laminate</a>
                </Link>

                {/* <Link href="/home/home3-light">
                  <a className="dropdown-item">Business Startup</a>
                </Link>
                <Link href="/home/home4-light">
                  <a className="dropdown-item">One Page</a>
                </Link>
                <Link href="/home/home5-light">
                  <a className="dropdown-item">Freelancer</a>
                </Link>
                <Link href="/home/home6-light">
                  <a className="dropdown-item">IT Frog</a>
                </Link> */}
              </div>
            </li>

            {/* <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Showcases
              </span>
              <div className="dropdown-menu">
                <Link href="/showcase/showcase-light">
                  <a className="dropdown-item">Full Screen</a>
                </Link>
                <Link href="/showcase2/showcase2-light">
                  <a className="dropdown-item">Creative Carousel</a>
                </Link>
                <Link href="/showcase3/showcase3-light">
                  <a className="dropdown-item">Radius Carousel</a>
                </Link>
                <Link href="/showcase4/showcase4-light">
                  <a className="dropdown-item">Columns Carousel</a>
                </Link>
                <Link href="/showcase5/showcase5-light">
                  <a className="dropdown-item">Boxed Carousel</a>
                </Link>
              </div>
            </li> */}
            <li className="nav-item">
              <Link href="/showcase/showcase-light">
                <a className="nav-link">Projects</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about/about-us">
                <a className="nav-link">About</a>
              </Link>
            </li>

            {/* <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                portfolio
              </span>
              <div className="dropdown-menu">
                <Link href="/works/works-light">
                  <a className="dropdown-item">Mouse Info</a>
                </Link>
                <Link href="/works2/works2-light">
                  <a className="dropdown-item">Masonry 3 Columns</a>
                </Link>
                <Link href="/works3/works3-light">
                  <a className="dropdown-item">Masonry 2 Columns</a>
                </Link>
                <Link href="/works4/works4-light">
                  <a className="dropdown-item">Pinterest List</a>
                </Link>
              </div>
            </li> */}
            <li className="nav-item">
              <Link href="/contact/contact-us">
                <a className="nav-link">Contact</a>
              </Link>
            </li>
          </ul>
          {/* <div className="search">
            <span className="icon pe-7s-search cursor-pointer"></span>
            <div className="search-form text-center custom-font">
              <Formik
                initialValues={{
                  search: "",
                }}
                onSubmit={async (values) => {
                  alert(JSON.stringify(values, null, 2));
                  // Reset the values
                  values.search = "";
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <Field type="text" name="search" placeholder="Search" />
                  </Form>
                )}
              </Formik>
              <span className="close pe-7s-close cursor-pointer"></span>
            </div>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
