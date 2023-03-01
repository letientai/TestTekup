import React from "react";

export const Header = () => {
  return (
    <div className="col-12 pix-pb-50 text-center pix-portfolio-nav">
      <a
        href="#"
        className="tekup_portfolio_filter is-checked btn btn-link btn-colored-shadow"
      >
        <strong>All</strong>
      </a>
      <a
        href="#"
        className="tekup_portfolio_filter btn btn-link btn-colored-shadow"
      >
        <strong>Manpower Supply</strong>
      </a>
      <a
        href="#"
        className="tekup_portfolio_filter btn btn-link btn-colored-shadow"
      >
        <strong>Mobile App / Websites</strong>
      </a>
      <a
        href="#"
        className="tekup_portfolio_filter btn btn-link btn-colored-shadow"
      >
        <strong>UI/UX Design</strong>
      </a>
    </div>
  );
};
