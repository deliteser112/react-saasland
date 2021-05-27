import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';
const NotFound = () => (
  <div className="body_wrapper">
    <CustomNavbar hbtnClass="new_btn" />
    <section className="error_two_area">
      <div className="container flex">
        <div className="error_content_two text-center">
          <img src={require("../img/new/error.png")} alt="" />
          <h2>Error. We can’t ftind the page you’re looking for.</h2>
          <p>
            Sorry for the inconvenience. Go to our homepage or check out our
            latest collections for Fashion, Chair, Decoration...{" "}
          </p>
          <form action="#" className="search">
            <input type="text" className="form-control" placeholder="search" />
          </form>
          <a href="/" className="about_btn btn_hover">
            Back to Home Page <i className="arrow_right"></i>
          </a>
        </div>
      </div>
    </section>
    <FooterTwo FooterData={FooterData} />
  </div>
);
export default NotFound;
