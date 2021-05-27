import React, {Component} from 'react';
import Reveal from 'react-reveal';
class StartupFeatures extends Component {
    render(){
        return(
            <section className="startup_fuatures_area sec_pad">
                <div className="container">
                    <div className="sec_title mb_70 wow fadeInUp" data-wow-delay="0.4s">
                    <Reveal effect="fadeInLeft"><h2 className="f_p f_size_30 l_height40 f_600 t_color text-center">Ways your team can<br/> Use hubstaff</h2></Reveal>
                    </div>
                    <ul className="nav nav-tabs startup_tab" id="myTab" role="tablist">
                        <Reveal effect="fadeInLeft">
                            <li className="nav-item">
                            <a className="nav-link active" id="market-tab" data-toggle="tab" href="#market" role="tab" aria-controls="market" aria-selected="true">
                                <span className="icon"><i className="icon-cloud-upload"></i></span>
                                <h3>Marketing<br/> Cloud</h3>
                            </a>
                            </li>
                        </Reveal>
                        <Reveal effect="fadeInLeft" duration={1400}>
                            <li className="nav-item">
                                <a className="nav-link" id="app-tab" data-toggle="tab" href="#app" role="tab" aria-controls="app" aria-selected="false">
                                    <span className="icon"><i className="icon-screen-tablet"></i></span>
                                    <h3>Commerce<br/> Apps</h3>
                                </a>
                            </li>
                        </Reveal>
                        <Reveal effect="fadeInLeft" duration={2000}>
                            <li className="nav-item">
                                <a className="nav-link" id="hubstaff-tab" data-toggle="tab" href="#hubstaff" role="tab" aria-controls="hubstaff" aria-selected="false">
                                    <span className="icon"><i className="icon-graduation"></i></span>
                                    <h3>Hubstaff<br/> App</h3>
                                </a>
                            </li>
                        </Reveal>
                        <Reveal effect="fadeInLeft" duration={2400}>
                        <li className="nav-item">
                            <a className="nav-link" id="engine-tab" data-toggle="tab" href="#engine" role="tab" aria-controls="engine" aria-selected="false">
                                <span className="icon"><i className="icon-refresh"></i></span>
                                <h3>Automation<br/> Engine</h3>
                            </a>
                        </li>
                        </Reveal>
                        <Reveal effect="fadeInLeft" duration={2800}>
                        <li className="nav-item">
                            <a className="nav-link" id="business-tab" data-toggle="tab" href="#business" role="tab" aria-controls="business" aria-selected="false">
                                <span className="icon"><i className="icon-bulb"></i></span>
                                <h3>Business<br/> Intellegence</h3>
                            </a>
                        </li>
                        </Reveal>
                    </ul>
                    <div className="tab-content startup_tab_content" id="myTabContent">
                        <div className="tab-pane fade show active" id="market" role="tabpanel" aria-labelledby="market-tab">
                            <div className="startup_tab_img">
                                <div className="web_img">
                                    <img src={require ('../../img/new/web_image.jpg')} alt=""/>
                                </div>
                                <div className="phone_img"><img src={require ('../../img/new/iPhoneX.png')} alt=""/></div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="app" role="tabpanel" aria-labelledby="app-tab">
                            <div className="startup_tab_img">
                                <div className="web_img">
                                    <img src={require ('../../img/new/web_image.jpg')} alt=""/>
                                </div>
                                <div className="phone_img"><img src={require ('../../img/new/iPhoneX.png')} alt=""/></div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="hubstaff" role="tabpanel" aria-labelledby="hubstaff-tab">
                            <div className="startup_tab_img">
                                <div className="web_img">
                                    <img src={require ('../../img/new/web_image.jpg')} alt=""/>
                                </div>
                                <div className="phone_img"><img src={require ('../../img/new/iPhoneX.png')} alt=""/></div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="engine" role="tabpanel" aria-labelledby="engine-tab">
                            <div className="startup_tab_img">
                                <div className="web_img">
                                    <img src={require ('../../img/new/web_image.jpg')} alt=""/>
                                </div>
                                <div className="phone_img"><img src={require ('../../img/new/iPhoneX.png')} alt=""/></div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="business" role="tabpanel" aria-labelledby="business-tab">
                            <div className="startup_tab_img">
                                <div className="web_img">
                                    <img src={require ('../../img/new/web_image.jpg')} alt=""/>
                                </div>
                                <div className="phone_img"><img src={require ('../../img/new/iPhoneX.png')} alt=""/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default StartupFeatures;