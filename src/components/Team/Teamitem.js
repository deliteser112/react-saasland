import React, {Component} from 'react';
import FooterData from '../Footer/FooterData';

class Teamitem extends Component {
    render(){
        var {teamImage, memberN, memberd}= this.props;
        return(
            <div className="ex_team_item">
                <img src={require ("../../img/teams/" + teamImage)} alt="team"/>
                <div className="team_content">
                    <a href=".#">
                        <h3 className="f_p f_size_16 f_600 t_color3">{memberN}</h3>
                    </a>
                    <h5>web designer</h5>
                </div>
                <div className="hover_content">
                    <div className="n_hover_content">
                        <ul className="list-unstyled">
                            {
                                FooterData.socialIcon.map(item=>{
                                    return(
                                        <li key={item.id}><a href={item.url}><i className={`${item.icon}`}></i></a></li>
                                    )
                                })
                            }
                        </ul>
                        <div className="br"></div>
                        <a href=".#">
                            <h3 className="f_p f_size_16 f_600 w_color">{memberN}</h3>
                        </a>
                        <h5>{memberd}</h5>
                    </div>
                </div>
            </div>
        )
    }
}
export default Teamitem;