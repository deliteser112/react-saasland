import React from 'react';

const SupportBanner =()=>{
    return(
        <section className="support_home_area">
            <div className="banner_top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2 className="f_p f_size_40 l_height60 wow fadeInUp" data-wow-delay="0.3s">Intuitive, feature-rich, affordable <br/><span className="f_700">customer support</span> software</h2>
                            <p className="f_size_18 l_height30 wow fadeInUp" data-wow-delay="0.5s">Chap fantastic skive off chancer knees up starkers easy peasy up the<br/> kyver David, bleeding the BBC tomfoolery chimney.!</p>
                            <form className="mailchimp wow fadeInUp" data-wow-delay="0.6s" method="post">
                                <div className="input-group subcribes">
                                    <input type="text" name="EMAIL" className="form-control memail" placeholder="saasland@gmail.com"/>
                                    <button className="btn btn_submit f_size_15 f_500" type="submit">Get Started</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="support_home_img wow fadeInUp" data-wow-delay="0.9s">
                        <img src={require ("../../img/new-home/banner.png")} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SupportBanner;