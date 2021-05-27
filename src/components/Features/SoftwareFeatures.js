import React from 'react';

const SoftwareFeatures =()=> {
    return(
        <section className="saas_featured_area sec_pad dk_bg_one">
            <div className="square_box box_three"></div>
            <div className="square_box box_four"></div>
            <div className="container">
                <div className="row saas_featured_info">
                    <div className="col-lg-6">
                        <div className="f_img_one img_border wow fadeInLeft">
                            <img className="img-fluid" src={require("../../img/home6/featured_img_one.jpg")} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center pl_100">
                        <div className="saas_featured_content wow fadeInRight">
                            <h2 className="f_size_30 f_600 f_p w_color l_height40 mb_20">Build your brand<br/> Automate your marketing</h2>
                            <p className="d_p_color f_400 f_size_15 l_height28">Why I say old chap that is spiffing barney, nancy boy bleeder chimney pot Richard cheers the little rotter so I said, easy peasy buggered blower bevvy A bit of how's your father he nicked it arse over tit..!!</p>
                            <a href="/#" className="btn_hover saas_banner_btn mt_40">Browse Free Demo</a>
                        </div>
                    </div>
                </div>
                <div className="row saas_featured_info flex-row-reverse">
                    <div className="col-lg-6">
                        <div className="f_img_two img_border wow fadeInRight">
                            <img className="img-fluid" src={require("../../img/home6/featured_img_two.jpg")} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center pr_70">
                        <div className="saas_featured_content wow fadeInLeft">
                            <h2 className="f_size_30 f_600 f_p w_color l_height40 mb_20">Presenta tus impestos de forma<br/> sencilla, rapida y sin errores</h2>
                            <p className="d_p_color f_400 f_size_15 l_height28">Why I say old chap that is spiffing barney, nancy boy bleeder chimney pot Richard cheers the little rotter so I said, easy peasy buggered blower bevvy A bit of how's your father he nicked it arse over tit..!!</p>
                            <a href="/#" className="btn_hover saas_banner_btn mt_40">Browse Free Demo</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SoftwareFeatures;