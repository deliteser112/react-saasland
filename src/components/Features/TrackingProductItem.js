import React, {Component} from 'react';

class TrackingProductItem extends Component {
    render(){
        let {itemClass, rowclass, image, TrackingTitle, Trackingd, Trackingbtn}= this.props;
        return(
            <div className={`tracking_pr_item ${itemClass}`}>
                <div className={`row align-items-center ${rowclass}`}>
                    <div className="col-lg-6 tracking_bg">
                        <img src={require("../../img/home-tracking/" + image)} alt=""/>
                    </div>
                    <div className="col-lg-6">
                        <div className="tracking_content wow fadeInDown">
                            <h3>{TrackingTitle}</h3>
                            <p>{Trackingd}</p>
                            <a href="/#" className="seo_btn seo_btn_two btn_hover">{Trackingbtn}</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TrackingProductItem;