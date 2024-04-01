/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import portfolio1Data from "../../data/sections/portfolio1.json";

const PortfolioCustomColumn = ({
  column,
  filterPosition,
  hideFilter,
  hideSectionTitle,
  products
}) => {

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
    <section className="portfolio section-padding">
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
        <div className="row">
          {!hideFilter && (
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
          )}

          <div className="gallery full-width">
            {products && products.map((item, index) => (
              <div
                key={item.data.id}
                className={`${
                  column === 3
                    ? "col-lg-4 col-md-6"
                    : column === 2
                    ? "col-md-6"
                    : "col-12"
                } items ${item.data.filterCategory} wow fadeInUp ${
                  item.data.id === 2 && column == 3
                    ? "lg-mr"
                    : item.data.id === 1 && column == 2
                    ? "lg-mr"
                    : ""
                }`}
                data-wow-delay=".4s"
              >
                <div className="item-img">
                  <Link href={item.data.href}>
                    <a className="imago wow">
                      <img src={item.data.image} alt="image" />
                      <div className="item-img-overlay"></div>
                    </a>
                  </Link>
                </div>
                <div className="cont">
                  <h6>{item.data.title}</h6>
                  <span>
                    {item.data.tags.map((tag, index) => (
                      <React.Fragment key={index * 3}>
                        {/* <Link href={item.data.href}> */}
                        {tag.tagName}
                        {/* </Link> */}
                        {index == item.data.tags.length - 1 ? "" : ", "}
                      </React.Fragment>
                    ))}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCustomColumn;
