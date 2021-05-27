import React, {Component} from 'react';

class ServiceSubscribe extends Component {
    render(){
        let {sClass} = this.props;
        return(
            <div className="container">
                 <div className={`subscribe_form_info text-center ${sClass}`}>
                     <h2 className="f_600 f_size_30 l_height30 t_color3 mb_50">Subscribe for ger exclusive news & offer</h2>
                     <form action="#" className="subscribe-form">
                         <input type="text" className="form-control" placeholder="Your email"/>
                         <button type="submit" className="btn_hover btn_four mt_40">Subscribe</button>
                     </form>
                 </div>
            </div>
         )
    }
}
export default ServiceSubscribe;