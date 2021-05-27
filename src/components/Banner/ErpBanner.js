import React from 'react';

const ErpBanner =()=>{
    return(
        <section className="erp_banner_area_two">
            <ul className="list-unstyled cloud_animation">
                <li><img src={require ("../../img/erp-home/cloud_01.png")} alt=""/></li>
                <li><img src={require ("../../img/erp-home/cloud_02.png")} alt=""/></li>
                <li><img src={require ("../../img/erp-home/cloud_03.png")} alt=""/></li>
                <li><img src={require ("../../img/erp-home/cloud_04.png")} alt=""/></li>
                <li><img src={require ("../../img/erp-home/cloud_05.png")} alt=""/></li>
                <li><img src={require ("../../img/erp-home/cloud_06.png")} alt=""/></li>
            </ul>
            <div className="erp_shap"></div>
            <div className="section_intro">
                <div className="section_container">
                    <div className="intro">
                        <div className=" intro_content">
                            <h1>Cloud ERP Software for Small and medium business</h1>
                            <p>A simple and powerful erp software for Manufacturing, Distribution and Services.</p>
                            <a href="/#" className="er_btn er_btn_two">Try to Free</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="animation_img wow fadeInUp" data-wow-delay="0.3s">
                <div className="container">
                    <img src={require ("../../img/erp-home/erp_dashboard.jpg")} alt=""/>
                </div>
            </div>
        </section>
    )
}

export default ErpBanner;