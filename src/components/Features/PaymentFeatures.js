import React, {Component} from 'react';
import Reveal from 'react-reveal/Reveal';

class PaymentFeatures extends Component {
    render(){
        return(
            <section className="payment_features_area">
                <div className="bg_shape shape_one"></div>
                <div className="bg_shape shape_two"></div>
                <div className="bg_shape shape_three"></div>
                <div className="container">
                    <div className="row featured_item">
                        <div className="col-lg-6">
                            <Reveal effect="fadeInLeft">
                                <div className="payment_featured_img">
                                    <img src={require ('../../img/home9/featured_img.png')} alt=""/>
                                </div>
                            </Reveal>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <Reveal effect="fadeInRight" duration={800}>
                                <div className="payment_features_content pl_70">
                                    <div className="icon">
                                        <img className="img_shape" src={require('../../img/home9/icon_shape.png')} alt=""/>
                                        <img className="icon_img" src={require('../../img/home9/icon1.png')} alt=""/>
                                    </div>
                                    <h2>Quick & Easy Process</h2>
                                    <p>Cras mush pardon you knees up he lost his bottle it's all gone to pot faff about porkies arse, barney argy-bargy cracking goal loo cheers spend.!</p>
                                    <a href=".#" className="btn_hover agency_banner_btn pay_btn">Sign Up for Free</a>
                                    <a href=".#" className="btn_hover agency_banner_btn pay_btn pay_btn_two">Find Out More</a>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                    <div className="row flex-row-reverse featured_item">
                        <div className="col-lg-6">
                            <Reveal effect="fadeInRight" duration={800}>
                                <div className="payment_featured_img img_two">
                                    <img src={require('../../img/home9/featured_img_two.png')} alt=""/>
                                </div>
                            </Reveal>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <Reveal effect="fadeInLeft" duration={1200}>
                                <div className="payment_features_content pr_70">
                                    <div className="icon">
                                        <img className="img_shape" src={require('../../img/home9/icon_shape.png')} alt=""/>
                                        <img className="icon_img" src={require('../../img/home9/icon2.png')} alt=""/>
                                    </div>
                                    <h2>Quick & Easy Process</h2>
                                    <p>Cras mush pardon you knees up he lost his bottle it's all gone to pot faff about porkies arse, barney argy-bargy cracking goal loo cheers spend.!</p>
                                    <a href=".#" className="btn_hover agency_banner_btn pay_btn">Pay On Ebay</a>
                                    <a href=".#" className="btn_hover agency_banner_btn pay_btn pay_btn_two">Pay On Website</a>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default PaymentFeatures;