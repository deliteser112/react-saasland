import React, { Component } from 'react';
import CloudServiceItem from './CloudServiceItem';

class CloudService extends Component{
    render(){
        return(
            <section className="software_featured_area">
                <div className="container">
                    <h2 className="f_600 f_size_30 t_color3 text-center l_height40 mb_70 wow fadeInUp" data-wow-delay="0.3s">Rapidly provision one to thousands of<br/> Droplets in seconds</h2>
                    <div className="row software_featured_info">
                        <CloudServiceItem icon="icon1.png" sTitle="Build better apps faster" Sp="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                        sbtn="Learn More"/>
                        <CloudServiceItem icon="icon2.png" sTitle="Predictable pricing" Sp="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                        sbtn="Learn More"/>
                        <CloudServiceItem icon="icon3.png" sTitle="Secure and reliable" Sp="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                        sbtn="Learn More"/>
                    </div>
                </div>
            </section>
        )
    }
}
export default CloudService;