import React, {Component} from 'react';
import Slider from 'react-slick';
import Fade from 'react-reveal/Fade';

class Testimonial extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
      next() {
        this.slider.slickNext();
      }
      previous() {
        this.slider.slickPrev();
      }
    render(){
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        let FooterData = this.props.FooterData;
        var {tClass}= this.props;
        return(
            <section className={`${tClass}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 d-flex align-items-center">
                            <div className="testimonial_title">
                                <Fade bottom cascade>
                                    <div className="seo_sec_title wow fadeInUp" data-wow-delay="0.3s">
                                        <h2>Check testimonials for<br/> our satisfied clients</h2>
                                        <p>That ummm I'm telling Why say bleeder smashing lemon squeezy tosser, cheesed off dropped.!</p>
                                    </div>
                                </Fade>
                                <div className="slider_nav">
                                    <i className="ti-angle-left prev" onClick={this.previous}></i>
                                    <i className="ti-angle-right next" onClick={this.next}></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1">
                            <div className="stratup_testimonial_info d-flex align-items-center">
                                <Slider ref={c => (this.slider = c)} className="testimonial_slider_four" {...settings}>
                                    {
                                        FooterData.TestimonialText.map(item =>{
                                            return(
                                                <div className="item" key={item.id}>
                                                    <div className="author_img">
                                                        <img src={require ("../../img/" + item.image)} alt=""/>
                                                    </div>
                                                    <p>{item.description}</p>
                                                    <h5>{item.authorName}</h5>
                                                    <h6>{item.authorPost}</h6>
                                                </div>
                                            )
                                        })
                                    }
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Testimonial;