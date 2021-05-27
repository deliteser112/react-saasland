import React, {Component} from 'react';

class SecuirtyServiceItem extends Component {
    render(){
        let{image, rClass, Title, description}= this.props;
        return(
            <div className={`row h_analytices_features_item align-items-center ${rClass}`}>
                <div className="col-lg-6">
                    <div className="h_security_img text-center">
                        <img className="wow fadeInUp" src={require("../../img/home-security/" + image)} alt=""/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="h_analytices_content">
                        <h2 className="wow fadeInUp" data-wow-delay="0.1s">{Title}</h2>
                        <p className="wow fadeInUp" data-wow-delay="0.3s">{description}</p>
                        <ul className="list-unstyled">
                            <li className="wow fadeInUp" data-wow-delay="0.5s"><span>Flexible, fast reporting:</span> On your bike mate cobblers I don't want no agro bleeding crikey</li>
                            <li className="wow fadeInUp" data-wow-delay="0.7s"><span>Access our data anywhere: </span> James Bond Queen's English mufty it's all gone to pot bobby elizabeth.</li>
                            <li className="wow fadeInUp" data-wow-delay="0.9s"><span>Invite your entire team:</span> So I said in my flat Elizabeth no biggie me old mucker smashing starkers spiffing wind up, cobblers chip shop.</li>
                        </ul>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default SecuirtyServiceItem;