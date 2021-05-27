import React from 'react';

const EventBanner =()=>{
    return(
        <section className="event_banner_area">
            <div className="parallax-effect" style={{backgroundImage: "url(" + (require("../../img/home-event/banner_bg.jpg")) + ")"}}></div>
            <div className="container">
                <div className="event_banner_content">
                    <div className="round wow zoomIn" data-wow-delay="0.2s"></div>
                    <h6 className="wow fadeInUp" data-wow-delay="0.6s">January 24, 2020</h6>
                    <h2 className="wow fadeInUp" data-wow-delay="0.8s"><span>Digital </span>Marketing<br/> Conference <span>2019</span></h2>
                    <a className="event_btn btn_hover wow fadeInLeft" data-wow-delay="0.9s" href="/#">Register Now</a>
                    <a className="event_btn event_btn_two btn_hover wow fadeInRight" data-wow-delay="0.9s" href="/#"><i className="arrow_triangle-right_alt2"></i>How we Work</a>
                </div>
            </div>
        </section>
    )
}

export default EventBanner;