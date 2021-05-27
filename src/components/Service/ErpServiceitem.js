import React, {Component} from 'react';

class ErpServiceitem extends Component {
    render(){
        let {sTitle, pText, icon, itemClass} =this.props;
        return(
            <div className="col-lg-4 col-sm-6">
                <div className={`erp_service_item ${itemClass}`}>
                    <img src={require ("../../img/erp-home/" + icon)} alt=""/>
                    <a href="/#"><h3 className="h_head">{sTitle}</h3></a>
                    <p>{pText}</p>
                </div>
            </div>
        )
    }
}

export default ErpServiceitem;