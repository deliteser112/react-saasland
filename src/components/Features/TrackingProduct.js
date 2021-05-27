import React, {Component} from 'react';
import TrackingProductItem from './TrackingProductItem';


class TrackingProduct extends Component{
    render(){
        return(
            <section className="tracking_product_area sec_pad">
                <div className="container">
                    <TrackingProductItem image="watch_1.png" TrackingTitle="Tracking and productivity reporting"  Trackingd="Real-time tools and rich insights mean our support solution amplifies your team for an unbeatable experience." Trackingbtn="Learn more"/>
                    <TrackingProductItem itemClass="tracking_pr_two" rowclass="flex-row-reverse" image="crismas.png" TrackingTitle="Organize your scattered projects"  Trackingd="Real-time tools and rich insights mean our support solution amplifies your team for an unbeatable experience." Trackingbtn="Learn more"/>
                    <TrackingProductItem itemClass="tracking_pr_three" image="month.png" TrackingTitle="3 Month free trial for freelancer"  Trackingd="Real-time tools and rich insights mean our support solution amplifies your team for an unbeatable experience." Trackingbtn="Learn more"/>
                </div>
            </section>
        )
    }
}

export default TrackingProduct;