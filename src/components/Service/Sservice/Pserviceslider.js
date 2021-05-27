import React, {Component} from 'react';
import Slider from 'react-slick'

class Pserviceslider extends Component{
    render(){
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '100px',
            responsive: [
                {
                  breakpoint: 1250,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '100px',
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                    centerPadding: '0px',
                  }
                },
                {
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    centerPadding: '0px',
                  }
                }
              ]
        };
        return(
            <Slider className="service_carousel" {...settings}>
                <div className="service_item">
                    <div className="icon s_icon_one"><i className="ti-check"></i></div>
                    <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">Mail Metrics<br/> Receive</h4>
                    <p>Brolly off his nut A bit of how's your father chancer in my flat chinwag bog skive.</p>
                    <img className="float-right" src={require('../../../img/home2/undraw.png')} alt=""/>
                </div>
                <div className="service_item">
                    <div className="icon s_icon_two"><i className="ti-location-arrow"></i></div>
                    <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">Mail Metrics<br/> Receive</h4>
                    <p>Brolly off his nut A bit of how's your father chancer in my flat chinwag bog skive.</p>
                    <img className="float-right" src={require('../../../img/home2/inbox.png')} alt=""/>
                </div>
                <div className="service_item">
                    <div className="icon s_icon_three"><i className="ti-search"></i></div>
                    <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">Mail Metrics<br/> Receive</h4>
                    <p>Brolly off his nut A bit of how's your father chancer in my flat chinwag bog skive.</p>
                    <img className="float-right" src={require('../../../img/home2/file.png')} alt=""/>
                </div>
                <div className="service_item">
                    <div className="icon s_icon_four"><i className="ti-stats-up"></i></div>
                    <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">Mail Metrics<br/> Receive</h4>
                    <p>Brolly off his nut A bit of how's your father chancer in my flat chinwag bog skive.</p>
                    <img className="float-right" src={require('../../../img/home2/report.png')} alt=""/>
                </div>
                <div className="service_item">
                    <div className="icon s_icon_one"><i className="ti-check"></i></div>
                    <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">Mail Metrics<br/> Receive</h4>
                    <p>Brolly off his nut A bit of how's your father chancer in my flat chinwag bog skive.</p>
                    <img className="float-right" src={require('../../../img/home2/undraw.png')} alt=""/>
                </div>
                <div className="service_item">
                    <div className="icon s_icon_two"><i className="ti-location-arrow"></i></div>
                    <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">Mail Metrics<br/> Receive</h4>
                    <p>Brolly off his nut A bit of how's your father chancer in my flat chinwag bog skive.</p>
                    <img className="float-right" src={require('../../../img/home2/inbox.png')} alt=""/>
                </div>
                <div className="service_item">
                    <div className="icon s_icon_three"><i className="ti-search"></i></div>
                    <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">Mail Metrics<br/> Receive</h4>
                    <p>Brolly off his nut A bit of how's your father chancer in my flat chinwag bog skive.</p>
                    <img className="float-right" src={require('../../../img/home2/file.png')} alt=""/>
                </div>
                <div className="service_item">
                    <div className="icon s_icon_four"><i className="ti-stats-up"></i></div>
                    <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">Mail Metrics<br/> Receive</h4>
                    <p>Brolly off his nut A bit of how's your father chancer in my flat chinwag bog skive.</p>
                    <img className="float-right" src={require('../../../img/home2/report.png')} alt=""/>
                </div>
            </Slider>
        )
    }
}
export default Pserviceslider;