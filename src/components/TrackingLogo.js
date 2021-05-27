import React, {Component} from 'react';

class TrackingLogo extends Component {
    constructor(){
        super();
        this.state = {
            clientsLogo: [
                {
                    id: 1,
                    url: '#',
                    col: "col-lg-2 col-md-3 col-4",
                    image: 'apple.png',
                },
                {
                    id: 2,
                    url: '#',
                    col: "col-lg-1 col-md-3 col-4",
                    image: 'windows.png',
                },
                {
                    id: 3,
                    url: '#',
                    col: "col-lg-1 col-md-3 col-4",
                    image: 'google.png',
                },
                {
                    id: 4,
                    url: '#',
                    col: "col-lg-3 col-md-3 col-sm-4 col-6",
                    image: 'tesla.png',
                },
                {
                    id: 5,
                    url: '#',
                    col: "col-lg-3 col-md-3 col-sm-4 col-6",
                    image: 'amazon.png',
                },
                {
                    id: 6,
                    url: '#',
                    col: "col-lg-2 col-md-3 col-sm-4 col-6",
                    image: 'aliexpress.png',
                }
            ]
        }
    }
    render(){
        return(
            <div className="row tracking_software_logo">
                {
                    this.state.clientsLogo.map(item=>(
                        <div className={item.col} key={item.id}>
                            <a href={item.url}><img src={require ("../img/home-tracking/" + item.image)}alt=""/></a>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default TrackingLogo;