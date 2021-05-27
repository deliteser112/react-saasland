import React from "react";

const EventFact = () => {
  return (
    <section className="event_fact_area sec_pad">
      <div className="container">
        <div className="hosting_title security_title text-center">
          <h2>
            <span>Over 1200+</span> completed work & Still counting.
          </h2>
        </div>
        <div className="seo_fact_info">
          <div className="seo_fact_item wow fadeIn">
            <div className="text">
              <div className="counter one">693</div>
              <p>Happy Clients</p>
            </div>
          </div>
          <div className="seo_fact_item wow fadeIn" data-wow-delay="0.3s">
            <div className="text">
              <div className="counter two">276</div>
              <p>Projects</p>
            </div>
          </div>
          <div className="seo_fact_item wow fadeIn" data-wow-delay="0.6s">
            <div className="text">
              <div className="counter three">102</div>
              <p>SEO Winners</p>
            </div>
          </div>
          <div className="seo_fact_item last wow fadeIn" data-wow-delay="0.9s">
            <div className="text">
              <div className="counter four">93</div>
              <p>Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default EventFact;
