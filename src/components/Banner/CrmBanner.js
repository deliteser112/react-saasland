import React, {Component} from 'react';
import Reveal from 'react-reveal';
class CrmBanner extends Component {
    render(){
        return(
            <section className="new_startup_banner_area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.4s">
                            <Reveal left cascade>
                            <div className="new_startup_img">
                                <div className="line line_one"><img src={require('../../img/new/line_01.png')} alt=""/></div>
                                <div className="line line_two"><img src={require('../../img/new/line_02.png')} alt=""/></div>
                                <div className="line line_three"><img src={require('../../img/new/line_03.png')} alt=""/></div>
                                <img src={require('../../img/new/startup_banner_img.png')} alt=""/>
                            </div>
                            </Reveal>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <Reveal bottom cascade duraton={1200}>
                                <div className="new_startup_content">
                                    <h2 className="f_700 f_size_40 l_height50 w_color mb_20 wow fadeInRight" data-wow-delay="0.3s">Ready to see <br/><span>SaasLand</span> in Action?</h2>
                                    <p className="f_400 w_color l_height28 wow fadeInRight" data-wow-delay="0.4s">Cup of tea my lady a blinding shot lost the plot spend a penny, only a quid bog-standard in my flat, morish chinwag sloshed. Cheeky chap old charles dropped a clanger.!</p>
                                    <div className="action_btn d-flex align-items-center mt_40 wow fadeInRight" data-wow-delay="0.6s">
                                        <a href=".#" className="btn_hover app_btn">Sign up <i className="ti-arrow-right"></i></a>
                                    </div>
                                </div>
                            </Reveal>
                            
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default CrmBanner;