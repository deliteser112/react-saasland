import React, {Component} from 'react';
import SeoTitle from '../components/Title/SeoTitle';


class Subscribe extends Component {
    render(){
        return(
            <React.Fragment>
                <section className="seo_subscribe_area">
                    <div className="overlay_img"></div>
                    <div className="cloud_img"><img src={require('../img/seo/cloud.png')} alt=""/></div>
                    <div className="container">
                        <SeoTitle Title="Check your Website’s SEO!" TitleP="The full monty burke posh excuse my French Richard cheeky bobby spiffing crikeyWhy gormless, pear shaped.!"/>
                        <form action="#" className="row seo_subscribe_form">
                            <div className="input-group col-lg-5 col-md-5 col-sm-6">
                                <input type="url" name="website" id="website" placeholder="Web URL" className="form-control"/>
                            </div>
                            <div className="input-group col-lg-5 col-md-4 col-sm-6">
                                <input type="email" name="email" id="emails" placeholder="Email" className="form-control"/>
                            </div>
                            <div className="input-group col-lg-2 col-md-3 col-sm-12">
                                <input type="submit" name="submit" value="Check" className="check-btn"/>
                            </div>
                        </form>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Subscribe;