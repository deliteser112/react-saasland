import React, {Component} from 'react';
import Reveal from 'react-reveal/Reveal';

class SupportPartnerlogo extends Component {
    render(){
        let BannerData = this.props.BannerData;
        return(
            <section className="support_partner_logo_area">
                <div className="container">
                    <h4 className="f_size_18 f_400 f_p text-center l_height28 mb_50">Market leaders use app to nrich their brand &amp; business.</h4>
                    <div className="row partner_info">
                        {
                            BannerData.ClientsLogo.map(item =>{
                                return(
                                    <Reveal key={item.id} effect="fadeInLeft" duration={1500}>
                                        <div className="logo_item">
                                            <a href="/#"><img src={require("../img/home3/" + item.image)} alt=""/></a>
                                        </div>
                                    </Reveal>
                                )
                            })
                        }
                    </div> 
                    <div className="border_bottom"></div>
                </div>
            </section>
        )
    }
}

export default SupportPartnerlogo;