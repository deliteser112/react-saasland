import React, { Component } from "react";

class EventFeaturesItem extends Component {
    render(){
        let{url, title, ptext, btn, image}=this.props;
        return(
            <div className="col-lg-4 col-sm-6">
                <div className="event_features_item text-center wow fadeInUp">
                    <img src={require ("../../img/home-event/" + image)} alt=""/>
                    <a href="/#"><h5>{title}</h5></a>
                    <p>{ptext}</p>
                    <a href={url} className="e_features_btn">{btn} <i className="icon_plus"></i></a>
                </div>
            </div>
        )
    }
}

export default EventFeaturesItem;
