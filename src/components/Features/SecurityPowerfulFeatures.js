import React from 'react';
import SecurityPowerfulFeaturesItem from './SecurityPowerfulFeaturesItem';

const SecurityPowerFeatures =()=>(
    <section className="security_features_area">
        <div className="container">
            <div className="hosting_title security_title text-center">
                <h2 className="wow fadeInUp" data-wow-delay="0.2s"><span>Popular</span> Simple yet Powerful</h2>
            </div>
            <div className="security_features_inner">
                <SecurityPowerfulFeaturesItem image="shield.png" Title="Speedup"/>
                <SecurityPowerfulFeaturesItem image="rocket.png" Title="Protection"/>
                <SecurityPowerfulFeaturesItem image="real-estate.png" Title="Cleanup"/>
            </div>
        </div>
    </section>
)

export default SecurityPowerFeatures;