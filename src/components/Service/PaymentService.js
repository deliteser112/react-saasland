import React , {Component} from 'react';
import Reveal from 'react-reveal/Reveal';

class PaymentService extends Component {
    render(){
        let ServiceData = this.props.ServiceData;
        return(
            <section className="payment_service_area">
                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-4">
                            <Reveal effect="fadeInUp" duration={500}>
                                <div className="service-content">
                                    <div className="pay_icon">
                                        <div className="icon_shape"></div>
                                        <img src={require ('../../img/home9/icon3.png')} alt=""/>
                                    </div>
                                    <h2 className="f_p w_color f_700">{ServiceData.pServiceTitle}</h2>
                                    <p className="f_p w_color">{ServiceData.pServiceDetails}</p>
                                </div>
                            </Reveal>
                        </div>
                        <div className="col-lg-8">
                            <div className="row">
                                {
                                    ServiceData.PaymentService.map(item => {
                                        return(
                                            <Reveal effect="fadeInUp" duration={500} cascade key={item.id}>
                                                <div className="col-md-6 media payment_service_item">
                                                    <div className="icon">
                                                        <img src={require ("../../img/home9/" + item.image)} alt=""/>
                                                    </div>
                                                    <div className="media-body">
                                                        <h3 className="f_size_20 f_p w_color f_600">{item.title}</h3>
                                                        <p className="f_400 f_size_15 w_color">{item.description}</p>
                                                    </div>
                                                </div>
                                            </Reveal>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default PaymentService;