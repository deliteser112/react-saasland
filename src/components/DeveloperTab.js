import React, {Component} from 'react';

class DeveloperTab extends Component {
    render(){
        return(
            <section className="developer_product_area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex align-items-center">
                            <div className="developer_product_content">
                                <h2 className="f_600 f_size_30 l_height30 t_color3 mb_50 wow fadeInUp" data-wow-delay="0.2s">Developers first</h2>
                                <ul className="nav nav-tabs develor_tab mb-30" id="myTab2" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active"  data-tab="tab_one" id="ruby-tab" data-toggle="tab" href="#ruby" role="tab" aria-controls="ruby" aria-selected="true">Ruby </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-tab="tab_two" id="curl-tab" data-toggle="tab" href="#curl" role="tab" aria-controls="curl" aria-selected="false"> Curl</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-tab="tab_three" data-toggle="tab" href="#resize" role="tab" aria-controls="resize" aria-selected="true">Resize</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-tab="tab_four" id="doctl-tab" data-toggle="tab" href="#doctl" role="tab" aria-controls="doctl" aria-selected="false">Doctl</a>
                                    </li>
                                </ul>
                                <div className="tab-content developer_tab_content">
                                    <div className="tab-pane fade show active" id="ruby" role="tabpanel" aria-labelledby="ruby-tab">
                                        <p className="mb_40">Tickety-boo cheers plastered twit chimney pot off his nut hotpot spend a penny have it, so I said squiffy A bit of how's your father mufty pukka knees up absolutely bladdered brown bread, James Bond boot spiffing ummm I'm telling vagabond arse over tit burke. He lost his bottle mush old spend a penny wellies gormless bite.!</p>
                                        <a href="/#" className="details_btn">API Documentation</a>
                                    </div>
                                    <div className="tab-pane fade" id="curl" role="tabpanel" aria-labelledby="curl-tab">
                                        <p className="mb_40">Cheers plastered twit chimney pot off his nut hotpot spend a penny have it, so I said squiffy A bit of how's your father mufty pukka knees up absolutely bladdered brown bread, James Bond boot spiffing ummm I'm telling vagabond arse over tit burke. He lost his bottle mush old spend a penny wellies gormless bite.!</p>
                                        <a href="/#" className="details_btn">API Documentation</a>
                                    </div>
                                    <div className="tab-pane fade" id="resize" role="tabpanel" aria-labelledby="resize-tab">
                                        <p className="mb_40">Tickety-boo cheers plastered twit chimney pot off his nut hotpot spend a penny have it, so I said squiffy A bit of how's your father mufty pukka knees up absolutely bladdered brown bread, James Bond boot spiffing ummm I'm telling vagabond arse over tit burke. He lost his bottle mush old spend a penny wellies gormless bite.!</p>
                                        <a href="/#" className="details_btn">API Documentation</a>
                                    </div>
                                    <div className="tab-pane fade" id="doctl" role="tabpanel" aria-labelledby="doctl-tab">
                                        <p className="mb_40">Tickety-boo cheers plastered twit chimney pot off his nut hotpot spend a penny have it, so I said squiffy A bit of how's your father mufty pukka knees up absolutely bladdered brown bread, James Bond boot spiffing ummm I'm telling vagabond arse over tit burke. He lost his bottle mush old spend a penny wellies gormless bite.!</p>
                                        <a href="/#" className="details_btn">API Documentation</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tab_img_info">
                                <div className="tab_img active" id="tab_one">
                                    <img className="img-fluid wow fadeInRight" data-wow-delay="0.4s" src={require ("../img/home5/php.jpg")} alt=""/>
                                </div>
                                <div className="tab_img" id="tab_two">
                                    <img className="img-fluid wow fadeInRight" data-wow-delay="0.4s" src={require ("../img/home5/01.jpg")} alt=""/>
                                </div>
                                <div className="tab_img" id="tab_three">
                                    <img className="img-fluid wow fadeInRight" data-wow-delay="0.4s" src={require ("../img/home5/02.jpg")} alt=""/>
                                </div>
                                <div className="tab_img" id="tab_four">
                                    <img className="img-fluid wow fadeInRight" data-wow-delay="0.4s" src={require ("../img/home5/03.jpg")} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default DeveloperTab;