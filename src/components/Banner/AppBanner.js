import React from 'react';
import Reveal from 'react-reveal';

const AppBanner = () => {
    return(
        <section className="app_banner_area" id="home">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <Reveal bottom cascade>
                            <div className="app_banner_contentmt mt_40">
                                <h2 className="f_p f_700 f_size_50 w_color mb_20 wow fadeInLeft" data-wow-delay="0.2s">Spend time <br/>with loved ones</h2>
                                <p className="f_400 f_size_18 l_height30 w_color wow fadeInLeft" data-wow-delay="0.3s">Why I say old chap that is spiffing off his nut arse pear shaped<br/> plastered Jeffrey bodge barney some dodgy.!!</p>
                                <a href=".#" className="btn_hover mt_30 app_btn wow fadeInLeft" data-wow-delay="0.5s">Get Started</a>
                            </div>
                        </Reveal>
                    </div>
                    <div className="col-lg-5">
                            <div className="app_img">
                                <img className="app_screen one wow fadeInDown" src={require('../../img/home7/01.png')} alt=""/>
                                <img className="app_screen two wow fadeInDown" src={require('../../img/home7/03.png')} alt=""/>
                                <img className="app_screen three wow fadeInDown" src={require('../../img/home7/02.png')} alt=""/>
                                <img className="mobile" src={require('../../img/home7/app.png')} alt=""/>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AppBanner;