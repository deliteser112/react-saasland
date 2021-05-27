import React from 'react';
const SecurityIntegration =()=>{
    return(
        <section className="security_integration_area">
            <div className="container">
                <div className="hosting_title analytices_title text-center">
                    <h2 className="wow fadeInUp"><span>Discover just how </span>Awesome access control can be.</h2>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="/#" className="s_integration_item">
                            <img src={require("../img/new-home/kissmetrics.png")} alt=""/>
                            <h5>KISSmetrics</h5>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="/#" className="s_integration_item">
                            <img src={require("../img/new-home/metorik.png")} alt=""/>
                            <h5>Metorik</h5>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="/#" className="s_integration_item">
                            <img src={require("../img/new-home/nicereply-1.png")} alt=""/>
                            <h5>Nicereply</h5>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="/#" className="s_integration_item">
                            <img src={require("../img/new-home/update.png")} alt=""/>
                            <h5>Software Updater</h5>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="/#" className="s_integration_item">
                            <img src={require("../img/new-home/campfire.png")} alt=""/>
                            <h5>Campfire</h5>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="/#" className="s_integration_item">
                            <img src={require("../img/new-home/webhooks.png")} alt=""/>
                            <h5>Webhooks</h5>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="/#" className="s_integration_item">
                            <img src={require("../img/new-home/wedsite.png")} alt=""/>
                            <h5>Browser Safety</h5>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="/#" className="s_integration_item">
                            <img src={require("../img/new-home/briteverify.png")} alt=""/>
                            <h5>BriteVerify</h5>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SecurityIntegration;