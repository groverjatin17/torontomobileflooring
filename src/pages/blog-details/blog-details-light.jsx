import React from "react";
import BlogDetails from "../../components/Blog-details";
import Blog1 from "../../components/Blog-details/blog1";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import LightTheme from "../../layouts/Light";

const BlogDetailsLight = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  React.useEffect(() => {
    document.querySelector("body").classList.add("menubarblack");
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
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return (
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
      <section className="page-header blg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-9">
              <div className="cont text-center">
                <h2>What are the most prominent Hardwoods in Canada</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <BlogDetails /> */}
      <Blog1 />
      <Footer />
    </LightTheme>
  );
};

export default BlogDetailsLight;
