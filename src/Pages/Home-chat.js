import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import ChatBanner from "../components/Banner/ChatBanner";
import CoreFeatures from "../components/Features/CoreFeatures";
import ChatFeatures from "../components/Features/ChatFeatures";
import ChatIntegration from "../components/ChatIntegration";
import ChatClients from "../components/chatClients";
import FooterErp from "../components/Footer/FooterErp";
import FooterSecurity from "../components/Footer/FooterSecurity";
import FooterData from "../components/Footer/FooterData";
import CloudBanner from '../components/Banner/CloudBanner';
import CloudService from '../components/Service/CloudService';
import CloudServiceTab from '../components/Service/Sservice/CloudServiceTab';
import CloudFeatures from '../components/Features/CloudFeatures';
import CloudFeaturesTwo from '../components/Features/CloudFeaturesTwo';
import DeveloperTab from '../components/DeveloperTab';
import Partner from '../components/Partner';
import ServiceSubscribe from '../components/ServiceSubscribe';
import FooterTwo from '../components/Footer/FooterTwo';
import SequrityPrice from "../components/Features/SecurityPrice";
import Subscribe from '../components/Subscribe';
import SecurityIntegration from "../components/SecurityIntegration";

const homechat = () => {
  return (
    <div className="body_wrapper">
      <CustomNavbar
        nClass="m-auto"
        hbtnClass="new_btn"
      />
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
export default homechat;
