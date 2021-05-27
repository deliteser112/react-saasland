import React , {Component} from 'react';
import Sectitle from './Title/Sectitle';

class HostingMap extends Component {
    constructor(){
        super();
        this.state= {
            Map:[
                {
                    id: 1,
                    countryName: 'Singapore',
                },
                {
                    id: 2,
                    countryName: 'Toronto, Canada',
                },
                {
                    id: 3,
                    countryName: 'Bursa, Turcja',
                },
                {
                    id: 4,
                    countryName: 'Bangalore, India',
                },
                {
                    id: 5,
                    countryName: 'Dingxi, Chiny',
                },
                {
                    id: 6,
                    countryName: 'New York, USA',
                },
                {
                    id: 7,
                    countryName: 'Frankfurt, Germany',
                },
                {
                    id: 8,
                    countryName: 'Karaa, Kambodza',
                }
            ]
        }
    }
    render(){
        return(
            <section className="h_map_area">
                <div className="container">
                    <Sectitle Title="Service your customers around the world from 15 regions." TitleP="The full monty burke posh excuse my French Richard cheeky bobby spiffing crikey Why gormless, pear shaped.!" sClass="hosting_title text-center"/>
                    <div className="h_map">
                        <ul className="list-unstyled">
                            {
                                this.state.Map.map(item=>(
                                    <li className="wow fadeIn" data-wow-delay="0.1s" key={item.id}>
                                        <div className="place_name wow fadeInUp" data-wow-delay="0.2s">{item.countryName}</div>
                                        <div className="round"><div className="dot"></div></div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                </div>
            </section>
        )
    }
}
export default HostingMap;