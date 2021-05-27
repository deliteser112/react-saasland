import React from 'react';
import Reveal from 'react-reveal/Reveal';

const PaymentTestimonial = () => {
    return(
        <React.Fragment>
            <section className="payment_testimonial_area">
                <div className="container">
                    <div className="row payment_testimonial_info flex-row-reverse">
                        <div className="col-lg-7 d-flex align-items-center">
                            <div className="testimonial_content">
                                <div className="icon">,,</div>
                                <p className="f_p f_size_20">“This theme aute irure dolor in reprehe erit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur for the life sint occaecat cupidatat non proident, sunt in culpa qui officia de est laborum.”</p>
                                <div className="author f_600 f_p t_color f_size_20">James Anderson</div>
                                <div className="author_description f_p f_size_15">UI/UX designer</div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="testimonial_img">
                                <img src={require ('../../img/home9/testimonial_img.png')} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="payment_action_area">
                <div className="clients_bg_shape_bottom"></div>
                <div className="container">
                    <div className="payment_action_content text-center">
                        <Reveal effect="fadeInUp" cascade>
                        <div className="pay_icon">
                            <div className="icon_shape"></div>
                            <img className="icon_img" src={require('../../img/home9/icon2.png')} alt=""/>
                        </div>
                        <h2 className="f_p t_color f_700">Join 200 million PayPal users worldwide.</h2>
                        <p>All you need is an email address or mobile phone number to transfer money. If they<br/> don't have an account, they can create one quickly, for free.</p>
                        <a href=".#" className="btn_hover agency_banner_btn pay_btn pay_btn_two">Sign Up for Free</a>
                        </Reveal>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default PaymentTestimonial;