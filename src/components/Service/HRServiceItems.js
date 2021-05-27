import React, {Component} from 'react';
import Reveal from 'react-reveal'
class HRServiceItems extends Component{
    render(){
        var{HRtitle, HRdescription, Hicon, rclass, iclass} = this.props;
        return(
                <div className="col-lg-4 col-sm-6">
                    <Reveal bottom cascade>
                    <div className={`p_service_item ${rclass}`}>
                        <div className={`icon ${iclass}`}><i className={`ti-${Hicon}`}></i></div>
                        <h5 className="f_600 f_p t_color3">{HRtitle}</h5>
                        <p className="f_400">{HRdescription}</p>
                    </div>
                    </Reveal>
                </div>
            
        )
    }
}
export default HRServiceItems;