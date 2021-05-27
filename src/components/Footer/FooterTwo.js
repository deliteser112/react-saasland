import React , {Component} from 'react';
import AboutWidget from './FooterWidget/AboutWidget';
import SolutionWidget from './FooterWidget/SolutionWidget';
import TeamWidget from './FooterWidget/TeamWidget';
import Reveal from 'react-reveal/Reveal'
class FooterTwo extends Component {
    render(){
        var {fClass} = this.props;
        let FooterData = this.props.FooterData;
        return(
            <footer className={`footer_area footer_area_four f_bg ${fClass}`}>
                <div className="footer_top">
                    <div className="container">
                        <div className="row">
                            {
                                FooterData.CompanyWidget.map(widget=>{
                                    return(
                                        <Reveal effect="fadeInUp" key={widget.id}>
                                            <div className="col-lg-3 col-md-6">
                                                <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s">
                                                <a href="index.html" className="f-logo"><img src={require('../../img/logo.png')} alt=""/></a>
                                                    <div className="widget-wrap">
                                                        <p className="f_400 f_p f_size_15 mb-0 l_height34"><span>Email:</span> <a href="mailto:saasland@gmail.com" className="f_400">saasland@gmail.com</a></p>
                                                        <p className="f_400 f_p f_size_15 mb-0 l_height34"><span>Phone:</span> <a href="tel:948256347968" className="f_400">+948 256 347 968</a></p>
                                                    </div>
                                                    <form action="#" className="f_subscribe mailchimp" method="post">
                                                        <input type="text" name="EMAIL" className="form-control memail" placeholder="Email"/>
                                                        <button className="btn btn-submit" type="submit"><i className="ti-arrow-right"></i></button>
                                                    </form>
                                                </div>
                                            </div>
                                        </Reveal>
                                    )
                                })
                            }
                            <AboutWidget ftitle="About Us"  FooterData={FooterData}/>
                            <SolutionWidget ftitle="Workflow Solutions" FooterData={FooterData}/>
                            <TeamWidget ftitle="Team Solutions" FooterData={FooterData}/>
                        </div>
                    </div>
                </div>
                <div className="footer_bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-5 col-sm-6">
                                <p className="mb-0 f_400">{FooterData.copywrite}</p>
                            </div>
                            <div className="col-lg-4 col-md-3 col-sm-6">
                                <div className="f_social_icon_two text-center">
                                    {
                                        FooterData.socialIcon.map(item =>{
                                            return(
                                                <a href="/" key={item.id}><i className={item.icon}></i></a>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <ul className="list-unstyled f_menu text-right">
                                    <li><a href=".#">Terms of Use</a></li>
                                    <li><a href=".#">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default FooterTwo;