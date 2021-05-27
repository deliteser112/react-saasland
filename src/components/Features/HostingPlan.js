import React, {Component} from 'react';
import Sectitle from '../Title/Sectitle';

class HostingPlan extends Component {
    constructor(){
        super();
        this.state= {
            Standard:[
                {
                    id: 1,
                    title: "Oxford William owt to do with me Why cuppa buggered, nancy boy get stuffed mate absolutely bladdered blag matie boy the full monty bobby bleeder.",
                    priceList:[
                        {
                            "id": 1,
                            "Memory": "1 GB",
                            "Vcpus": "1 vCPU",
                            "Ssd": "125 GB",
                            "Transfer": "1 TB",
                            "Price": "$10/mo",
                            "PriceS": "$0.025/hr",
                        },
                        {
                            "id": 2,
                            "Memory": "2 GB",
                            "Vcpus": "2 vCPU",
                            "Ssd": "100 GB",
                            "Transfer": "2 TB",
                            "Price": "$20/mo",
                            "PriceS": "$0.025/hr",
                        },
                        {
                            "id": 3,
                            "Memory": "3 GB",
                            "Vcpus": "3 vCPU",
                            "Ssd": "50 GB",
                            "Transfer": "3 TB",
                            "Price": "$30/mo",
                            "PriceS": "$0.025/hr",
                        },
                        {
                            "id": 4,
                            "Memory": "4 GB",
                            "Vcpus": "4 vCPU",
                            "Ssd": "140 GB",
                            "Transfer": "4 TB",
                            "Price": "$40/mo",
                            "PriceS": "$0.015/hr",
                        },
                        {
                            "id": 5,
                            "Memory": "1 GB",
                            "Vcpus": "1 vCPU",
                            "Ssd": "125 GB",
                            "Transfer": "1 TB",
                            "Price": "$10/mo",
                            "PriceS": "$0.025/hr",
                        },
                        {
                            "id": 6,
                            "Memory": "2 GB",
                            "Vcpus": "2 vCPU",
                            "Ssd": "100 GB",
                            "Transfer": "2 TB",
                            "Price": "$20/mo",
                            "PriceS": "$0.025/hr",
                        },
                        {
                            "id": 7,
                            "Memory": "3 GB",
                            "Vcpus": "3 vCPU",
                            "Ssd": "50 GB",
                            "Transfer": "3 TB",
                            "Price": "$30/mo",
                            "PriceS": "$0.025/hr",
                        },
                        {
                            "id": 8,
                            "Memory": "4 GB",
                            "Vcpus": "4 vCPU",
                            "Ssd": "140 GB",
                            "Transfer": "4 TB",
                            "Price": "$40/mo",
                            "PriceS": "$0.015/hr",
                        }
                    ]
                }
            ],
            Cpu:[
                {
                    id: 2,
                    title: "Oxford William owt to do with me Why cuppa buggered, nancy boy get stuffed mate absolutely bladdered blag matie boy the full monty bobby bleeder.",
                    priceList:[
                        {
                            "id": 1,
                            "Memory": "1 GB",
                            "Vcpus": "1 vCPU",
                            "Ssd": "125 GB",
                            "Transfer": "1 TB",
                            "Price": "$10/mo",
                            "PriceS": "$0.025/hr",
                        },
                        {
                            "id": 2,
                            "Memory": "2 GB",
                            "Vcpus": "2 vCPU",
                            "Ssd": "100 GB",
                            "Transfer": "2 TB",
                            "Price": "$20/mo",
                            "PriceS": "$0.025/hr",
                        },
                        {
                            "id": 3,
                            "Memory": "3 GB",
                            "Vcpus": "3 vCPU",
                            "Ssd": "50 GB",
                            "Transfer": "3 TB",
                            "Price": "$30/mo",
                            "PriceS": "$0.025/hr",
                        },
                        {
                            "id": 4,
                            "Memory": "4 GB",
                            "Vcpus": "4 vCPU",
                            "Ssd": "140 GB",
                            "Transfer": "4 TB",
                            "Price": "$40/mo",
                            "PriceS": "$0.015/hr",
                        },
                        {
                            "id": 5,
                            "Memory": "1 GB",
                            "Vcpus": "1 vCPU",
                            "Ssd": "125 GB",
                            "Transfer": "1 TB",
                            "Price": "$10/mo",
                            "PriceS": "$0.025/hr",
                        },
                        {
                            "id": 6,
                            "Memory": "2 GB",
                            "Vcpus": "2 vCPU",
                            "Ssd": "100 GB",
                            "Transfer": "2 TB",
                            "Price": "$20/mo",
                            "PriceS": "$0.025/hr",
                        },
                        {
                            "id": 7,
                            "Memory": "3 GB",
                            "Vcpus": "3 vCPU",
                            "Ssd": "50 GB",
                            "Transfer": "3 TB",
                            "Price": "$30/mo",
                            "PriceS": "$0.025/hr",
                        },
                        {
                            "id": 8,
                            "Memory": "4 GB",
                            "Vcpus": "4 vCPU",
                            "Ssd": "140 GB",
                            "Transfer": "4 TB",
                            "Price": "$40/mo",
                            "PriceS": "$0.015/hr",
                        }
                    ]
                }
            ],
            General:[
                {
                    id: 3,
                    title: "Oxford William owt to do with me Why cuppa buggered, nancy boy get stuffed mate absolutely bladdered blag matie boy the full monty bobby bleeder.",
                    priceList:[
                        {
                            "id": 1,
                            "Memory": "1 GB",
                            "Vcpus": "1 vCPU",
                            "Ssd": "125 GB",
                            "Transfer": "1 TB",
                            "Price": "$10/mo",
                            "PriceS": "$0.025/hr",
                        },
                        {
                            "id": 2,
                            "Memory": "2 GB",
                            "Vcpus": "2 vCPU",
                            "Ssd": "100 GB",
                            "Transfer": "2 TB",
                            "Price": "$20/mo",
                            "PriceS": "$0.025/hr",
                        },
                        {
                            "id": 3,
                            "Memory": "3 GB",
                            "Vcpus": "3 vCPU",
                            "Ssd": "50 GB",
                            "Transfer": "3 TB",
                            "Price": "$30/mo",
                            "PriceS": "$0.025/hr",
                        },
                        {
                            "id": 4,
                            "Memory": "4 GB",
                            "Vcpus": "4 vCPU",
                            "Ssd": "140 GB",
                            "Transfer": "4 TB",
                            "Price": "$40/mo",
                            "PriceS": "$0.015/hr",
                        },
                        {
                            "id": 5,
                            "Memory": "1 GB",
                            "Vcpus": "1 vCPU",
                            "Ssd": "125 GB",
                            "Transfer": "1 TB",
                            "Price": "$10/mo",
                            "PriceS": "$0.025/hr",
                        },
                        {
                            "id": 6,
                            "Memory": "2 GB",
                            "Vcpus": "2 vCPU",
                            "Ssd": "100 GB",
                            "Transfer": "2 TB",
                            "Price": "$20/mo",
                            "PriceS": "$0.025/hr",
                        },
                        {
                            "id": 7,
                            "Memory": "3 GB",
                            "Vcpus": "3 vCPU",
                            "Ssd": "50 GB",
                            "Transfer": "3 TB",
                            "Price": "$30/mo",
                            "PriceS": "$0.025/hr",
                        },
                        {
                            "id": 8,
                            "Memory": "4 GB",
                            "Vcpus": "4 vCPU",
                            "Ssd": "140 GB",
                            "Transfer": "4 TB",
                            "Price": "$40/mo",
                            "PriceS": "$0.015/hr",
                        }
                    ]
                }
            ]
        }
    }
    render(){
        return(
            <section className="h_pricing_area sec_pad">
            <div className="container">
                <Sectitle Title="Check out awesome plans, And order now" TitleP="The full monty burke posh excuse my French Richard cheeky bobby spiffing crikey Why gormless, pear shaped.!" sClass="hosting_title text-center"/>
                <div className="h_price_inner">
                    <ul className="nav nav-tabs hosting_tab" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Standard</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">CPU Optimized</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">General Purpose </a>
                        </li>
                    </ul>
                    <div className="tab-content h_price_tab" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            {this.state.Standard.map(post =>(
                                <React.Fragment key={post.id}>
                                    <p>{post.title}</p>
                                    <div className="h_price_body">
                                        <div className="price_head">
                                            <div className="p_head">
                                                <h5>Memory</h5>
                                            </div>
                                            <div className="p_head">
                                                <h5>Vcpus</h5>
                                            </div>
                                            <div className="p_head">
                                                <h5>Ssd disk</h5>
                                            </div>
                                            <div className="p_head">
                                                <h5>Transfer</h5>
                                            </div>
                                            <div className="p_head">
                                                <h5>Price</h5>
                                            </div>
                                            <div className="p_head c_width">
                                                    
                                            </div>
                                        </div>
                                        <div className="h_price_body">
                                            {
                                                post.priceList.map( list => {
                                                    return(
                                                        <div className="h_p_list" key={list.id}>
                                                            <div className="h_price_item memory" data-title="Memory">
                                                                <h5>{list.Memory}</h5>
                                                            </div>
                                                            <div className="h_price_item" data-title="Vcpus">
                                                                <h5>{list.Vcpus}</h5>
                                                            </div>
                                                            <div className="h_price_item" data-title="Ssd disk">
                                                                <h5>{list.Ssd}</h5>
                                                            </div>
                                                            <div className="h_price_item" data-title="Transfer">
                                                                <h5>{list.Transfer}</h5>
                                                            </div>
                                                            <div className="h_price_item" data-title="Price">
                                                                <h5><span>{list.Price}</span>{list.PriceS}</h5>
                                                            </div>
                                                            <div className="h_price_item c_width">
                                                                <h5><a href="/#" className="h_price_btn">Choose Plan</a></h5>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div> 
                                </React.Fragment>          
                            ))}
                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            {this.state.Cpu.map(post =>(
                                <React.Fragment key={post.id}>
                                    <p>{post.title}</p>
                                    <div className="h_price_body">
                                        <div className="price_head">
                                            <div className="p_head">
                                                <h5>Memory</h5>
                                            </div>
                                            <div className="p_head">
                                                <h5>Vcpus</h5>
                                            </div>
                                            <div className="p_head">
                                                <h5>Ssd disk</h5>
                                            </div>
                                            <div className="p_head">
                                                <h5>Transfer</h5>
                                            </div>
                                            <div className="p_head">
                                                <h5>Price</h5>
                                            </div>
                                            <div className="p_head c_width">
                                                    
                                            </div>
                                        </div>
                                        <div className="h_price_body">
                                            {
                                                post.priceList.map( list => {
                                                    return(
                                                        <div className="h_p_list" key={list.id}>
                                                            <div className="h_price_item memory" data-title="Memory">
                                                                <h5>{list.Memory}</h5>
                                                            </div>
                                                            <div className="h_price_item" data-title="Vcpus">
                                                                <h5>{list.Vcpus}</h5>
                                                            </div>
                                                            <div className="h_price_item" data-title="Ssd disk">
                                                                <h5>{list.Ssd}</h5>
                                                            </div>
                                                            <div className="h_price_item" data-title="Transfer">
                                                                <h5>{list.Transfer}</h5>
                                                            </div>
                                                            <div className="h_price_item" data-title="Price">
                                                                <h5><span>{list.Price}</span>{list.PriceS}</h5>
                                                            </div>
                                                            <div className="h_price_item c_width">
                                                                <h5><a href="/#" className="h_price_btn">Choose Plan</a></h5>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div> 
                                </React.Fragment>          
                            ))}
                        </div>
                        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                            {this.state.General.map(post =>(
                                <React.Fragment key={post.id}>
                                    <p>{post.title}</p>
                                    <div className="h_price_body">
                                        <div className="price_head">
                                            <div className="p_head">
                                                <h5>Memory</h5>
                                            </div>
                                            <div className="p_head">
                                                <h5>Vcpus</h5>
                                            </div>
                                            <div className="p_head">
                                                <h5>Ssd disk</h5>
                                            </div>
                                            <div className="p_head">
                                                <h5>Transfer</h5>
                                            </div>
                                            <div className="p_head">
                                                <h5>Price</h5>
                                            </div>
                                            <div className="p_head c_width">
                                                    
                                            </div>
                                        </div>
                                        <div className="h_price_body">
                                            {
                                                post.priceList.map( list => {
                                                    return(
                                                        <div className="h_p_list" key={list.id}>
                                                            <div className="h_price_item memory" data-title="Memory">
                                                                <h5>{list.Memory}</h5>
                                                            </div>
                                                            <div className="h_price_item" data-title="Vcpus">
                                                                <h5>{list.Vcpus}</h5>
                                                            </div>
                                                            <div className="h_price_item" data-title="Ssd disk">
                                                                <h5>{list.Ssd}</h5>
                                                            </div>
                                                            <div className="h_price_item" data-title="Transfer">
                                                                <h5>{list.Transfer}</h5>
                                                            </div>
                                                            <div className="h_price_item" data-title="Price">
                                                                <h5><span>{list.Price}</span>{list.PriceS}</h5>
                                                            </div>
                                                            <div className="h_price_item c_width">
                                                                <h5><a href="/#" className="h_price_btn">Choose Plan</a></h5>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div> 
                                </React.Fragment>          
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}
export default HostingPlan;