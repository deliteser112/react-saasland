import React, {Component} from 'react';
import ErpIconitem from './ErpIconitem';

class ErpFeaturesitem extends Component {
    render(){
        let {rowClass, roundClass, image} = this.props;
        return(
            <div className={`row erp_item_features ${rowClass}`}>
                <div className="col-lg-6">
                    <div className="erp_features_img_two">
                        <div className={`img_icon ${roundClass}`}><span className="pluse_1"></span><span className="pluse_2"></span><i className="icon_lightbulb_alt"></i></div>
                        <img src={require ("../../img/erp-home/" + image)} alt=""/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="erp_content_two">
                        <div className="hosting_title erp_title">
                            <h2>Nurture Your Customers Using Advanced CRM</h2>
                            <p>Cack brolly butty grub chancer smashing brilliant vagabond, chimney pot blower such a fibber ummm I'm telling chinwag he lost his bottle.!</p>
                        </div>
                        <ErpIconitem iconName="icon_menu-square_alt2" erpText="Everybody Gets a Dashboard"/>
                        <ErpIconitem eitemClass="green" iconName="icon_ribbon_alt" erpText="Everybody Gets a Dashboard"/>
                        <a href="/#" className="erp_btn_learn">Learn More<i className="arrow_right"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}
export default ErpFeaturesitem;