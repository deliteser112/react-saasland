import React, {Component} from 'react';
import Reveal from 'react-reveal/Reveal';
import {Link} from 'react-router-dom';

class FooterErp extends Component {
    render(){
        let FooterData = this.props.FooterData;
        let{fClass} = this.props;
        return(
            <footer className={`footer_area h_footer_dark ${fClass}`}>
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
                </div>
            </footer>
        )
    }
}
export default FooterErp;