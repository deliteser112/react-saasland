import React, {Component} from 'react';
import Sectitle from './Title/Sectitle';

class SupportIntegration extends Component {
    constructor(){
        super();
        this.state = {
            integrationItem:[
                {
                    "id": 100,
                    "iImage": "kissmetrics.png",
                    "text": "KISSmetrics"
                },
                {
                    "id": 101,
                    "iImage": "metorik.png",
                    "text": "Metorik"
                },
                {
                    "id": 102,
                    "iImage": "nicereply-1.png",
                    "text": "Nicereply"
                },
                {
                    "id": 103,
                    "iImage": "campfire.png",
                    "text": "Campfire"
                },
                {
                    "id": 104,
                    "iImage": "webhooks.png",
                    "text": "Webhooks"
                },
                {
                    "id": 105,
                    "iImage": "briteverify.png",
                    "text": "BriteVerify"
                }
            ]
        };
    }

    render(){
        return(
            <section className="support_integration_area">
                <div className="container">
                    <Sectitle sClass="sec_title text-center mb_70" Title='Software Integrations' TitleP='Why I say old chap that is spiffing lavatory chip shop gosh off his nut, smashing boot are you taking the piss posh loo brilliant matie boy.!'/>
                    <div className="row flex-row-reverse">
                        <div className="col-lg-9 col-md-10 col-sm-12">
                            <div className="row">
                                {this.state.integrationItem.map(post =>(
                                    <div className="col-lg-4 col-md-4 col-sm-6" key={post.id}>
                                        <a href="/#" className="s_integration_item">
                                            <img src={require ("../img/new-home/" + post.iImage)} alt=""/>
                                            <h5>{post.text}</h5>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-2 col-sm-12">
                            <img className="integration_img" src={require ("../img/new-home/tree.png")} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default SupportIntegration;
