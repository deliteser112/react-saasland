import React, {Component} from 'react';
import FooterData from '../Footer/FooterData';

class EventTeamItem extends Component {
    render(){
        let{image,name, post} = this.props;
        return(
            <div className="item">
                <div className="e_team_img">
                    <img src={require ("../../img/home-event/" + image)} alt=""/>
                    <ul className="list-unstyled">
                        {
                            FooterData.socialIcon.map(item=>{
                                return(
                                    <li key={item.id}><a href={item.url}><i className={`${item.icon}`}></i></a></li>
                                )
                            })
                        }
                    </ul>
                </div>
                <a href="/#"><h4>{name}</h4></a>
                <p>{post}</p>
            </div>
        )
    }
}

export default EventTeamItem;