import React from 'react';
import SeoTitle from '../Title/SeoTitle';

const CloudFeaturesTwo =()=>{
    return(
        <section className="software_featured_area_two sec_pad">
            <div className="container">
               <div className="hosting_title analytices_title text-center">
               <SeoTitle Title="Automatic Yaag Failure" TitleP="We support the widest range of farms of any aggregator. Get started by clicking your favourite project below, or browse the library to see all supported projects"/>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="/#" className="s_integration_item">
                            <img src={require("../../img/new-home/kissmetrics.png")} alt=""/>
                            <h5>KISSmetrics</h5>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="/#" className="s_integration_item">
                            <img src={require("../../img/new-home/metorik.png")} alt=""/>
                            <h5>Metorik</h5>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="/#" className="s_integration_item">
                            <img src={require("../../img/new-home/nicereply-1.png")} alt=""/>
                            <h5>Nicereply</h5>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="/#" className="s_integration_item">
                            <img src={require("../../img/new-home/update.png")} alt=""/>
                            <h5>Software Updater</h5>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="/#" className="s_integration_item">
                            <img src={require("../../img/new-home/campfire.png")} alt=""/>
                            <h5>Campfire</h5>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="/#" className="s_integration_item">
                            <img src={require("../../img/new-home/webhooks.png")} alt=""/>
                            <h5>Webhooks</h5>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="/#" className="s_integration_item">
                            <img src={require("../../img/new-home/wedsite.png")} alt=""/>
                            <h5>Browser Safety</h5>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="/#" className="s_integration_item">
                            <img src={require("../../img/new-home/briteverify.png")} alt=""/>
                            <h5>BriteVerify</h5>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CloudFeaturesTwo;