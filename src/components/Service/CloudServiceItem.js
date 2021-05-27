import React, {Component} from 'react';

class CloudServiceItem extends Component {
    render(){
        let {icon, sTitle, Sp, sbtn} = this.props;
        return(
            <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
                <div className="software_featured_item text-center mb_20">
                    <div className="s_icon">
                        <img src={require("../../img/home5/icon_shape.png")} alt=""/>
                        <img className="icon" src={require ("../../img/home5/" + icon)} alt=""/>
                    </div>
                    <h3 className="f_600 t_color3">{sTitle}</h3>
                    <p className="f_400 f_size_15 mb-30">{Sp}</p>
                    <a href="/#" className="learn_btn">{sbtn}</a>
                </div>
            </div>
        )
    }
}
export default CloudServiceItem