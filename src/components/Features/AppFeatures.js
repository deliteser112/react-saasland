import React from 'react';
import Reveal from 'react-reveal';
const AppFeatures = () => {
    return(
        <section className="app_featured_area_two">
            <div className="triangle_shape"></div>
            <div className="container">
                <div className="row app_feature_info">
                    <div className="col-lg-5">
                        <div className="app_img">
                            <div className="dot dot_one wow fadeIn" data-wow-delay="0.5s"><span className="dot1"></span><span className="dot2"></span></div>
                            <div className="dot dot_two wow fadeIn" data-wow-delay="0.8s"><span className="dot1"></span><span className="dot2"></span></div>
                            <div className="dot dot_three wow fadeIn" data-wow-delay="0.3s"><span className="dot1"></span><span className="dot2"></span></div>
                            <Reveal effect="fadeInLeft" duration={2500}><img className="text_bg one" src={require('../../img/home7/text_one.png')} alt=""/></Reveal>
                            <Reveal effect="fadeInDown" duration={2000}><img className="text_bg two" src={require('../../img/home7/text_three.png')} alt=""/></Reveal>
                            <Reveal effect="fadeInRight" duration={1500}><img className="text_bg three" src={require('../../img/home7/text_two.png')} alt=""/></Reveal>
                            <img className="wow fadeIn phone_img" src={require('../../img/home7/iPhonex.png')} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-7 d-flex align-items-center">
                        <Reveal bottom cascade>
                            <div className="app_featured_content">
                                <h2 className="f_p f_size_30 f_700 t_color3 l_height45 mb-30">With iPhone X<br/> the device is the display</h2>
                                <p className="f_400">Why I say old chap that is spiffing barney, nancy boy bleeder chimney pot Richard cheers the little rotter so I said, easy peasy buggered blower bevvy A bit of how's your father he nicked it arse over tit. Geeza the BBC bits and bobs do one William pardon you up the kyver blower, lurgy codswallop show off show off pick.!!</p>
                                <a href=".#" className="app_btn btn_hover mt_40">Learn More</a>
                            </div>
                        </Reveal>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AppFeatures;
