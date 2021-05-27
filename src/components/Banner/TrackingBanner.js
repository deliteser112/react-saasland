import React from 'react';
import TrackingLogo from '../TrackingLogo';

const TrackingBanner =()=>{
    return(
        <section className="tracking_banner_area text-center">
            <div className="container">
                <div className="tracking_banner_content">
                    <h3>Spend less <strong>time tracking</strong> </h3>
                    <p>Track your time and watch your productivity soar!</p>
                    <img src={require ("../../img/home-tracking/tracking_banner_img.png")} alt=""/>
                </div>
                <TrackingLogo/>
            </div>
        </section>
    )
}

export default TrackingBanner;