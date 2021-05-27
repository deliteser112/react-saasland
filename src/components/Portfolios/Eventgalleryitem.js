import React, {Component} from 'react';

class Eventgalleryitem extends Component {
  render() {
    let { image, title, bname, bname2 } = this.props;
    return (
      <div className="col-lg-2 col-sm-4 portfolio_item br ux p0">
        <div className="portfolio_img">
          <img src={require("../../img/home-event/" + image)} alt="" />
          <div className="hover_content">
            <div className="portfolio-description leaf">
              <a href="work-default.html" className="portfolio-title">
                <h3 className="f_500 f_size_20 f_p">{title}</h3>
              </a>
              <div className="links">
                <a href="/#">{bname},</a>
                <a href="/#">{bname2}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Eventgalleryitem;
