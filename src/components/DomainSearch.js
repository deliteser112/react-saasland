import React from 'react';

const DomainSearch =()=>{
    return(
        <section className="domain_search_area sec_pad">
            <div className="map_bg"></div>
            <div className="container">
                <div className="domain_box_info">
                    <h3 className="wow fadeInUp" data-wow-delay="0.3s">Looking for domain name?</h3>
                    <form action="#" method="post">
                        <div className="domain_form_inner">
                            <input type="text" className="form-control" placeholder="Enter your domain name"/>
                            <div className="domain_select">
                                <select className="form-control selectpickers">
                                    <option>.com</option>
                                    <option>.net</option>
                                    <option>.org</option>
                                    <option>.biz</option>
                                    <option>.uk</option>
                                </select>
                            </div>
                            <button type="submit" className="hosting_btn">Search</button>
                        </div>
                    </form>
                    <ul className="list-unstyled domain_price">
                        <li>.com <span>$6.50</span></li>
                        <li>.sg <span>$10</span></li>
                        <li>.info <span>$11</span></li>
                        <li>.co <span>$9.50</span></li>
                        <li>.net <span>$7.50</span></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default DomainSearch;