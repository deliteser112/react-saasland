import React, {Component} from 'react';

class SecurityPowerfulFeaturesItem extends Component{
    render(){
        let{image, Title} = this.props;
        return(
            <div className="s_features_item wow fadeInUp">
                <div className="item">
                    <img src={require("../../img/home-security/" + image)} alt=""/>
                    <h6>{Title}</h6>
                </div>
            </div>
        )
    }
}

export default SecurityPowerfulFeaturesItem;