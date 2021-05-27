import React from 'react';
import SecurityFeaturesItem from './SecurityFeaturesItem';

const SecurityFeatures =()=>{
    return(
        <section className="h_security_area">
            <div className="container">
                <div className="hosting_title security_title text-center">
                    <h2 className="wow fadeInUp" data-wow-delay="0.2s"><span>Security</span> Total digital protection</h2>
                </div>
                <div className="row">
                    <SecurityFeaturesItem itemClass="pr_70" image="security_1.png" Title="Share research with the whole team" pText="My good sir car boot super old owt to do with me say no biggie cheeky bugger"/>
                    <SecurityFeaturesItem itemClass="pl_70" image="security_2.png" Title="Advanced mining Traffic" pText="My good sir car boot super old owt to do with me say no biggie cheeky bugger"/>
                    <SecurityFeaturesItem itemClass="pr_70" image="security_3.png" Title="Track changes in feedback over time" pText="My good sir car boot super old owt to do with me say no biggie cheeky bugger"/>
                    <SecurityFeaturesItem itemClass="pl_70" image="security_4.png" Title="SaasLand Document Protector" pText="My good sir car boot super old owt to do with me say no biggie cheeky bugger"/>
                </div>
            </div>
        </section>
    )
}
export default SecurityFeatures;