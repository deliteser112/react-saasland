import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import HomeERP from '../components/Banner/ErpBanner';
import ErpService from '../components/Service/ErpService';
import ErpAction from '../components/ErpAction';
import ErpFeatures from '../components/Features/ErpFeatures';
import Erpanalytics from '../components/Erpanalytics';
import ErpCustomerlogo from '../components/ErpCustomerlogo';
import ErpActionTwo from '../components/ErpActionTwo';
import ErpTestimonial from '../components/Testimonial/ErpTestimonial';
import FooterErp from '../components/Footer/FooterErp';
import FooterData from '../components/Footer/FooterData';

const Homeerp = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar mClass="erp_menu" hbtnClass="er_btn" nClass="mr-auto"/>
            <HomeERP/> 
            <ErpService/>
            <ErpAction/>
            <ErpFeatures/>
            <Erpanalytics/>
            <ErpCustomerlogo/>
            <ErpTestimonial/>
            <ErpActionTwo/>
            <FooterErp fClass="h_footer_dark_two" FooterData={FooterData}/>
        </div>
    )
}
export default Homeerp;