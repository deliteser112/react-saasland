import React, {Component} from 'react';

class Sectiontitle extends Component {
    render(){
        var {Title, TitleP} = this.props;
        return(
            <div className="section_title text-center mb_60">
                <h2 className="mb_0 title_h2 t_color wow fadeInUp" data-wow-delay="0.3s">{Title}</h2>
                <p className="mb_0 title_p wow fadeInUp" data-wow-delay="0.6s">{TitleP}</p>
                <span className="bottom_line wow fadeInLeft" data-wow-delay="0.9s"></span>
            </div>
        )
    }
}
export default Sectiontitle;
