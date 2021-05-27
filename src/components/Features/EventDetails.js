import React from 'react';

const EventDetails =()=>{
    return(
        <section className="event_promotion_area">
            <div className="container">
                <div className="hosting_title security_title text-center">
                    <h2 className="wow fadeInUp" data-wow-delay="0.2s"><span>Main Discussions</span>SaasLand Visual Studio</h2>
                </div>
                <div className="event_promotion_inner">
                    <div className="event_img">
                        <img src={require('../../img/home-event/promo.jpg')} alt=""/>
                    </div>
                    <div className="row event_promotion_info align-items-center">
                        <div className="col-md-6">
                            <div className="e_promo_text wow fadeInDown">
                                <div className="d-flex">
                                    <a href="/#" className="promo_tag">Workshop</a>
                                    <a href="/#" className="date">24 - 06 - 2019</a>
                                </div>
                                <h3>The Impact of Event Marketing</h3>
                                <a href="/#" className="event_btn event_btn_two btn_hover">Buy Tickets</a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <p>Only a quid it's all gone to pot say codswallop loo tinkety tonk old fruit Oxford Why, porkies cheeky bugger tickety-boo butty a load of old tosh bleeder, down the pub well owt to do with me is chip shop gormless. I don't want no agro bleeder tomfoolery knees up what a load of rubbish the full monty.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default EventDetails;