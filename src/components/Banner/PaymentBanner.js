import React, {Component} from 'react';
import Reveal from 'react-reveal/Reveal'

class PaymentBanner extends Component {
    render(){
        return(
            <section className="payment_banner_area">
                <div className="shape one"></div>
                <div className="shape two"></div>
                <div className="container">
                   <Reveal effect="fadeInLeft" duration={500}>
                        <div className="payment_banner_content wow fadeInLeft" data-wow-delay="0.4s">
                            <h1 className="f_p f_700 f_size_50 w_color">The simpler, safer way to pay and get paid.</h1>
                            <p className="w_color f_p f_size_18">Why I say old chap that is, spiffing jolly good a load of old tosh spend a penny tosser arse over tit excuse.!</p>
                            <div className="action_btn d-flex align-items-center mt_60">
                                <a href=".#" className="btn_hover agency_banner_btn">Sign Up for Free</a>
                                <a href=".#" className="agency_banner_btn_two">Find Out More<i className="ti-arrow-right"></i></a>
                            </div>
                        </div>
                   </Reveal>
                </div>
                <Reveal effect="fadeInLeft" duration={1200}>
                <div className="animation_img_two wow fadeInRight" data-wow-delay="0.5s">
                    <img src={require ('../../img/home9/mac.png')} alt=""/>
                </div>
                </Reveal>
                <img className="svg_intro_bottom" src={require ('../../img/home9/shape.png')} alt=""/>
            </section>
        )
    }
}
export default PaymentBanner;