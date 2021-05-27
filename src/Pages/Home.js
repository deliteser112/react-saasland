import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import ChatBanner from "../components/Banner/ChatBanner";
import CoreFeatures from "../components/Features/CoreFeatures";
import FooterSecurity from "../components/Footer/FooterSecurity";
import FooterData from "../components/Footer/FooterData";
import CloudServiceTab from '../components/Service/Sservice/CloudServiceTab';
import CloudFeatures from '../components/Features/CloudFeatures';
import CloudFeaturesTwo from '../components/Features/CloudFeaturesTwo';
import DeveloperTab from '../components/DeveloperTab';
import SequrityPrice from "../components/Features/SecurityPrice";
import Subscribe from '../components/Subscribe';

const Home = () => {
  return (
    <div className="body_wrapper">
      <CustomNavbar cClass="custom_container p0" hbtnClass="new_btn"/>
      <ChatBanner />
      <Subscribe FooterData={FooterData}/>
      <CoreFeatures />
      
      <CloudServiceTab/>
      <SequrityPrice/>
      <CloudFeaturesTwo/>
      <DeveloperTab/>
      <CloudFeatures/>
 
      <FooterSecurity FooterData={FooterData}/>
    </div>
  );
};
export default Home;