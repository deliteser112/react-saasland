import React from "react";
import EventSponserLogo from "./EventSponserLogo";

const EventSponser = () => {
  return (
    <section className="event_sponser_area sec_pad">
      <div className="container">
        <div className="hosting_title security_title text-center">
          <h2>
            <span>Lovely Clients</span> Offcial Sponsors
          </h2>
        </div>
        <div className="event_sponser_inner">
          <div className="event_sponser_item">
            <div className="row">
              <div className="col-lg-3 col-md-4">
                <h4 className="h_head sponser_title">Principal Sponsor</h4>
              </div>
              <div className="col-lg-9 col-md-8">
                <div className="row">
                  <EventSponserLogo url=".#" image="logo_01.png" />
                  <EventSponserLogo url=".#" image="logo_02.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="event_sponser_item">
            <div className="row">
              <div className="col-lg-3 col-md-4">
                <h4 className="h_head sponser_title">Platinum Sponsor</h4>
              </div>
              <div className="col-lg-9 col-md-8">
                <div className="row">
                  <EventSponserLogo url=".#" image="logo_05.png" />
                  <EventSponserLogo url=".#" image="logo_06.png" />
                  <EventSponserLogo url=".#" image="logo_07.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="event_sponser_item">
            <div className="row">
              <div className="col-lg-3 col-md-4">
                <h4 className="h_head sponser_title">Gold Sponsor</h4>
              </div>
              <div className="col-lg-9 col-md-8">
                <div className="row">
                  <EventSponserLogo url=".#" image="logo_09.png" />
                  <EventSponserLogo url=".#" image="logo_10.png" />
                  <EventSponserLogo url=".#" image="logo_11.png" />
                  <EventSponserLogo url=".#" image="logo_12.png" />
                  <EventSponserLogo url=".#" image="logo_05.png" />
                  <EventSponserLogo url=".#" image="logo_06.png" />
                  <EventSponserLogo url=".#" image="logo_07.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="event_sponser_item text-center">
            <a
              className="event_btn btn_hover wow fadeInLeft"
              data-wow-delay="0.9s"
              href="/#"
            >
              More Sponsors
            </a>
            <a
              className="event_btn event_btn_two btn_hover wow fadeInRight"
              data-wow-delay="0.9s"
              href="/#"
            >
              Become a Sponsors
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default EventSponser;
