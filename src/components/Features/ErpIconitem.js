import React, {Component} from 'react';

class ErpIconitem extends Component {
    render(){
        let {eitemClass, iconName, erpText} = this.props;
        return(
            <div className="media erp_item">
                <div className={`icon ${eitemClass}`}>
                    <i className={`${iconName}`}></i>
                </div>
                <div className="media-body">
                    <h5>{erpText}</h5>
                </div>
            </div>
        )
    }
}
export default ErpIconitem;