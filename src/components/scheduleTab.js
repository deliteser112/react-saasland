import React, { Component } from "react";

class ScheduleTab extends Component {
  render() {
    return (
      <section className="event_schedule_area sec_pad">
        <div className="container">
          <div className="hosting_title security_title text-center">
            <h2>
              <span>Schedule</span>Conference Schedule
            </h2>
          </div>
          <div className="event_schedule_inner">
            <ul className="nav nav-tabs event_tab" role="tablist">
              <li className="nav-item wow fadeInUp" data-wow-delay="0.4s">
                <a
                  className="nav-link active"
                  id="one-tab"
                  data-toggle="tab"
                  href="#one"
                  role="tab"
                  aria-controls="one"
                  aria-selected="true"
                >
                  <h5>
                    Day 1<span>Feb 20, 2019</span>
                  </h5>
                </a>
              </li>
              <li className="nav-item wow fadeInUp" data-wow-delay="0.6s">
                <a
                  className="nav-link"
                  id="two-tab"
                  data-toggle="tab"
                  href="#two"
                  role="tab"
                  aria-controls="two"
                  aria-selected="false"
                >
                  <h5>
                    Day 2<span>Mar 29, 2020</span>
                  </h5>
                </a>
              </li>
              <li className="nav-item wow fadeInUp" data-wow-delay="0.8s">
                <a
                  className="nav-link"
                  id="three-tab"
                  data-toggle="tab"
                  href="#three"
                  role="tab"
                  aria-controls="three"
                  aria-selected="false"
                >
                  <h5>
                    Day 3<span>Dec 29, 2019</span>
                  </h5>
                </a>
              </li>
            </ul>
            <div className="tab-content event_tab_content">
              <div
                className="tab-pane fade show active"
                id="one"
                role="tabpanel"
                aria-labelledby="one-tab"
              >
                <div className="media">
                  <div className="media-left">
                    <img
                      src={require("../img/home-event/conference.jpg")}
                      alt=""
                    />
                    <a href="/#">
                      <i className="icon_clock_alt"></i>10:30 - 12:30 AM
                    </a>
                    <a href="/#">
                      <i className="icon_pin_alt"></i>Room 2
                    </a>
                  </div>
                  <div className="media-body">
                    <h3 className="h_head">The future of the UI/UX</h3>
                    <span>
                      by <a href="/#">Hanson Deck</a>
                    </span>
                    <p>
                      Lost the plot lurgy on your bike mate Oxford hanky panky
                      blow off haggle golly gosh do one, is tosser car boot
                      knees.
                    </p>
                  </div>
                </div>
                <div className="media">
                  <div className="media-left">
                    <img
                      src={require("../img/home-event/digital.jpg")}
                      alt=""
                    />
                    <a href="/#">
                      <i className="icon_clock_alt"></i>10:30 - 12:30 AM
                    </a>
                    <a href="/#">
                      <i className="icon_pin_alt"></i>Room 2
                    </a>
                  </div>
                  <div className="media-body">
                    <h3 className="h_head">Opening Conference</h3>
                    <span>
                      by <a href="/#">Hanson Deck</a>
                    </span>
                    <p>
                      Lost the plot lurgy on your bike mate Oxford hanky panky
                      blow off haggle golly gosh do one, is tosser car boot
                      knees.
                    </p>
                  </div>
                </div>
                <div className="media">
                  <div className="media-left">
                    <img
                      src={require("../img/home-event/marketing.jpg")}
                      alt=""
                    />
                    <a href="/#">
                      <i className="icon_clock_alt"></i>10:30 - 12:30 AM
                    </a>
                    <a href="/#">
                      <i className="icon_pin_alt"></i>Room 2
                    </a>
                  </div>
                  <div className="media-body">
                    <h3 className="h_head">Digital World Event Information</h3>
                    <span>
                      by <a href="/#">Hanson Deck</a>
                    </span>
                    <p>
                      Lost the plot lurgy on your bike mate Oxford hanky panky
                      blow off haggle golly gosh do one, is tosser car boot
                      knees.
                    </p>
                  </div>
                </div>
                <div className="media">
                  <div className="media-left">
                    <img
                      src={require("../img/home-event/conference.jpg")}
                      alt=""
                    />
                    <a href="/#">
                      <i className="icon_clock_alt"></i>10:30 - 12:30 AM
                    </a>
                    <a href="/#">
                      <i className="icon_pin_alt"></i>Room 2
                    </a>
                  </div>
                  <div className="media-body">
                    <h3 className="h_head">Digital Marketing Theory</h3>
                    <span>
                      by <a href="/#">Hanson Deck</a>
                    </span>
                    <p>
                      Lost the plot lurgy on your bike mate Oxford hanky panky
                      blow off haggle golly gosh do one, is tosser car boot
                      knees.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="two"
                role="tabpanel"
                aria-labelledby="two-tab"
              >
                <div className="media">
                  <div className="media-left">
                    <img
                      src={require("../img/home-event/conference.jpg")}
                      alt=""
                    />
                    <a href="/#">
                      <i className="icon_clock_alt"></i>10:30 - 12:30 AM
                    </a>
                    <a href="/#">
                      <i className="icon_pin_alt"></i>Room 2
                    </a>
                  </div>
                  <div className="media-body">
                    <h3 className="h_head">The future of the UI/UX</h3>
                    <span>
                      by <a href="/#">Hanson Deck</a>
                    </span>
                    <p>
                      Lost the plot lurgy on your bike mate Oxford hanky panky
                      blow off haggle golly gosh do one, is tosser car boot
                      knees.
                    </p>
                  </div>
                </div>
                <div className="media">
                  <div className="media-left">
                    <img
                      src={require("../img/home-event/digital.jpg")}
                      alt=""
                    />
                    <a href="/#">
                      <i className="icon_clock_alt"></i>10:30 - 12:30 AM
                    </a>
                    <a href="/#">
                      <i className="icon_pin_alt"></i>Room 2
                    </a>
                  </div>
                  <div className="media-body">
                    <h3 className="h_head">Opening Conference</h3>
                    <span>
                      by <a href="/#">Hanson Deck</a>
                    </span>
                    <p>
                      Lost the plot lurgy on your bike mate Oxford hanky panky
                      blow off haggle golly gosh do one, is tosser car boot
                      knees.
                    </p>
                  </div>
                </div>
                <div className="media">
                  <div className="media-left">
                    <img
                      src={require("../img/home-event/marketing.jpg")}
                      alt=""
                    />
                    <a href="/#">
                      <i className="icon_clock_alt"></i>10:30 - 12:30 AM
                    </a>
                    <a href="/#">
                      <i className="icon_pin_alt"></i>Room 2
                    </a>
                  </div>
                  <div className="media-body">
                    <h3 className="h_head">Digital World Event Information</h3>
                    <span>
                      by <a href="/#">Hanson Deck</a>
                    </span>
                    <p>
                      Lost the plot lurgy on your bike mate Oxford hanky panky
                      blow off haggle golly gosh do one, is tosser car boot
                      knees.
                    </p>
                  </div>
                </div>
                <div className="media">
                  <div className="media-left">
                    <img
                      src={require("../img/home-event/conference.jpg")}
                      alt=""
                    />
                    <a href="/#">
                      <i className="icon_clock_alt"></i>10:30 - 12:30 AM
                    </a>
                    <a href="/#">
                      <i className="icon_pin_alt"></i>Room 2
                    </a>
                  </div>
                  <div className="media-body">
                    <h3 className="h_head">Digital Marketing Theory</h3>
                    <span>
                      by <a href="/#">Hanson Deck</a>
                    </span>
                    <p>
                      Lost the plot lurgy on your bike mate Oxford hanky panky
                      blow off haggle golly gosh do one, is tosser car boot
                      knees.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="three"
                role="tabpanel"
                aria-labelledby="three-tab"
              >
                <div className="media">
                  <div className="media-left">
                    <img
                      src={require("../img/home-event/marketing.jpg")}
                      alt=""
                    />
                    <a href="/#">
                      <i className="icon_clock_alt"></i>10:30 - 12:30 AM
                    </a>
                    <a href="/#">
                      <i className="icon_pin_alt"></i>Room 2
                    </a>
                  </div>
                  <div className="media-body">
                    <h3 className="h_head">Digital World Event Information</h3>
                    <span>
                      by <a href="/#">Hanson Deck</a>
                    </span>
                    <p>
                      Lost the plot lurgy on your bike mate Oxford hanky panky
                      blow off haggle golly gosh do one, is tosser car boot
                      knees.
                    </p>
                  </div>
                </div>
                <div className="media">
                  <div className="media-left">
                    <img
                      src={require("../img/home-event/conference.jpg")}
                      alt=""
                    />
                    <a href="/#">
                      <i className="icon_clock_alt"></i>10:30 - 12:30 AM
                    </a>
                    <a href="/#">
                      <i className="icon_pin_alt"></i>Room 2
                    </a>
                  </div>
                  <div className="media-body">
                    <h3 className="h_head">Digital Marketing Theory</h3>
                    <span>
                      by <a href="/#">Hanson Deck</a>
                    </span>
                    <p>
                      Lost the plot lurgy on your bike mate Oxford hanky panky
                      blow off haggle golly gosh do one, is tosser car boot
                      knees.
                    </p>
                  </div>
                </div>
                <div className="media">
                  <div className="media-left">
                    <img
                      src={require("../img/home-event/conference.jpg")}
                      alt=""
                    />
                    <a href="/#">
                      <i className="icon_clock_alt"></i>10:30 - 12:30 AM
                    </a>
                    <a href="/#">
                      <i className="icon_pin_alt"></i>Room 2
                    </a>
                  </div>
                  <div className="media-body">
                    <h3 className="h_head">The future of the UI/UX</h3>
                    <span>
                      by <a href="/#">Hanson Deck</a>
                    </span>
                    <p>
                      Lost the plot lurgy on your bike mate Oxford hanky panky
                      blow off haggle golly gosh do one, is tosser car boot
                      knees.
                    </p>
                  </div>
                </div>
                <div className="media">
                  <div className="media-left">
                    <img
                      src={require("../img/home-event/digital.jpg")}
                      alt=""
                    />
                    <a href="/#">
                      <i className="icon_clock_alt"></i>10:30 - 12:30 AM
                    </a>
                    <a href="/#">
                      <i className="icon_pin_alt"></i>Room 2
                    </a>
                  </div>
                  <div className="media-body">
                    <h3 className="h_head">Opening Conference</h3>
                    <span>
                      by <a href="/#">Hanson Deck</a>
                    </span>
                    <p>
                      Lost the plot lurgy on your bike mate Oxford hanky panky
                      blow off haggle golly gosh do one, is tosser car boot
                      knees.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default ScheduleTab;
