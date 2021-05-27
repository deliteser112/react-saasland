import React from 'react';

const ErpAction =()=> {
    return(
        <section className="erp_action_area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3 col-md-4">
                        <img src={require("../img/erp-home/action_img.png")} alt=""/>
                    </div>
                    <div className="col-lg-9 col-md-8">
                        <div className="erp_content">
                            <h2>Trusted by <strong>10,030+ Businesses</strong> over 160 Countries and 24+ Languages</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ErpAction;