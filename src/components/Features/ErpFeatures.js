import React from 'react';
import ErpFeaturesitem from './ErpFeaturesitem';

const ErpFeatures =()=>{
    return(
        <section className="erp_features_area_two sec_pad">
            <div className="container">
                <ErpFeaturesitem rowClass="align-items-center flex-row-reverse" image="crm_img1.jpg"/>
                <ErpFeaturesitem rowClass="align-items-center" image="crm_img2.jpg" roundClass="red"/>
                <ErpFeaturesitem rowClass="align-items-center flex-row-reverse" image="crm_img3.jpg" roundClass="green"/>
            </div>
        </section>
    )
}
export default ErpFeatures;