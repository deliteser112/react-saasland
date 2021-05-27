import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import CloudBanner from '../components/Banner/CloudBanner';
import CloudService from '../components/Service/CloudService';
import CloudServiceTab from '../components/Service/Sservice/CloudServiceTab';
import CloudFeatures from '../components/Features/CloudFeatures';
import CloudFeaturesTwo from '../components/Features/CloudFeaturesTwo';
import DeveloperTab from '../components/DeveloperTab';
import Partner from '../components/Partner';
import ServiceSubscribe from '../components/ServiceSubscribe';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';

const HomeCloud = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu" hbtnClass="btn_get_radious menu_custfive"/>
            <CloudBanner/>
            <CloudService/>
            <CloudFeatures/>
            <CloudServiceTab/>
            <CloudFeaturesTwo/>
            <DeveloperTab/>
            <Partner pClass="partner_logo_area_two" pClasst="pt-0 mb-0"/>
            <ServiceSubscribe/>
            <FooterTwo fClass="pt_150" FooterData={FooterData}/>
        </div>
    )
}
export default HomeCloud;