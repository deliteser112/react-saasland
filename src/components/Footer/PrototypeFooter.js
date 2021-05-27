import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class PrototypeFooter extends Component {
    render(){
        let FooterData = this.props.FooterData;
        var{rclass} = this.props;
        return(
            <footer className={`payment_footer_area ${rclass}`}>
                <div className="footer_top_six">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-sm-6">
                                <div className="f_widget company_widget">
                                    <a href="index.html" className="f-logo"><img src={require ('../../img/logo3.png')} alt="logo"/></a>
                                    <p className="mt_40">Copyright © 2018 Desing by <a href=".#">DroitThemes</a></p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="f_widget about-widget">
                                    <h3 className="f-title f_600 w_color f_size_18 mb_40">About Us</h3>
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
                            <div className="col-lg-3 col-sm-6">
                                <div className="f_widget about-widget">
                                    <h3 className="f-title f_600 w_color f_size_18 mb_40">Help?</h3>
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
                            <div className="col-lg-2 col-sm-6">
                                <div className="f_widget social-widget">
                                    <h3 className="f-title f_600 w_color f_size_18 mb_40">Follow Us</h3>
                                    <div className="f_social_icon">
                                        {
                                            FooterData.socialIcon.map(item =>{
                                                return(
                                                    <a href={item.url} key={item.id}><i className={item.icon}></i></a>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default PrototypeFooter;