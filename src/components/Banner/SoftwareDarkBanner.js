import React from 'react';
const SoftwareDarkBanner =()=>{
    return(
        <section className="saas_banner_area d-flex align-items-center">
            <img className="saas_shap" src={require("../../img/home6/shape-1.png")} alt=""/>
            <img className="saas_shap" src={require("../../img/home6/shape2.png")} alt=""/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="saas_banner_content text-center">
                            <h2 className="f_700 f_size_40 w_color mb-0 wow fadeInUp" data-wow-delay="0.3s">We are building software to Help</h2>
                            <p className="w_color f_400 f_size_18 l_height30 mt_30 wow fadeInUp" data-wow-delay="0.4s">Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge<br/> barney some dodgy.!!</p>
                            <div className="action_btn d-flex align-items-center mt_40 justify-content-center wow fadeInUp" data-wow-delay="0.5s">
                                <a href="/#" className="btn_hover saas_banner_btn">Get Started</a>
                            </div>
                        </div>
                        <div className="dasboard_img mt_60 wow fadeInUp" data-wow-delay="0.7s">
                            <img className="img-fluid" src={require("../../img/home6/dashboard.jpg")} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SoftwareDarkBanner;