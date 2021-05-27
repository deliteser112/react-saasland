import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import SecurityBanner from "../components/Banner/SecurityBanner";
import SecurityFeatures from "../components/Features/SecurityFeatures";
import SecurityPowerFeatures from "../components/Features/SecurityPowerfulFeatures";
import SecurityService from "../components/Service/SecurityService";
import SequrityPrice from "../components/Features/SecurityPrice";
import Analyticeslist from "../components/Analyticeslist";
import SecurityCustomerLogo from "../components/SecurityCustomersLogo";
import SecurityIntegration from "../components/SecurityIntegration";
import SecurityAction from "../components/SecurityAction";
import FooterSecurity from "../components/Footer/FooterSecurity";
import FooterData from '../components/Footer/FooterData';

const HomeSecurity =()=> {
    return(
        <div className="body_wrapper">
            <CustomNavbar mClass="menu_eight" nClass="w_menu" slogo="sticky_logo" hbtnClass="security_btn"/>
            <SecurityBanner/>
            <SecurityFeatures/>
            <SecurityPowerFeatures/>
            <SecurityService/>
            <SequrityPrice/>
            <Analyticeslist/>
            <SecurityCustomerLogo/>
            <SecurityIntegration/>
            <SecurityAction/>
            <FooterSecurity FooterData={FooterData}/>
        </div>
    )
}
 
export default HomeSecurity;