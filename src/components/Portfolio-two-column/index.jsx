/* eslint-disable @next/next/no-img-element */
import React from "react";
import initIsotope from "../../common/initIsotope";

const PortfolioTwoColumn = ({ products }) => {
  React.useEffect(() => {
    if (!products?.length) return;

    const layoutGallery = () => {
      if (typeof window === "undefined") return;
      window.requestAnimationFrame(() => {
        initIsotope();
      });
    };

    const timer = window.setTimeout(layoutGallery, 300);
    const imageNodes = Array.from(
      document.querySelectorAll(".portfolio-two-column .item-img img")
    );
    let pendingImages = imageNodes.length;

    if (!imageNodes.length) {
      layoutGallery();
      return () => window.clearTimeout(timer);
    }

    const handleImageLoad = () => {
      pendingImages -= 1;
      if (pendingImages <= 0) {
        layoutGallery();
      }
    };

    imageNodes.forEach((img) => {
      if (img.complete) {
        handleImageLoad();
      } else {
        img.addEventListener("load", handleImageLoad, { once: true });
        img.addEventListener("error", handleImageLoad, { once: true });
      }
    });

    const handleResize = () => {
      window.setTimeout(layoutGallery, 100);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
      imageNodes.forEach((img) => {
        img.removeEventListener("load", handleImageLoad);
        img.removeEventListener("error", handleImageLoad);
      });
    };
  }, [products]);

  return (
    <section className="portfolio section-padding pb-70 portfolio-two-column">
      <div className="container">
        <div className="gallery full-width">
          <div className="row">
            {products &&
              products.map((product) => {
                const imageUrl = product?.data?.images?.[0]?.image || "";
                return (
                  <div
                    className="col-md-6 items graphic"
                    key={product?.id || product?.data?.sku || product?.data?.name}
                  >
                    <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                      <a href="#0" aria-label={product?.data?.name || "product"}>
                        {imageUrl ? (
                          <img
                            className="img-fluid"
                            src={imageUrl}
                            alt={product?.data?.name || "image"}
                          />
                        ) : (
                          <div className="image-placeholder" />
                        )}
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
                );
              })}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .portfolio-two-column .gallery .items {
          margin-bottom: 40px;
          padding: 0 15px;
        }

        .portfolio-two-column .gallery .items .item-img {
          position: relative;
          overflow: hidden;
          aspect-ratio: 4 / 5;
          min-height: 320px;
          background: #f3f3f3;
          display: flex;
          flex-direction: column;
        }

        .portfolio-two-column .gallery .items .item-img > a {
          display: block;
          width: 100%;
          height: 100%;
          flex: 1;
        }

        .portfolio-two-column .gallery .items .item-img img,
        .portfolio-two-column .gallery .items .item-img .image-placeholder {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .portfolio-two-column .gallery .items .item-img .image-placeholder {
          background: linear-gradient(135deg, #f3f3f3 0%, #e5e5e5 100%);
        }

        .portfolio-two-column .gallery .items .cont {
          margin-top: 20px;
          text-align: center;
        }

        @media (max-width: 768px) {
          .portfolio-two-column .gallery .items {
            padding: 0 10px;
            margin-bottom: 30px;
          }

          .portfolio-two-column .gallery .items .item-img {
            min-height: 260px;
            aspect-ratio: 4 / 5;
          }
        }
      `}</style>
    </section>
  );
};

export default PortfolioTwoColumn;
