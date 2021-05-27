import React, {Component} from 'react';

class DarkSoftwareServiceItem extends Component {
    render(){
        let {icon, thead, text, fClass}= this.props;
        return(
            <div className="col-lg-6 col-md-6">
                <div className={`saas_featured_item ${fClass}`}>
                    <i className={`f_size_30 ${icon}`}></i>
                    <h6 className="mt_30 mb_20">{thead}</h6>
                    <p className="mb-0">{text}</p>
                </div>
            </div>
        )
    }
}

export default DarkSoftwareServiceItem;