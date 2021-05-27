import React, {Component} from 'react';
import Featuresitems from './Featuresitems';

class Features extends Component{
    render(){
        var {aClass} =this.props;
        return(
            <section className={`agency_featured_area bg_color ${aClass}`}>
                <div className="container">
                    <h2 className="f_size_30 f_600 t_color3 l_height40 text-center wow fadeInUp" data-wow-delay="0.3s">You SaasLand wherever your<br/> business agency</h2>
                    <div className="features_info">
                        <img className="dot_img" src={require ('../../img/home4/dot.png')} alt=""/>
                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="work1.png" iImg="icon01.png" ftitle="With efficiency to unlock more opportunities" descriptions="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!"/>
                        <Featuresitems rowClass="row agency_featured_item_two" aClass="pl_100" fimage="work2.png" iImg="icon02.png" ftitle="Wuth instant data to keep everyone in the know" descriptions="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!"/>
                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="work3.png" iImg="icon3.png" ftitle="With efficiency to unlock more opportunities" 
                        descriptions="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!"/>
                        <div className="dot middle_dot"><span className="dot1"></span><span className="dot2"></span></div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Features;