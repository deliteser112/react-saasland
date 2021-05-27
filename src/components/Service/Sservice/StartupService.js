import React, {Component} from 'react';
import Startupsitem from './Startupsitem';
import Reveal from 'react-reveal';
class Stservice extends Component {
    render(){
        return(
            <section className="stratup_service_area sec_pad bg_color">
                <div className="container">
                    <div className="sec_title mb_70 wow fadeInUp" data-wow-delay="0.4s">
                       <Reveal effect="fadeInUp"><h2 className="f_p f_size_30 l_height40 f_600 t_color text-center">User - friendly experience for <br/> your attendies</h2></Reveal>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="stratup_service_img">
                                <div className="shape"></div>
                                <img className="laptop_img" src={require('../../../img/new/laptop.png')} alt=""/>
                                <img className="phone_img" src={require ('../../../img/new/phone.png')} alt=""/>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 d-flex align-items-center">
                            <div className="stratup_service_info">
                                <Startupsitem Sicon="icon-badge" text="You events" description="Every event at your fingertip"/>
                                <Startupsitem iconClass="icon_two" Sicon="icon-bell" text="Notifications" description="Every event at your fingertip"/>
                                <Startupsitem iconClass="icon_three" Sicon="icon-layers" text="Sessions" description="Every event at your fingertip"/>
                                <Startupsitem iconClass="icon_four" Sicon="icon-screen-tablet" text="Interactions" description="Every event at your fingertip"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Stservice;