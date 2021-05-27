import React from 'react';
import Reveal from 'react-reveal/Reveal';

const Paymentprocess = () => {
    return(
        <section className="payment_clients_area">
            <div className="clients_bg_shape_top"></div>
            <div className="clients_bg_shape_right"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <Reveal effect="fadeInLeft" duration={500}>
                            <div className="payment_features_content pr_70">
                                <div className="icon">
                                    <img className="img_shape" src={require('../img/home9/icon_shape.png')} alt=""/>
                                    <img className="icon_img" src={require('../img/home9/icon2.png')}  alt=""/>
                                </div>
                                <h2>Quick & Easy Process</h2>
                                <p>Cras mush pardon you knees up he lost his bottle it's all gone to pot faff about porkies arse, barney argy-bargy cracking goal loo cheers spend.!</p>
                                <a href=".#" className="btn_hover agency_banner_btn pay_btn">Sign Up for Free</a>
                                <a href=".#" className="btn_hover agency_banner_btn pay_btn pay_btn_two">Sign Up for Free</a>
                            </div>
                        </Reveal>                
                    </div>
                    <div className="col-lg-6">
                        <div className="payment_clients_inner">
                            <Reveal effect="fadeInLeft" duration={500}>
                                <div className="clients_item one">
                                    <img src={require('../img/home9/logo1.png')} alt=""/>
                                </div>
                                <div className="clients_item two">
                                    <img src={require('../img/home9/logo2.png')} alt=""/>
                                </div>
                                <div className="clients_item three">
                                <img src={require('../img/home9/logo3.png')} alt=""/>
                                </div>
                                <div className="clients_item four">
                                <img src={require('../img/home9/logo4.png')} alt=""/>
                                </div>
                                <div className="clients_item five">
                                <img src={require('../img/home9/logo5.png')} alt=""/>
                                </div>
                                <div className="clients_item six">
                                <img src={require('../img/home9/logo6.png')} alt=""/>
                                </div>
                                <div className="clients_item seven">
                                <img src={require('../img/home9/logo7.png')} alt=""/>
                                </div>
                                <div className="clients_item eight">
                                <img src={require('../img/home9/logo8.png')} alt=""/>
                                </div>
                            </Reveal>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Paymentprocess;