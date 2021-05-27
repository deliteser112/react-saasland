import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import SoftwareDarkBanner from '../components/Banner/SoftwareDarkBanner';
import BannerData from '../components/Banner/BannerData';
import DarkSoftwareService from '../components/Service/DarkSoftwareService';
import SoftwareDarkAaction from '../components/SoftwareDarkAction';
import SoftwareFeatures from '../components/Features/SoftwareFeatures';
import SecurityFact from '../components/SecurityFact';
import SecurityTestimonial from '../components/Testimonial/SecurityTestimonial';
import SecurityPartnerLogo from '../components/SecurityPartnerLogo';
import PrototypeFooter from '../components/Footer/PrototypeFooter';
import FooterData from '../components/Footer/FooterData';

const HomesoftwareDark = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar mClass="menu_six" hbtnClass="cus_dark" cClass="custom_container p0" slogo="sticky_logo"/>
            <SoftwareDarkBanner/> 
            <DarkSoftwareService/>
            <SoftwareDarkAaction/>
            <SoftwareFeatures/>
            <SecurityFact image="trust_img2.png"/>
           
            <SecurityTestimonial/>
            <SecurityPartnerLogo sClass="partner_logo_area_three dk_bg_two" BannerData={BannerData}/>
            <PrototypeFooter rclass={'footer_area_six'} FooterData={FooterData}/>
        </div>
    )
}
export default HomesoftwareDark;