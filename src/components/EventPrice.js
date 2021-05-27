import React from "react";
const EventPrice = () => {
  return (
    <section className="event_price_area sec_pad">
      <div className="container">
        <div className="hosting_title security_title text-center">
          <h2>
            <span>14-day free trial.</span> No credit card required.
          </h2>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-4 col-sm-6">
            <div className="analytices_price_item event_price_item wow fadeInUp">
              <div className="p_head">
                <h5>One day Pass</h5>
                <div className="rate">$59.99</div>
              </div>
              <ul className="list-unstyled p_body">
                <li>
                  All Lite features <i className="ti-check"></i>
                </li>
                <li>
                  Unlimited contacts <i className="ti-check"></i>
                </li>
                <li>
                  Remove Sendinblue <i className="ti-close"></i>
                </li>
                <li>
                  logo from emails <i className="ti-close"></i>
                </li>
                <li>
                  Advanced statistics <i className="ti-check"></i>
                </li>
              </ul>
              <div className="text-center">
                <a href="/#" className="event_btn event_btn_two btn_hover">
                  Buy Ticket
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div
              className="analytices_price_item event_price_item active wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="p_head">
                <h5>Starter</h5>
                <h6 className="tag">
                  <i className="icon_ribbon_alt"></i>Most popular
                </h6>
                <div className="rate">$59.99</div>
              </div>
              <ul className="list-unstyled p_body">
                <li>
                  All Lite features <i className="ti-check"></i>
                </li>
                <li>
                  Unlimited contacts <i className="ti-check"></i>
                </li>
                <li>
                  Remove Sendinblue <i className="ti-close"></i>
                </li>
                <li>
                  logo from emails <i className="ti-close"></i>
                </li>
                <li>
                  Advanced statistics <i className="ti-check"></i>
                </li>
              </ul>
              <div className="text-center">
                <a href="/#" className="event_btn btn_hover">
                  Buy Ticket
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div
              className="analytices_price_item event_price_item wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="p_head">
                <h5>VIP Seat</h5>
                <div className="rate">$159.99</div>
              </div>
              <ul className="list-unstyled p_body">
                <li>
                  All Lite features <i className="ti-check"></i>
                </li>
                <li>
                  Unlimited contacts <i className="ti-check"></i>
                </li>
                <li>
                  Remove Sendinblue <i className="ti-close"></i>
                </li>
                <li>
                  logo from emails <i className="ti-close"></i>
                </li>
                <li>
                  Advanced statistics <i className="ti-check"></i>
                </li>
              </ul>
              <div className="text-center">
                <a href="/#" className="event_btn event_btn_two btn_hover">
                  Buy Ticket
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default EventPrice;
