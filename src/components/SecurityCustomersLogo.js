import React from 'react';

const SecurityCustomerLogo =()=>{
    return(
        <section className="security_customers_logo_area">
            <div className="container">
                <div className="hosting_title analytices_title text-center">
                    <h2 className="wow fadeInUp"><span>Our Clients. </span>World-class protection</h2>
                    <p className="wow fadeInUp" data-wow-delay="0.3s">Naff pukka zonked squiffy quaint knees up cup of tea Oxford the BBC bloke ummm I'm telling, argy-bargy show off show off pick your nose and blow off hanky.!</p>
                </div>
                <div className="security_inner">
                    <img className="p_absoulte security_leaf_left wow fadeInDown" data-wow-delay="0.8s" src={require("../img/home-security/leaf_clients2.png")} alt=""/>
                    <img className="p_absoulte security_leaf_right wow fadeInDown" data-wow-delay="0.8s" src={require("../img/home-security/leaf_clients1.png")} alt=""/>
                    <div className="row">
                        <div className="col-lg-3 col-sm-4 col-6">
                            <a href="/#" className="analytices_logo wow fadeInUp"><img src={require("../img/home-software/logo_01.png")} alt=""/></a>
                        </div>
                        <div className="col-lg-3 col-sm-4 col-6">
                            <a href="/#" className="analytices_logo wow fadeInUp" data-wow-delay="0.2s"><img src={require("../img/home-software/logo_02.png")} alt=""/></a>
                        </div>
                        <div className="col-lg-3 col-sm-4 col-6">
                            <a href="/#" className="analytices_logo wow fadeInUp" data-wow-delay="0.4s"><img src={require("../img/home-software/logo_03.png")} alt=""/></a>
                        </div>
                        <div className="col-lg-3 col-sm-4 col-6">
                            <a href="/#" className="analytices_logo wow fadeInUp" data-wow-delay="0.6s"><img src={require("../img/home-software/logo_04.png")} alt=""/></a>
                        </div>
                        <div className="col-lg-3 col-sm-4 col-6">
                            <a href="/#" className="analytices_logo wow fadeInUp"><img src={require("../img/home-software/logo_05.png")} alt=""/></a>
                        </div>
                        <div className="col-lg-3 col-sm-4 col-6">
                            <a href="/#" className="analytices_logo wow fadeInUp" data-wow-delay="0.2s"><img src={require("../img/home-software/logo_06.png")} alt=""/></a>
                        </div>
                        <div className="col-lg-3 col-sm-4 col-6">
                            <a href="/#" className="analytices_logo wow fadeInUp" data-wow-delay="0.4s"><img src={require("../img/home-software/logo_07.png")} alt=""/></a>
                        </div>
                        <div className="col-lg-3 col-sm-4 col-6">
                            <a href="/#" className="analytices_logo wow fadeInUp" data-wow-delay="0.6s"><img src={require("../img/home-software/logo_08.png")} alt=""/></a>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <a href="/#" className="security_app_btn wow fadeInLeft"><i className="fab fa-windows"></i>Compatible with <span>Windows 10, 8, 7</span></a>
                    <a href="/#" className="security_app_btn wow fadeInRight"><i className="fab fa-apple"></i>Compatible with <span>Mac OS</span></a>
                </div>
            </div>
        </section>
    )
}
export default SecurityCustomerLogo;