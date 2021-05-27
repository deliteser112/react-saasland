import React from 'react';
import EventFeaturesItem from './EventFeaturesItem';

const EventFeatures =()=>{
    return(
        <section className="event_features_area">
            <div className="container">
                <div className="hosting_title security_title text-center">
                    <h2 className="wow fadeInUp" data-wow-delay="0.2s"><span>The Event</span>SaasLand in Town</h2>
                </div>
                <div className="row event_features_inner">
                    <EventFeaturesItem url="" image="leader.png"  title="Meet the Leaders" ptext="Lost the plot lurgy on your bike mate Oxford hanky panky blow off haggle golly gosh do one." 
                    btn="Buy Tickets"/>
                    <EventFeaturesItem url="" image="meetup.png"  title="Day Long Meetup" ptext="Lost the plot lurgy on your bike mate Oxford hanky panky blow off haggle golly gosh do one." 
                    btn="Buy Tickets"/>
                    <EventFeaturesItem url="" image="chat.png"  title="Ask Questions" ptext="Lost the plot lurgy on your bike mate Oxford hanky panky blow off haggle golly gosh do one." 
                    btn="Buy Tickets"/> 
                </div>
            </div>
        </section>
    )
}
export default EventFeatures;