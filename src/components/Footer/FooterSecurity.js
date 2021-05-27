import React, {Component} from 'react';
import Reveal from 'react-reveal/Reveal';
import {Link} from 'react-router-dom';

class FooterSecurity extends Component {
    render(){
        let FooterData = this.props.FooterData;
        return(
            <footer className="footer_area footer_area h_footer_dark pos_footer_area security_footer_area">
                <img className="leaf_left" src={require("../../img/pos/leaf-left.png")} alt=""/>
                <img className="leaf_right" src={require("../../img/pos/leaf-right.png")} alt=""/>
                <div className="container">
                    <div className="row">
                        {
                            FooterData.CompanyWidget.map(widget=>{
                                return(
                                    <Reveal effect="fadeInLeft" duration={500} key={1}>
                                        <div className="col-lg-4 col-sm-6" >
                                            <div className="f_widget dark_widget company_widget" data-wow-delay="0.2s">
                                                <a href="index.html" className="f-logo"><img src={require ("../../img/logo2.png")} alt=""/></a>
                                                <p>© 2019 SaasLand, LLC. All rights reserved. Proudly made in NY</p>
                                                <div className="f_social_icon">
                                                    {
                                                        FooterData.socialIcon.map(item =>{
                                                            return(
                                                                <a href="/" key={item.id}><i className={item.icon}></i></a>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </Reveal>
                                )
                            })
                        }
                        {
                            FooterData.AboutWidget.map(widget=>{
                                return(
                                    <Reveal effect="fadeInLeft" duration={500} key={widget.id}>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="f_widget dark_widget about-widget pl_70">
                                            <h3 className="f-title f_500 t_color f_size_18 mb_40">{widget.title}</h3>
                                            <ul className="list-unstyled f_list">
                                                {
                                                    widget.menuItems.map(item =>{
                                                        return(
                                                            <li key={item.id}><Link to="/">{item.text}</Link></li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                    </Reveal>
                                )
                            })
                        }
                        {
                            FooterData.termsCondition.map(widget=>{
                                return(
                                    <Reveal effect="fadeInLeft" duration={500} key={widget.id}>
                                        <div className="col-lg-2 col-sm-6">
                                            <div className="f_widget dark_widget about-widget">
                                                <h3 className="f-title f_500 t_color f_size_18 mb_40">{widget.title}</h3>
                                                <ul className="list-unstyled f_list">
                                                    {
                                                        widget.menuItems.map(item =>{
                                                            return(
                                                                <li key={item.id}><Link to="/">{item.text}</Link></li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </Reveal>
                                )
                            })
                        }
                        
                    </div>
                    <div className="pos_footer_bottom justify-content-between d-flex align-items-end">
                        <img className="pos_women" src={require("../../img/pos/women.png")} alt=""/>
                        <img src={require("../../img/pos/people.png")} alt=""/>
                        <img className="pos_women" src={require("../../img/pos/man.png")} alt=""/>
                    </div>
                </div>
                <svg className="wave_shap" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.302" fill="rgb(73, 69, 140)" d="M22.990,11.999 C22.990,11.999 -62.334,196.188 102.000,90.998 C236.033,5.204 349.217,18.152 512.000,80.998 C773.380,181.909 898.075,49.752 1051.000,15.998 C1316.369,-42.574 1488.518,78.268 1581.000,112.999 C1783.485,189.036 1942.990,61.999 1942.990,61.999 L1942.990,211.999 L22.990,211.999 L22.990,11.999 Z" />
                </svg>
            </footer>
        )
    }
}
export default FooterSecurity;