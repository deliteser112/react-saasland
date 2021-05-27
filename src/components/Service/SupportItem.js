import React from 'react';

const SupportItem = () => {
    return(
        <section className="support_help_area sec_pad">
            <div className="container">
                <h2 className="f_p f_size_30 l_height50 f_600 t_color text-center wow fadeInUp mb_60">What kind of help do you need today?</h2>
                <div className="d-flex">
                    <div className="support_item">
                        <img src={require ('../../img/new-home/ticket-support.png')} alt=""/>
                        <h4>Need Help support</h4>
                        <a href="/#" className="software_banner_btn btn_submit f_size_15 f_500">Start Ticketing</a>
                    </div>
                    <div className="support_item">
                        <img src={require ('../../img/new-home/email.png')} alt=""/>
                        <h4>Need Email support</h4>
                        <a href="/#" className="software_banner_btn btn_submit f_size_15 f_500">GIve me a mail</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SupportItem;

