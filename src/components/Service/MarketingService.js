import React, {Component} from 'react';
import Stserviceitems from './Sservice/StserviceItem';
import Reveal from 'react-reveal/Reveal';
class MarketingService extends Component{
    render(){
        let ServiceData = this.props.ServiceData;
        return(
            <section className="agency_service_area bg_color">
                <div className="container custom_container">
                    <h2 className="f_size_30 f_600 t_color3 l_height40 text-center mb_90 wow fadeInUp" data-wow-delay="0.2s">{ServiceData.STitle}</h2>
                    <div className="row mb_30">
                        {
                            ServiceData.Service.map( items => {
                                return(
                                    <Reveal effect="fadeInUp" key={items.id}>
                                        <div className="col-lg-3 col-sm-6">
                                            <Stserviceitems iShap={items.shape}  Sicon={items.icon} text={items.text} description={items.description} btn={items.btn} bicon={items.bicon}/>
                                        </div>
                                    </Reveal>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        )
    }
}
export default MarketingService;