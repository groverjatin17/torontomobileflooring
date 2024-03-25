/* eslint-disable @next/next/no-img-element */
import React from "react";
import initIsotope from "../../common/initIsotope";

const PortfolioTwoColumn = ({ products }) => {

  const [pageLoaded, setPageLoaded] = React.useState(false);
  React.useEffect(() => {
    setPageLoaded(true);
    if (pageLoaded) {
      setTimeout(() => {
        initIsotope();
      }, 1000);
    }
  }, [pageLoaded]);
  return (
    <section className="portfolio section-padding pb-70">
      <div className="container">
        <div className="gallery full-width">
          {products &&
            products.map((product) => (
              <div className="col-md-6 items graphic" key={product.data.sku}>
                <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                  <a>
                    <img src={product?.data.images[0].image} alt="image" />
                  </a>
                  <div className="cont">
                    <h6>{product?.data.name}</h6>
                    <span>
                      <a href="#0">{product?.data.materialType}</a>,{" "}
                      <a href="#0">{product?.data.width}</a>,{" "}
                      <a href="#0">{product?.data.sku}</a>
                    </span>
                  </div>
                </div>
              </div>
            ))}

        </div>
      </div>
    </section>
  );
};

export default PortfolioTwoColumn;
