import React, {Component} from 'react';
import EventTeamItem from './EventTeamItem';
import Slider from 'react-slick';

class EventTeam extends Component{
    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 3,
            slidesToScroll: 1,
        };
        return(
            <section className="event_team_area sec_pad">
            <div className="container">
                <div className="hosting_title security_title text-center">
                    <h2 className="wow fadeInUp" data-wow-delay="0.2s"><span>Speakers</span> Who's Speaking</h2>
                </div>
                <Slider ref={c => (this.slider = c)} className="event_team_slider" {...settings}>
                    <EventTeamItem image="team1.jpg" name="John Deo" post="Wp Developer"/>
                    <EventTeamItem image="team2.jpg" name="Jason Response" post="Graphic Design"/>
                    <EventTeamItem image="team3.jpg" name="John Deo" post="Wp Developer"/>
                    <EventTeamItem image="team1.jpg" name="John Deo" post="Wp Developer"/>
                    <EventTeamItem image="team2.jpg" name="John Deo" post="Wp Developer"/>
                </Slider>
            </div>
        </section>
        )
    }
}

export default EventTeam;