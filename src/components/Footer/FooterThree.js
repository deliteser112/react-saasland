import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class FooterThree extends Component{
    render(){
        let FooterData = this.props.FooterData;
        return(
            <footer className="footer_nine_area">
                <div className="footer_nine_top">
                    <div className="footer_shap left"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-6">
                                <div className="f_widget company_widget pr_100">
                                    <a href="index.html" className="f-logo"><img src={require ('../../img/logo.png')} alt=""/></a>
                                    <p className="f_400 f_p f_size_16 mb-0 l_height28 mt_40">Tickety-boo victoria sponge only a quid I don't want no agro morish bum bag gutted mate up the duff, bloke blag cup of char super bugger all mate.!</p>
                                    <div className="f_social_icon_two mt_30">
                                        {
                                            FooterData.socialIcon.map(item =>{
                                                return(
                                                    <Link to="/" key={item.id}><i className={item.icon}></i></Link>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6">
                                <div className="f_widget about-widget">
                                    <h3 className="f-title f_500 f_size_16 mb-30">About Us</h3>
                                    <ul className="list-unstyled f_list">
                                        {
                                            FooterData.aboutLinks.map(links => {
                                                return(
                                                    <li key={links.id}><Link to={links.url}>{links.item}</Link></li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6">
                                <div className="f_widget about-widget">
                                    <h3 className="f-title f_500 f_size_16 mb-30">Help & Suport</h3>
                                    <ul className="list-unstyled f_list">
                                        {
                                            FooterData.helpLinks.map(links => {
                                                return(
                                                    <li key={links.id}><Link to={links.url}>{links.item}</Link></li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 pl_100">
                                <div className="f_widget about-widget">
                                    <h3 className="f-title f_500 f_size_16 mb-30">Privacy Contact</h3>
                                    <ul className="list-unstyled f_list">
                                        {
                                            FooterData.PrivacyLinks.map(links => {
                                                return(
                                                    <li key={links.id}><Link to={links.url}>{links.item}</Link></li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_nine_bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-7 align-self-center">
                                <p className="mb-0 f_400">Copyright © 2018 Desing by <a href=".#">DroitThemes</a></p>
                            </div>
                            <div className="col-sm-5">
                                <select className="selectpicker flag_selector" data-width="fit">
                                    <option data-content='<span className="flag-icon flag-icon-us"></span> English'>English</option>
                                    <option data-content='<span className="flag-icon flag-icon-mx"></span> Español'>Español</option>
                                    <option data-content='<span className="flag-icon flag-icon-us"></span> English'>Potogal</option>
                                    <option data-content='<span className="flag-icon flag-icon-mx"></span> Español'>Brazil</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default FooterThree;