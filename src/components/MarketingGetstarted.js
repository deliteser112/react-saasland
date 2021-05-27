import React from 'react';
import Reveal from 'react-reveal';
const MarketingGetstarted = () => {
    return(
        <React.Fragment>
            <section className="get_started_three sec_pad">
                <div className="container">
                    <div className="sec_title text-center mb_70">
                        <h2 className="f_p f_size_30 l_height45 f_600 t_color3">Help your customers <br/>on every channel</h2>
                    </div>
                    <div className="startup_tab_img">
                        <Reveal effect="fadeInLeft">
                            <div className="web_img">
                                <img src={require('../img/new/web_image.jpg')} alt=""/>
                            </div>
                        </Reveal>
                        <Reveal effect="fadeInRight"><div className="phone_img"><img src={require('../img/new/iPhoneX.png')} alt=""/></div></Reveal>
                    </div>
                    <div className="row get_btn_info">
                        <div className="col-md-6">
                            <div className="get_btn_item">
                                <div className="get_icon">
                                    <i className="ti-time"></i>
                                </div>
                                <h3>Conference any time instantly or schedule in advance</h3>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="get_btn_item">
                                <div className="get_icon icon_two">
                                    <i className="icon_cloud-upload_alt"></i>
                                </div>
                                <h3>Fully cross - device experience from anywhere in the world</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="intregration_area bg_color sec_pad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="row intregration_logo">
                                <div className="col-6 intregration_item">
                                    <a href=".#" className="intregration_icon"><img src={require('../img/new/intregration_1.png')} alt=""/></a>
                                </div>
                                <div className="col-6 intregration_item">
                                    <a href=".#" className="intregration_icon"><img src={require('../img/new/intregration_2.png')} alt=""/></a>
                                </div>
                                <div className="col-6 intregration_item">
                                    <a href=".#" className="intregration_icon"><img src={require('../img/new/intregration_3.png')} alt=""/></a>
                                </div>
                                <div className="col-6 intregration_item">
                                    <a href=".#" className="intregration_icon"><img src={require('../img/new/intregration_4.png')} alt=""/></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 d-flex align-items-center">
                            <div className="intregration_content">
                                <h2>Pertect intergration</h2>
                                <p>Owt to do with me cracking goal arse over tit cup of tea brolly in my flat victoria sponge cup of char ruddy Harry, horse play cheeky it's your round tomfoolery pear shaped spiffing bodge you mug blower cheers.!</p>
                                <a href=".#" className="btn_six slider_btn">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default MarketingGetstarted;