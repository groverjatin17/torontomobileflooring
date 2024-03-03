import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import LightTheme from "../../layouts/Light";
import { useRouter } from "next/router";
import { Blog1, Blog2, Blog3 } from "../../components/Blog-details";

const BlogDetailsLight = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  const router = useRouter();
  const { id } = router.query;

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

  const renderBlog = () => {
    if (id == 1) {
      return <Blog1 />;
    } else if (id == 2) {
      return <Blog2 />;
    } else {
      return <Blog3 />;
    }
  };

  return (
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
      <section className="page-header blg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-9">
              <div className="cont text-center">
                {id == 1 && (
                  <h2>What are the most prominent Hardwoods in Canada</h2>
                )}
                {id == 2 && (
                  <h2>
                    How ChatGPT is going to revolutioize the tech industry
                  </h2>
                )}
                {id == 3 && (
                  <h2>Beach House Interior Design And Flooring Ideas</h2>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <BlogDetails /> */}
      {id && renderBlog()}
      {/* <Blog1 /> */}
      <Footer />
    </LightTheme>
  );
};

export default BlogDetailsLight;
