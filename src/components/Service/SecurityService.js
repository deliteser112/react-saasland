import React, {Component} from 'react';
import SecurityServiceItem from './SecuirtyServiceItem';

class SecurityService extends Component {
    render(){
        return(
            <section className="h_security_about_area">
                <div className="container">
                    <SecurityServiceItem image="about_img_1.jpg" Title="Explore user behavior on an individual level of detail"
                    description="Why I say old chap that is spiffing cobblers it's your round, haggle bits and bobs golly gosh up the duff mush well car boot bevvy."/>
                    <SecurityServiceItem image="about_img_2.jpg" rClass="flex-row-reverse" Title="Measure product usage and custom KPIs for every customer"
                    description="Why I say old chap that is spiffing cobblers it's your round, haggle bits and bobs golly gosh up the duff mush well car boot bevvy."/>
                </div>
            </section>
        )
    }
}

export default SecurityService;