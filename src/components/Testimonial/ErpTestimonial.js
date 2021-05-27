import React, {Component} from "react";
import Slider from 'react-slick';
import Sectitle from '../Title/Sectitle';
class ErpTestimonial extends Component {
    constructor(){
        super();
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.state={
            items:[
                {
                    "id": 1,
                    "image": "testimonial_img.jpg",
                    "description": "Loo car boot bodge smashing I up the duff horse play give us a bell, William bugger all mate happy days mush at public school tosser victoria sponge, say lurgy hunky-dory twit hotpot gutted mate.",
                    "name": "Lance Bogrol,",
                    "postion": "Chief Financial",
                    "location": "Officer at Samumed"
                },
                {
                    "id": 2,
                    "image": "testimonial_img2.jpg",
                    "description": "Loo car boot bodge smashing I up the duff horse play give us a bell, William bugger all mate happy days mush at public school tosser victoria sponge, say lurgy hunky-dory twit hotpot gutted mate.",
                    "name": "Lance Bogrol,",
                    "postion": "Chief Financial",
                    "location": "Officer at Samumed"
                },
                {
                    "id": 3,
                    "image": "testimonial_img2.jpg",
                    "description": "Loo car boot bodge smashing I up the duff horse play give us a bell, William bugger all mate happy days mush at public school tosser victoria sponge, say lurgy hunky-dory twit hotpot gutted mate.",
                    "name": "Lance Bogrol,",
                    "postion": "Chief Financial",
                    "location": "Officer at Samumed"
                }
            ]
        }

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
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 700,
                  settings: {
                    slidesToShow: 1,
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
        return(
            <section className="erp_testimonial_area sec_pad">
                <div className="container">
                    <Sectitle sClass="hosting_title erp_title text-center" Title="What our customers say about SaasLand ERP"/>
                    <div className="row">
                        <div className="slider_nav">
                            <i className="arrow_left prev" onClick={this.previous}></i>
                            <i className="arrow_right next" onClick={this.next}></i>
                        </div>
                        <Slider ref={c => (this.slider = c)} className="erp_testimonial_info" {...settings}>
                            {this.state.items.map(item =>(
                                <div className="item" key={item.id}>
                                    <div className="erp_testimonial_item">
                                        <div className="content">
                                            <p>{item.description}</p>
                                            <div className="ratting">
                                                <a href="/#"><i className="icon_star"></i></a>
                                                <a href="/#"><i className="icon_star"></i></a>
                                                <a href="/#"><i className="icon_star"></i></a>
                                                <a href="/#"><i className="icon_star"></i></a>
                                                <a href="/#"><i className="icon_star"></i></a>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <img src={require ("../../img/erp-home/" + item.image)} alt=""/>
                                            <div className="media-body">
                                                <h5>{item.name}<span>{item.postion}</span></h5>
                                                <p>{item.location}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        )
    }
}

export default ErpTestimonial;