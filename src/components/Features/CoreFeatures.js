import React from "react";

const CoreFeatures = () => {
  return (
    <section className="chat_core_features_area sec_pad">
      <div className="container">
        <div className="hosting_title chat_title text-center">
          <h2 className="wow fadeInUp" data-wow-delay="0.2s">
            Core Features
            <br /> That makes us <span>top notch</span>
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="chat_features_item wow fadeInUp">
              <div className="round">
                <div className="round_circle"></div>
                <img
                  className="top_img p_absoulte"
                  src={require("../../img/home/pluse.png")}
                  alt=""
                />
                <img src={require("../../img/home/chat.png")} alt="" />
              </div>
              <a href=".#">
                <h4>Simlify communications</h4>
              </a>
              <p>
                Tidio lets you get all your live chat, e-mail, and Messenger
                communication in one panel.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="chat_features_item wow fadeInUp" data-wow-delay="0.2s">
              <div className="round">
                <div className="round_circle two"></div>
                <img
                  className="top_img p_absoulte"
                  src={require("../../img/home/triangle.png")}
                  alt=""
                />
                <img src={require('../../img/home/mobile.png')} alt="" />
              </div>
              <a href=".#">
                <h4>Quick Responce</h4>
              </a>
              <p>
                Tidio lets you get all your live chat, e-mail, and Messenger
                communication in one panel.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="chat_features_item wow fadeInUp" data-wow-delay="0.4s">
              <div className="round">
                <div className="round_circle three"></div>
                <img
                  className="top_img p_absoulte"
                  src={require("../../img/home/box.png")}
                  alt=""
                />
                <img src={require('../../img/home/book.png')} alt="" />
              </div>
              <a href=".#">
                <h4>Easy Report</h4>
              </a>
              <p>
                Tidio lets you get all your live chat, e-mail, and Messenger
                communication in one panel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CoreFeatures;
