import React, {Component} from 'react';

class HostingAction extends Component {
    render(){
        let {aClass, aimage, colClass, colClassTwo, Atitle, Atext}= this.props;
        return(
            <section className={`${aClass}`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className={`${colClass}`}>
                            <div className="h_action_img">
                                <img className="img-fluid" src={require ("../img/hosting/" + aimage)} alt=""/>
                            </div>
                        </div>
                        <div className={`${colClassTwo}`}>
                            <div className="h_action_content">
                                <h2>{Atitle}</h2>
                                <p>{Atext}</p>
                                <a href="/#" className="hosting_btn btn_hover">Product Docs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default HostingAction;
