import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import EventBanner from "../components/Banner/EventBanner";
import EventCount from "../components/Service/Sservice/EventCount";
import EventAbout from "../components/About/EventAbout";
import EventTeam from "../components/Team/EventTeam";
import EventFeatures from "../components/Features/EventFeatures";
import EventDetails from "../components/Features/EventDetails";
import ScheduleTab from "../components/scheduleTab";
import EventPrice from "../components/EventPrice";
import EventFact from "../components/EventFact";
import Eventgallery from "../components/Portfolios/Eventgallery";
import EventSponser from "../components/EventSponser";
import EventLocation from "../components/EventLocation";
import FooterErp from "../components/Footer/FooterErp";
import FooterData from "../components/Footer/FooterData";

const homesupport = () => {
  return (
    <div className="body_wrapper">
      <CustomNavbar
        mClass="menu_four hosting_menu"
        nClass="w_menu m-auto"
        slogo="sticky_logo"
        hbtnClass="event_btn"
      />
      <EventBanner />
      <EventCount />
      <EventAbout />
      <EventTeam />
      <EventFeatures />
      <EventDetails />
      <ScheduleTab />
      <EventPrice />
      <EventFact />
      <Eventgallery />
      <EventSponser />
      <EventLocation />
      <FooterErp fClass="event_footer_area" FooterData={FooterData} />
    </div>
  );
};
export default homesupport;
