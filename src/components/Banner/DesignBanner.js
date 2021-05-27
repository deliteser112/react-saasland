import React from 'react';
import Reveal from 'react-reveal/Reveal/';

const DesignBanner = () => {
    return(
        <section className="seo_home_area">
            <div className="home_bubble">
                <div className="bubble b_one"></div>
                <div className="bubble b_two"></div>
                <div className="bubble b_three"></div>
                <div className="bubble b_four"></div>
                <div className="bubble b_five"></div>
                <div className="bubble b_six"></div>
                <div className="triangle b_seven" data-parallax='{"x": 20, "y": 150}'><img src={require('../../img/seo/triangle_one.png')} alt=""/></div>
                <div className="triangle b_eight" data-parallax='{"x": 120, "y": -10}'><img src={require('../../img/seo/triangle_two.png')} alt=""/></div>
                <div className="triangle b_nine"><img src={require('../../img/seo/triangle_three.png')} alt=""/></div>
            </div>
            <div className="banner_top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center seo_banner_content">
                            <Reveal effect="fadeInUp" duration={500}><h2>Drive More Customers<br/> Through Digital</h2></Reveal>
                            <Reveal effect="fadeInUp" duration={1000}><p className="wow fadeInUp" data-wow-delay="0.5s">Chap fantastic skive off chancer knees up starkers easy peasy up the<br/> kyver David, bleeding the BBC tomfoolery chimney.!</p></Reveal>
                            <Reveal effect="fadeInLeft" duration={1200}><a href="./" className="seo_btn seo_btn_one btn_hover wow fadeInLeft">Get Started</a></Reveal>
                            <Reveal effect="fadeInLeft" duration={1200}><a href="./" className="seo_btn seo_btn_two btn_hover wow fadeInRight">Learn More</a></Reveal>
                        </div>
                    </div>
                    <div className="saas_home_img">
                        <Reveal effect="fadeInUp" duration={1400}><img src={require('../../img/seo/image.png')} alt=""/></Reveal>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default DesignBanner;
