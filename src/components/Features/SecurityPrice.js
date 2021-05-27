import React, {Component} from 'react';

class SequrityPrice extends Component {
    constructor(){
        super();
        this.state= {
            list: [
                {
                    id: 1,
                    adTitle: "Adding time manually",
                    icon: 'icon_check_alt2',
                    icon2: 'icon_check_alt2',
                    icon3: 'icon_check_alt2',
                },
                {
                    id: 2,
                    adTitle: "Timeline",
                    icon: 'icon_check_alt2',
                    icon2: 'icon_close',
                    icon3: 'icon_check_alt2',
                },
                {
                    id: 3,
                    adTitle: "Tracking time",
                    icon: 'icon_check_alt2',
                    icon2: 'icon_check_alt2',
                    icon3: 'icon_check_alt2',
                },
                {
                    id: 4,
                    adTitle: "Adding time manually",
                    icon: 'icon_check_alt2',
                    icon2: 'icon_close',
                    icon3: 'icon_check_alt2',
                },
                {
                    id: 5,
                    adTitle: "Adding time manually",
                    icon: 'icon_check_alt2',
                    icon2: 'icon_check_alt2',
                    icon3: 'icon_check_alt2',
                },
                {
                    id: 6,
                    adTitle: "Timeline",
                    icon: 'icon_check_alt2',
                    icon2: 'icon_close',
                    icon3: 'icon_check_alt2',
                },
                {
                    id: 7,
                    adTitle: "Tracking time",
                    icon: 'icon_check_alt2',
                    icon2: 'icon_check_alt2',
                    icon3: 'icon_check_alt2',
                },
                {
                    id: 8,
                    adTitle: "Adding time manually",
                    icon: 'icon_check_alt2',
                    icon2: 'icon_close',
                    icon3: 'icon_check_alt2',
                }
            ]
        }
    }
    render(){
        return(
            <section className="pricing_area_four sec_pad">
            <div className="container">
                <div className="hosting_title security_title text-center">
                    <h2 className="wow fadeInUp" data-wow-delay="0.2s"><span>SaasLand Packge.</span> Free essentials or ultimate protection?</h2>
                </div>
                <div className="price_info_two price_info_three">
                    <div className="price_head">
                        <div className="p_head time">
                            <h4>Time tracking</h4>
                        </div>
                        <div className="p_head">
                            <h5>Free</h5>
                            <p>$0.0 / mo</p>
                        </div>
                        <div className="p_head">
                            <h5>Enterprise</h5>
                            <p>$30.0 / mo</p>
                        </div>
                        <div className="p_head">
                            <h5>Unlimited</h5>
                            <p>$40.0 / mo</p>
                        </div>
                    </div>
                    <div className="price_body">
                        {
                            this.state.list.map( list => {
                                return(
                                    <div className="pr_list" key={list.id}>
                                        <div className="price_item">
                                        <h5 className="pr_title" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save time by using keyboard shortcuts all across SaasLand">{list.adTitle}</h5>
                                        </div>
                                        <div className="price_item" data-title="Free">
                                            <h5 className="check"><i className={list.icon}></i></h5>
                                        </div>
                                        <div className="price_item" data-title="Enterprise">
                                            <h5 className="check"><i className={list.icon2}></i></h5>
                                        </div>
                                        <div className="price_item" data-title="Unlimited">
                                            <h5 className="check"><i className={list.icon3}></i></h5>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div className="pr_list">
                            <div className="price_item">
                            </div>
                            <div className="price_item">
                                <a href="/#" className="price_btn btn_hover">Choose This</a>
                            </div>
                            <div className="price_item">
                                <a href="/#" className="price_btn btn_hover">Choose This</a>
                            </div>
                            <div className="price_item">
                                <a href="/#" className="price_btn btn_hover">Choose This</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}
export default SequrityPrice;