import React, {Component} from 'react';
import Sectitle from './Title/Sectitle';

class Price extends Component {
    render(){
        return(
            <section className="support_price_area sec_pad">
                <div className="container custom_container p0">
                    <Sectitle sClass="sec_title text-center mb_70" Title='Simple Pricing' TitleP='Why I say old chap that is spiffing lavatory chip shop gosh off his nut, smashing boot are you taking the piss posh loo brilliant matie boy.!'/>
                    <div className="price_content price_content_two">
                        <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="price_item">
                                <img src={require ("../img/new-home/p-1.png")} alt=""/>
                                <h5 className="f_p f_size_20 f_600 t_color2 mt_30">Education</h5>
                                <p>Create your first online course</p>
                                <div className="price f_700 f_size_40 t_color2">$25.00<sub className="f_size_16 f_400">/ mo</sub></div>
                                <ul className="list-unstyled p_list">
                                    <li><i className="ti-check"></i>Only 2 Operators</li>
                                    <li><i className="ti-check"></i>Abandoned Cart</li>
                                    <li><i className="ti-check"></i>Facebook & Instagram Ads</li>
                                    <li><i className="ti-close"></i>Order Notifications</li>
                                    <li><i className="ti-close"></i>Landing Pages</li>
                                </ul>
                                <a href="/#" className="price_btn btn_hover">Start Today</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="price_item">
                                <div className="tag"><span>Popular</span></div>
                                <img src={require ("../img/new-home/p-2.png")} alt=""/>
                                <h5 className="f_p f_size_20 f_600 t_color2 mt_30">Professional</h5>
                                <p>Our most popular plan</p>
                                <div className="price f_700 f_size_40 t_color2">$25.00<sub className="f_size_16 f_400">/ mo</sub></div>
                                <ul className="list-unstyled p_list">
                                    <li><i className="ti-check"></i>Only 2 Operators</li>
                                    <li><i className="ti-check"></i>Abandoned Cart</li>
                                    <li><i className="ti-check"></i>Facebook & Instagram Ads</li>
                                    <li><i className="ti-close"></i>Order Notifications</li>
                                    <li><i className="ti-close"></i>Landing Pages</li>
                                </ul>
                                <a href="/#" className="price_btn btn_hover">Start Today</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="price_item">
                                <img src={require ("../img/new-home/p-3.png")} alt=""/>
                                <h5 className="f_p f_size_20 f_600 t_color2 mt_30">Business</h5>
                                <p>Experience thebest of lorem</p>
                                <div className="price f_700 f_size_40 t_color2">$99.00<sub className="f_size_16 f_400">/ mo</sub></div>
                                <ul className="list-unstyled p_list">
                                    <li><i className="ti-check"></i>Only 2 Operators</li>
                                    <li><i className="ti-check"></i>Abandoned Cart</li>
                                    <li><i className="ti-check"></i>Facebook & Instagram Ads</li>
                                    <li><i className="ti-close"></i>Order Notifications</li>
                                    <li><i className="ti-close"></i>Landing Pages</li>
                                </ul>
                                <a href="/#" className="price_btn btn_hover">Start Today</a>
                            </div>
                        </div>
                        </div> 
                    </div>
                </div>
            </section>
        )
    }
}
export default Price;