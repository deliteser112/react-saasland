import React, {Component} from 'react';
import Reveal from 'react-reveal/Reveal';
class Featuresitems extends Component{
    render(){
        var {rowClass, fimage, iImg, ftitle, descriptions, aClass} = this.props;
        return(
            <div className={`agency_featured_item ${rowClass} `}>
                <div className="col-lg-6">
                   <Reveal effect="fadeInLeft">
                        <div className="agency_featured_img text-right">
                            <img src={require ("../../img/home4/" + fimage)} alt=""/>
                        </div>
                   </Reveal>
                </div>
                <div className="col-lg-6">
                    <div className={`agency_featured_content wow fadeInLeft ${aClass}`} data-wow-delay="0.6s">
                    <Reveal effect="fadeInRight">
                        <div className="dot"><span className="dot1"></span><span className="dot2"></span></div>
                        <img className="number" src={require ("../../img/home4/" + iImg)} alt=""/>
                        <h3>{ftitle}</h3>
                        <p>{descriptions}</p>
                        <a href=".#" className="icon mt_30"><i className="ti-arrow-right"></i></a>
                    </Reveal>
                    </div>
                </div>
            </div>
        )
    }
}

export default Featuresitems;