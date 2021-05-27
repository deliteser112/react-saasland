import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
class ErpCustomerlogo extends Component {
    constructor(){
        super();
        this.state = {
            posts:[
                {
                    "id": 1,
                    "image": "01.png",
                },
                {
                    "id": 2,
                    "image": "02.png",
                },
                {
                    "id": 3,
                    "image": "03.png",
                },
                {
                    "id": 4,
                    "image": "04.png",
                },
                {
                    "id": 5,
                    "image": "05.png",
                },
                {
                    "id": 6,
                    "image": "06.png",
                },
                {
                    "id": 7,
                    "image": "07.png",
                },
                {
                    "id": 8,
                    "image": "08.png",
                },
                {
                    "id": 9,
                    "image": "09.png",
                },
                {
                    "id": 10,
                    "image": "02.png",
                },
                {
                    "id": 11,
                    "image": "10.png",
                },
                {
                    "id": 12,
                    "image": "11.png",
                },
                {
                    "id": 13,
                    "image": "12.png",
                },
                {
                    "id": 14,
                    "image": "13.png",
                },
                {
                    "id": 15,
                    "image": "14.png",
                },
                {
                    "id": 16,
                    "image": "15.png",
                },
                {
                    "id": 17,
                    "image": "16.png",
                },
                {
                    "id": 18,
                    "image": "17.png",
                },
                {
                    "id": 19,
                    "image": "18.png",
                },
                {
                    "id": 20,
                    "image": "19.png",
                }
            ]
        };
    }
    render(){
        return(
            <section className="erp_customer_logo_area">
                <div className="container">
                    <div className="hosting_title erp_title text-center">
                        <h2>Great companies that <span className="icon_heart"></span> SaasLand ERP</h2>
                        <p>Cack brolly butty grub chancer smashing brilliant vagabond, chimney pot blower such a fibber ummm I'm telling chinwag he lost his bottle nancy boy.</p>
                    </div>
                    <Fade bottom cascade>
                        <div className="animation_inner">
                                {this.state.posts.map(post =>(
                                    <div key={post.id}><div className="item"><img src={require ("../img/erp-home/img/" + post.image)} alt=""/></div></div>
                                ))}
                        </div>
                    </Fade>
                    <div className="text-center">
                        <a href="/#" className="er_btn">More Customers</a>
                    </div>
                </div>
            </section>
        )
    }
}

export default ErpCustomerlogo;