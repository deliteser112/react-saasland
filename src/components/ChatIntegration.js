import React from 'react';
const ChatIntegration =()=>{
    return(
        <section className="security_integration_area chat_integration_area">
            <div className="container">
                <div className="border-bottom"></div>
                <div className="chat_title text-center">
                    <h2 className="wow fadeInUp"><span>Integrations.</span> Discover even more possibilities.</h2>
                    <p>Explore 50+ integrations that make your day-to-day workflow more efficient and familiar. Our extensive developer tools might also strike your fancy.</p>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <a href="/#" className="s_integration_item">
                            <img src={require("../img/new-home/kissmetrics.png")} alt=""/>
                            <h5>KISSmetrics</h5>
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <a href="/#" className="s_integration_item">
                            <img src={require("../img/new-home/metorik.png")} alt=""/>
                            <h5>Metorik</h5>
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <a href="/#" className="s_integration_item">
                            <img src={require("../img/new-home/nicereply-1.png")} alt=""/>
                            <h5>Nicereply</h5>
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <a href="/#" className="s_integration_item">
                            <img src={require("../img/new-home/update.png")} alt=""/>
                            <h5>Software Updater</h5>
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <a href="/#" className="s_integration_item">
                            <img src={require("../img/new-home/campfire.png")} alt=""/>
                            <h5>Campfire</h5>
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <a href="/#" className="s_integration_item">
                            <img src={require("../img/new-home/webhooks.png")} alt=""/>
                            <h5>Webhooks</h5>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ChatIntegration;