import React, {Component} from 'react';

class ErpanalyticsItem extends Component {
    render(){
        let {analyticsImage, text} = this.props;
        return(
            <div className="col-md-4">
                <div className="erp_analytics_item text-center">
                    <img src={require ("../img/erp-home/" + analyticsImage)} alt=""/>
                    <p>{text}</p>
                </div>
            </div>
        )
    }
}
export default ErpanalyticsItem;