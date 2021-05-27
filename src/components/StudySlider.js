import React, {Component} from 'react';
import Slider from 'react-slick/';

class StudySlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
          };
        return (
            <React.Fragment>
                <Slider {...settings} className="case_studies_slider">
                    <div className="iitem">
                        <div className="studies_item">
                            <img src={require('../img/seo/studies_img_one.jpg')} alt=""/>
                            <div className="text">
                                <a href=".#">
                                    <h4>Content Marketing</h4>
                                </a>
                                <p><a href=".#">Marketing,</a><a href=".#">Seo</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="iitem">
                        <div className="studies_item">
                            <img src={require('../img/seo/studies_img_two.jpg')} alt=""/>
                            <div className="text">
                                <a href=".#">
                                    <h4>Content Marketing</h4>
                                </a>
                                <p><a href=".#">Marketing,</a><a href=".#">Seo</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="iitem">
                        <div className="studies_item">
                            <img src={require('../img/seo/studies_img_three.jpg')} alt=""/>
                            <div className="text">
                                <a href=".#">
                                    <h4>Content Marketing</h4>
                                </a>
                                <p><a href=".#">Marketing,</a><a href=".#">Seo</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="iitem">
                        <div className="studies_item">
                            <img src={require('../img/seo/studies_img_three.jpg')} alt=""/>
                            <div className="text">
                                <a href=".#">
                                    <h4>Content Marketing</h4>
                                </a>
                                <p><a href=".#">Marketing,</a><a href=".#">Seo</a></p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </React.Fragment>
        )
    }
}

export default StudySlider;