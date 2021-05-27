import React, {Component} from 'react';
import DarkSoftwareServiceItem from './DarkSoftwareServiceItem';

class DarkSoftwareService extends Component {
    render(){
        return(
            <section className="saas_featured_area sec_pad dk_bg_one">
                <div className="square_box box_one"></div>
                <div className="square_box box_two"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="saas_featured_content pr_70 mt_60">
                                <h2 className="f_600 f_p f_size_30 w_color l_height40 mb-30 wow fadeInUp">The featurers of the best ever Saas</h2>
                                <p className="f_400 f_size_15 l_height_28 d_p_color mb_50 wow fadeInUp">Why I say old chap that is spiffing barney, nancy boy bleeder chimney pot Richard cheers the little rotter so I said, easy peasy buggered blower bevvy A bit of how's your father he nicked it arse over tit..!!</p>
                                <a href="/#" className="btn_hover btn_five wow fadeInUp">View All Features</a>
                            </div>
                        </div>
                        <div className="col-lg-7 saas_featured_info">
                            <div className="row mb_30">
                                <DarkSoftwareServiceItem fClass="s_featured_one" icon="ti-package" thead="Full of Features" text="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                                <DarkSoftwareServiceItem fClass="s_featured_two" icon="ti-cloud-down" thead="Cloud Service" text="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                                <DarkSoftwareServiceItem fClass="s_featured_three" icon="ti-files" thead="Well Ducumented" text="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                                <DarkSoftwareServiceItem fClass="s_featured_four" icon="ti-server" thead="Unlimited Store" text="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default DarkSoftwareService;