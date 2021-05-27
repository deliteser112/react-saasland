import React, {Component} from 'react';
class HRServiceItems extends Component{
    render(){
        var{hostingserviceTitle, hostingservicedescription, hostingicon} = this.props;
        return(
            <div className="col-lg-4 col-sm-6">
                <div className="hosting_service_item">
                    <div className="icon">
                        <img src={require ("../../img/hosting/" + hostingicon)}alt=""/>
                    </div>
                    <a href="/#"><h4 className="h_head">{hostingserviceTitle}</h4></a>
                    <p>{hostingservicedescription}</p>
                </div>
            </div>
        )
    }
}
export default HRServiceItems;