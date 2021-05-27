import React from 'react';
import Sectitle from "./Title/Sectitle";
import ErpanalyticsItem from "./ErpanalyticsItem";

const Erpanalytics =()=>{
    return(
        <section className="erp_analytics_area">
            <div className="container">
                <Sectitle Title="Analytics" TitleP="The full monty burke posh excuse my French Richard cheeky bobby spiffing crikey Why gormless, pear shaped.!"
                 sClass="hosting_title erp_title text-center"/>
                <div className="row">
                    <ErpanalyticsItem analyticsImage="settings1.png" text="Quick setup in five simple steps."/>
                    <ErpanalyticsItem analyticsImage="cloud-computing.png" text="Complete purchase history"/>
                    <ErpanalyticsItem analyticsImage="growth.png" text="Signup, No credit  card details required."/>
                </div>
            </div>
        </section>
    )
}
export default Erpanalytics;