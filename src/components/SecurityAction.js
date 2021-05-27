import React from 'react';

const SecurityAction =()=>{
    return(
        <section className="security_action_area">
            <img className="p_absoulte img_bg" src={require("../img/home-security/sheld_bg.png")} alt=""/>
            <div className="container">
                <div className="security_action_inner">
                    <div className="media">
                        <img src={require("../img/home-security/shield.png")} alt=""/>
                        <div className="media-body">
                            <h3><span>Want to see Sequr in action?</span>Hop on our daily webinar at 3:30 PM EST</h3>
                        </div>
                    </div>
                    <a href="/#" className="er_btn er_btn_two">Free Quote</a>
                </div>
            </div>
        </section>
    )
}
export default SecurityAction;