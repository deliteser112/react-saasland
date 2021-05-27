import React from 'react';
import Sectitle from '../components/Title/Sectitle';

const SoftwareDarkAaction =()=>{
    return(
        <section className="saas_signup_area sec_pad dk_bg_two">
            <div className="container">
                <Sectitle sClass="sec_title text-center mb_70" tClass="w_color" Title="Trusted by 800+ worldwide companies" TitleP="The BBC naff what a plonker lurgy on your bike mate bubble and squeak David, boot only a quid Richard arse happy days barmy."/>
                <form action="#" className="saas_signup_form row">
                    <div className="col-md-4 col-sm-6">
                        <div className="input-group wow fadeInLeft" data-wow-delay="0.3s">
                            <input type="text" className="form-control" placeholder="Name"/>
                            <label></label>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="input-group wow fadeInLeft" data-wow-delay="0.5s">
                            <input type="text" className="form-control" placeholder="Email"/>
                            <label></label>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="input-group wow fadeInLeft" data-wow-delay="0.6s">
                            <input type="number" className="form-control" placeholder="Password"/>
                            <label></label>
                        </div>
                    </div>
                    <div className="col-lg-12 text-center wow fadeInUp" data-wow-delay="0.8s">
                        <button type="submit" className="signup_btn btn_hover saas_banner_btn mt_60">Get started for free</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default SoftwareDarkAaction;