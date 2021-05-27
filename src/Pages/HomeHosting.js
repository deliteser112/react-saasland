import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import HostingBanner from '../components/Banner/HostingBanner';
import DomainSearch from '../components/DomainSearch';
import HostingService from '../components/Service/HostingService';
import HostingFeatures from '../components/Service/HostingFeatures';
import HostingFeaturesTwo from '../components/Service/HostingFeaturesTwo';
import HostingAction from '../components/HostingAction';
import HostingPlan from '../components/Features/HostingPlan';
import HostingMap from '../components/HostingMap';
import HostingBlog from '../components/Blog/HostingBlog';
import HostingActionTwo from '../components/HostingActionTwo';
import FooterErp from '../components/Footer/FooterErp';
import FooterData from '../components/Footer/FooterData';

const HomeHosting =()=> {
    return(
        <div className="body_wrapper">
            <CustomNavbar mClass="menu_four hosting_menu" nClass="w_menu" slogo="sticky_logo"/>
            <HostingBanner/>
            <DomainSearch/>
            <HostingService/>
            <HostingFeatures/>
            <HostingFeaturesTwo/>
            <HostingAction aClass="h_action_area" aimage="action_img.png" colClass="col-lg-6" colClassTwo="col-lg-6" Atitle="Managed wordpress Hosting on all plans" Atext="Spiffing pukka show off show off pick your nose and blow off easy peasy buggered hotpot Harry, pardon me blatant.!"/>
            <HostingPlan/>
            <HostingMap/>
            <HostingBlog/>
            <HostingActionTwo/>
            <FooterErp FooterData={FooterData}/>
        </div>
    )
}
export default HomeHosting;