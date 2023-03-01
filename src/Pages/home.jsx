import React from "react";
import { Card } from "../Components/Card";
import { Header } from "../Components/Header";
import "./home.scss";
export const Home = () => {
  const data = [
    {
      title: "TOI 3D Customize E-commerce",
      img: "https://tekup.vn/wp-content/uploads/2022/09/image-1.png",
    },
    {
      title: "E-learning – Internal training platform",
      img: "https://tekup.vn/wp-content/uploads/2022/09/image.png",
    },
    {
      title: "Summer 21 Cosmetic E-commerce Platform",
      img: "https://tekup.vn/wp-content/uploads/2022/08/summer21-thumbnail.png",
    },
    {
      title:
        "Kiva – Ambition to digital transformation in the brokerage assiduity",
      img: "https://tekup.vn/wp-content/uploads/2022/08/kiva-thumbnail.png",
    },
    {
      title: "Boxgo – Professional Warehouse Management",
      img: "https://tekup.vn/wp-content/uploads/2022/08/boxgo-thumbnail.png",
    },
  ];

  return (
    <div className="wpb_column vc_column_container vc_col-sm-12 text-left mt-5 container-xxl">
      <div className="vc_column-inner">
        <div className="pix-portfolio">
          <Header />
          <div className="portfolio_grid tekup_portfolio pix-is-loaded w-100 d-flex">
            {data.map((item, index) => (
              <Card item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
