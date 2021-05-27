import React from 'react';

const TrackingActivity =()=>{
    return(
        <section className="tracking_activity_area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="media tracking_item">
                            <img src={require ("../img/home-tracking/activity_icon.png")} alt=""/>
                            <div className="media-body">
                                <a href="/#"><h3 className="h_head">Track Activity Live</h3></a>
                                <p>Twit cras excuse my French matie boy grub it’s all gone to </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="media tracking_item">
                            <img src={require ("../img/home-tracking/time_icon.png")} alt=""/>
                            <div className="media-body">
                                <a href="/#"><h3 className="h_head">Time Efficiency</h3></a>
                                <p>Twit cras excuse my French matie boy grub it’s all gone to </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="media tracking_item">
                            <img src={require ("../img/home-tracking/analyze_icon.png")} alt=""/>
                            <div className="media-body">
                                <a href="/#"><h3 className="h_head">Analyze Input</h3></a>
                                <p>Twit cras excuse my French matie boy grub it’s all gone to </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TrackingActivity;