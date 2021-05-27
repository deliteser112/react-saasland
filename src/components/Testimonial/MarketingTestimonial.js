import React, {Component} from 'react';
import Slider from 'react-slick';

class MarketingTestimonial extends Component {
   render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        let BannerData = this.props.BannerData;
        var {bgColor} = this.props;
        return(
            <section className={`agency_testimonial_area sec_pad ${bgColor}`}>
                <div className="container">
                    <h2 className="f_size_30 f_600 t_color3 l_height40 text-center mb_60">We've heard things like</h2>
                    <div className="agency_testimonial_info">
                        <Slider className="testimonial_slider" {...settings}>
                            {
                                BannerData.AgencyTestimonial.map(item=>{
                                   return(
                                        <div className="testimonial_item text-center left" key={item.id}>
                                            <div className="author_img"><img src={require('../../img/home4/' + item.image)} alt=""/></div>
                                            <div className="author_description">
                                                <h4 className="f_500 t_color3 f_size_18">{item.authorName}</h4>
                                                <h6>{item.authorPost}</h6>
                                            </div>
                                            <p>{item.description}</p>
                                        </div>
                                     )
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </section>
        )
   }
}
export default MarketingTestimonial;