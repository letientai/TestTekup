import React from "react";

export const Card = ({item}) => {
  return (
    <div
      className="col-12 pb-4 grid-item category-mobile-app-webites-en col-md-6 col-lg-4"
      style={{ paddingLeft: "15px", paddingRight: "15px" }}
    >
      <a href="">
        <div className="card bg-white rounded-lg overflow-hidden fly-sm shadow shadow-hover pix-mb-302 pix-waiting pix-animate fade-in animated">
          <img
            width="418"
            height="418"
            src={item.img}
            className="card-img-top img-fluid"
          />
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <h6 className="card-title mb-0 text-heading-default">
                {item.title}
              </h6>
              <div className="pixicon-angle-right">{">"}</div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
