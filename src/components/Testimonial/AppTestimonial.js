import React, {Component} from 'react';
import Slider from 'react-slick';
class AppTestimonial extends Component{
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
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return(
        <section className="app_testimonial_area" id="testimonial">
            <div className="text_shadow" data-line="Feedback"></div>
                <div className="container nav_container">
                    <div className="slider_nav">
                        <i className="ti-arrow-left prev" onClick={this.previous}></i>
                        <i className="ti-arrow-right next" onClick={this.next}></i>
                    </div>
                    <div className="shap one"></div>
                    <div className="shap two"></div>
                    <Slider ref={c => (this.slider = c)} className="app_testimonial_slider" {...settings}>
                        <div className="app_testimonial_item text-center">
                            <div className="author-img"><img src={require('../../img/home7/testimonial_author_img.png')} alt=""/></div>
                            <div className="author_info">
                                <h6 className="f_p f_500 f_size_18 t_color3 mb-0">Lurch Schpellchek</h6>
                                <p>UI/UX designer</p>
                            </div>
                            <p className="f_400">What a load of rubbish bits and bobs pear shaped owt to do with me bubble and squeak jolly good morish tinkety tonk old fruit, car boot my good sir buggered plastered cheeky David, haggle young delinquent say so I said bite your arm off easy peasy. Skive off it's all gone to pot buggered.</p>
                        </div>
                        <div className="app_testimonial_item text-center">
                            <div className="author-img"><img src={require('../../img/home7/testimonial_author_img.png')} alt=""/></div>
                            <div className="author_info">
                                <h6 className="f_p f_500 f_size_18 t_color3 mb-0">Lurch Schpellchek</h6>
                                <p>UI/UX designer</p>
                            </div>
                            <p className="f_400">What a load of rubbish bits and bobs pear shaped owt to do with me bubble and squeak jolly good morish tinkety tonk old fruit, car boot my good sir buggered plastered cheeky David, haggle young delinquent say so I said bite your arm off easy peasy. Skive off it's all gone to pot buggered.</p>
                        </div>
                        <div className="app_testimonial_item text-center">
                            <div className="author-img"><img src={require('../../img/home7/testimonial_author_img.png')} alt=""/></div>
                            <div className="author_info">
                                <h6 className="f_p f_500 f_size_18 t_color3 mb-0">Lurch Schpellchek</h6>
                                <p>UI/UX designer</p>
                            </div>
                            <p className="f_400">What a load of rubbish bits and bobs pear shaped owt to do with me bubble and squeak jolly good morish tinkety tonk old fruit, car boot my good sir buggered plastered cheeky David, haggle young delinquent say so I said bite your arm off easy peasy. Skive off it's all gone to pot buggered.</p>
                        </div>
                    </Slider>
                </div>
            </section>
        )
   }
}
export default AppTestimonial;