import React from 'react';

const TrackingPrice =()=>{
    return(
        <section className="tracking_price_area sec_pad">
            <div className="container">
                <div className="tracking_price_inner wow fadeInUp">
                    <h2>Pricing</h2>
                    <div className="d-flex track_body">
                        <div className="track_price">
                            <h3>$9.99</h3>
                            <h6>/user per month</h6>
                        </div>
                        <div className="track_text">
                            <h4>Free for 3 months</h4>
                            <ul className="list-unstyled">
                                <li><i className="fas fa-check"></i>Cancel anytime</li>
                                <li><i className="fas fa-check"></i>No contracts</li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center">
                        <a href="/#" className="software_banner_btn btn_submit f_500">Live chat for free</a>
                        <h6>(No credit card requierd)</h6>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TrackingPrice;