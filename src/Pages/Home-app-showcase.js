import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import AppBanner from '../components/Banner/AppBanner';
import AppFeaturesTwo from '../components/Features/AppFeaturesTwo';
import AppFeatures from '../components/Features/AppFeatures';
import AppTestimonial from '../components/Testimonial/AppTestimonial';
import AppWork from '../components/Service/AppWork';
import ScreenshowCase from '../components/ScreenshowCase';
import AppGetstarted from '../components/AppGetstarted';
import AppTeam from '../components/Team/AppTeam';
import FooterTwo from '../components/Footer/FooterTwo';
import ServiceData from '../components/Service/ServiceData';
import FooterData from '../components/Footer/FooterData';

const HomeAppShowcase = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu"  hbtnClass="er_btn"/>
            <AppBanner/>
            <AppFeaturesTwo/>
            <AppFeatures/>
            <AppWork ServiceData={ServiceData}/>
            <AppTestimonial/>
            <ScreenshowCase/>
            <AppGetstarted/>
            <AppTeam/>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default HomeAppShowcase;