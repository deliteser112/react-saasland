import React, { Component } from "react";

class SecurityTestimonialItem extends Component {
    render(){
        let {image, name, designation, text, date} = this.props;
        return(
            <div className="item">
                <div className="feedback_item">
                    <div className="feed_back_author">
                        <div className="media">
                            <div className="img">
                                <img src={require ("../../img/home6/" + image)} alt=""/>
                            </div>
                            <div className="media-body">
                                <h5 className="w_color f_size_15 f_p f_500">{name}</h5>
                                <h6 className="f_p f_400">{designation}</h6>
                            </div>
                        </div>
                        <div className="ratting">
                            <a href="/#"><i className="icon_star"></i></a>
                            <a href="/#"><i className="icon_star"></i></a>
                            <a href="/#"><i className="icon_star"></i></a>
                            <a href="/#"><i className="icon_star"></i></a>
                            <a href="/#"><i className="icon_star"></i></a>
                        </div>
                    </div>
                    <p className="d_p_color f_size_15">{text}</p>
                    <a href="/#" className="post_date">{date}</a>
                    <div className="shap_one"></div>
                    <div className="shap_two"></div>
                </div>
            </div>
        )
    }
}

export default SecurityTestimonialItem;