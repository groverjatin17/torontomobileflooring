/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const PortfolioCustomColumn = ({
  column = 3,
  filterPosition,
  hideFilter,
  hideSectionTitle,
  products,
}) => {
  React.useEffect(() => {
    if (hideFilter || !products?.length) return;

    const timer = setTimeout(() => {
      initIsotope();
    }, 500);

    return () => clearTimeout(timer);
  }, [hideFilter, products]);

  const columnClass =
    column === 3
      ? "col-lg-4 col-md-6"
      : column === 2
      ? "col-md-6"
      : "col-12";

  const renderItem = (item) => (
    <div
      key={item.data.id ?? item.id}
      className={`${columnClass} items wow fadeInUp`}
      data-wow-delay=".4s"
    >
      <div className="item-img">
        <Link href={item.data.href}>
          <a className="imago wow">
            <img src={item.data.image} alt={item.data.title || "product"} />
            <div className="item-img-overlay"></div>
          </a>
        </Link>
      </div>
      <div className="cont">
        <h6>{item.data.title}</h6>
        <span>
          {item.data.tags?.map((tag, tagIndex) => (
            <React.Fragment key={tagIndex}>
              {tag.tagName}
              {tagIndex === item.data.tags.length - 1 ? "" : ", "}
            </React.Fragment>
          ))}
        </span>
      </div>
    </div>
  );

  return (
    <section className="portfolio section-padding portfolio-custom-column">
      {!hideSectionTitle && (
        <div className="container">
          <div className="sec-head custom-font">
            <h6 className="wow fadeIn" data-wow-delay=".5s">
              COLLECTION
            </h6>
            <Split>
              <h3 className="wow words chars splitting" data-splitting>
                Products.
              </h3>
            </Split>
            <span className="tbg text-right">PREMIUM</span>
          </div>
        </div>
      )}

      <div className={`${column === 3 ? "container-fluid" : "container"}`}>
        {!hideFilter && (
          <div className="row">
            <div
              className={`filtering ${
                filterPosition === "center"
                  ? "text-center"
                  : filterPosition === "left"
                  ? "text-left"
                  : "text-right"
              } col-12`}
            >
              <div className="filter">
                <span data-filter="*" className="active">
                  All
                </span>
                <span data-filter=".brand">Branding</span>
                <span data-filter=".web">Mobile App</span>
                <span data-filter=".graphic">Creative</span>
              </div>
            </div>
          </div>
        )}

        <div
          className={`gallery full-width${
            hideFilter ? " portfolio-grid row mx-0" : ""
          }`}
        >
          {products?.map(renderItem)}
        </div>
      </div>
    </section>
  );
};

export default PortfolioCustomColumn;
