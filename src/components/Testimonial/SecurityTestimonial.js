import React, {Component} from 'react';
import Slider from 'react-slick';
import Sectitle from '../../components/Title/Sectitle';
import SecurityTestimonialItem from './SecurityTestimonialItem';

class SecurityTestimonial extends Component {
    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            arrows: false,
            autoplay: true,
            centerMode: true,
            autoplaySpeed: 2000,
            centerPadding: '0px',
            slidesToShow: 3,
            slidesToScroll: 1,
        };
        return(
            <section className="feedback_area dk_bg_one sec_pad">
                <div className="container custom_container">
                    <Sectitle sClass="sec_title text-center mb_70" tClass="w_color" Title="Don't just take our word for it" TitleP="The BBC naff what a plonker lurgy on your bike mate bubble and squeak David, boot only a quid Richard arse happy."/>
                    <Slider className="feedback_slider" {...settings}>
                        <SecurityTestimonialItem image="feedback_img_two.png" name="Bailey Wonger" designation="web designer" text="Why I say old chap that is spiffing barney, nancy boy bleeder chimney pot Richard cheers the little rotter so I said, easy peasy buggered blower bevvy A bit of how's your father he nicked it arse over tit. Geeza the BBC bits.!!"
                        date="Oct 24, 2018"/>
                        <SecurityTestimonialItem image="feedback_img_three.png" name="Bailey Wonger" designation="web designer" text="Why I say old chap that is spiffing barney, nancy boy bleeder chimney pot Richard cheers the little rotter so I said, easy peasy buggered blower bevvy A bit of how's your father he nicked it arse over tit. Geeza the BBC bits.!!"
                        date="Oct 24, 2018"/>
                        <SecurityTestimonialItem image="feedback_img_two.png" name="Bailey Wonger" designation="web designer" text="Why I say old chap that is spiffing barney, nancy boy bleeder chimney pot Richard cheers the little rotter so I said, easy peasy buggered blower bevvy A bit of how's your father he nicked it arse over tit. Geeza the BBC bits.!!"
                        date="Oct 24, 2018"/>
                        <SecurityTestimonialItem image="feedback_img_two.png" name="Bailey Wonger" designation="web designer" text="Why I say old chap that is spiffing barney, nancy boy bleeder chimney pot Richard cheers the little rotter so I said, easy peasy buggered blower bevvy A bit of how's your father he nicked it arse over tit. Geeza the BBC bits.!!"
                        date="Oct 24, 2018"/>
                    </Slider>
                </div>
            </section>
        )
    }
}

export default SecurityTestimonial;