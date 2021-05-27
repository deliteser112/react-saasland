import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import HRService from '../components/Service/HRService';
import PrototypeService from '../components/Service/Sservice/PrototypeService';
import Partner from '../components/Partner';
import ServiceSubscribe from '../components/ServiceSubscribe';
import FooterTwo from '../components/Footer/FooterTwo';
import ServiceData from '../components/Service/ServiceData';
import FooterData from '../components/Footer/FooterData';

const Service = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Our services" Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"/>
            <HRService ServiceData={ServiceData}/>
            <PrototypeService/>
            <Partner pClass="partner_logo_area_two" pClasst="pt-0 mb-0"/>
            <ServiceSubscribe sClass="s_form_info_two"/>
            <FooterTwo fClass="pt_150" FooterData={FooterData}/>
        </div>
    )
}
export default Service;