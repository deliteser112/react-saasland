import React, { Component } from "react";

class ChatFeatures extends Component {
  render() {
    let {
      img1,
      img2,
      img3,
      rowClass,
      col1,
      col2,
      url,
      titleSmall,
      titlebig,
      p,
      icon,
      pClass
    } = this.props;
    return (
      <section className="chat_features_area">
        <div className="container">
          <div className={`row align-items-center ${rowClass}`}>
            <div className={col1}>
              <div className="chat_features_img chat_features_img_one">
                <img
                  className="p_absoulte dot_bg"
                  src={require("../../img/home-chat/" + img1)}
                  alt=""
                />
                <img
                  className="chat_one"
                  data-parallax='{"x": 0, "y": 80}'
                  src={require("../../img/home-chat/" + img2)}
                  alt=""
                />
                <img
                  className="p_absoulte chat_two"
                  data-parallax='{"x": 0, "y": -80}'
                  src={require("../../img/home-chat/" + img3)}
                  alt=""
                />
              </div>
            </div>
            <div className={col2}>
              <div className={`chat_features_content ${pClass}`}>
                <img src={require("../../img/home-chat/" + icon)} alt="" />
                <h2>
                  <span>{titleSmall}</span> {titlebig}
                </h2>
                <p>{p}</p>
                <a href={url}>Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default ChatFeatures;
