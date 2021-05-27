import React from 'react';
import Reveal from 'react-reveal';
const AppGetstarted =()=>{
    return(
        <section className="get_started_area">
            <div className="shap one"></div>
            <div className="shap two"></div>
            <div className="shap one three"></div>
            <div className="shap two four"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex align-items-center">
                        <Reveal bottom cascade>
                            <div className="get_content">
                                <h3 className="f_400 f_p wow fadeInLeft" data-wow-delay="0.2s">SaasLand</h3>
                                <h2 className="f_700 f_p f_size_40 l_height50 mb_20 wow fadeInLeft" data-wow-delay="0.3s">Download this app Now</h2>
                                <p className="f_400 f_p mb_40 wow fadeInLeft" data-wow-delay="0.4s">Why I say old chap that is spiffing barney, nancy boy bleeder chimney pot Richard cheers the little rotter so I said, easy peasy buggered blower bevvy A bit of how's your father he nicked.!</p>
                                <a href=".#" className="app_btn app_btn_one wow fadeInLeft" data-wow-delay="0.5s"><img src={require('../img/home7/google_icon.png')} alt=""/>Google Play</a>
                                <a href=".#" className="app_btn app_btn_two wow fadeInLeft" data-wow-delay="0.6s"><i className="fab fa-apple"></i>App Store</a>
                            </div>
                        </Reveal>
                    </div>
                    <div className="col-lg-6 text-right">
                       <Reveal effect="fadeInRight" duration={2200}> <img src={require('../img/home7/iPhoneX2.png')} alt=""/></Reveal>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AppGetstarted;