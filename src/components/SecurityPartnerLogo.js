import React, {Component} from 'react';
import Reveal from 'react-reveal/Reveal';

class SecurityPartnerLogo extends Component {
    render(){
        let BannerData = this.props.BannerData;
        let {sClass} = this.props;
        return(
            <section className={sClass}>
                <div className="container">
                    <div className="row partner_info">
                        {
                            BannerData.ClientsLogo.map(item =>{
                                return(
                                    <Reveal key={item.id} effect="fadeInLeft" duration={1500}>
                                        <div className="logo_item">
                                            <a href="/#"><img src={require("../img/home6/" + item.image)} alt=""/></a>
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

export default SecurityPartnerLogo;