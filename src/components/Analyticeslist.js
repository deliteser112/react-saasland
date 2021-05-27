import React from 'react';

const Analyticeslist =()=>{
    return(
        <section className="analytices_list_area security_list_area">
            <img className="macbook_a" src={require ("../img/home-security/mackbook.png")} alt=""/>
            <img className="lock" src={require ("../img/home-security/padlock.png")} alt=""/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="hosting_title analytices_title">
                            <h2><span>Protect what’s</span>yours with Internet Security</h2>
                            <p>Nancy boy brown bread get stuffed mate a matie boy I grub cheeky horse play bobby argy-bargy loo, fantastic cockup pukka William bum bag the little rotter arse over tit cuppa.!</p>
                        </div>
                        <ul className="analytices_list">
                            <li>Client accounts</li>
                            <li>Visitor & Keyword-level trackin</li>
                            <li>Unlimited user accounts</li>
                            <li>Email summaries</li>
                            <li>Email call alerts</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Analyticeslist;