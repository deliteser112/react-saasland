import React, {Component} from 'react';

class SecurityFact extends Component {
    constructor(){
        super();
        this.state={
            posts:[
                {
                    id: 1,
                    time: "7",
                    timeT: "M+",
                    description: "Users",
                    descriptionTwo: "trust our tools",
                },
                {
                    id: 2,
                    time: "100",
                    timeT: "K",
                    description: "Join",
                    descriptionTwo: "every month",
                }
            ]
        }
    }
   render(){
       let {image} = this.props;
        return(
            <section className="fun_fact_area dk_bg_two">
                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-7 col-md-6">
                            <div className="fact_author_img text-right">
                                <div className="square_box box_three"></div>
                                <div className="square_box box_four"></div>
                                <img className="wow fadeInUp" data-wow-delay="0.4s" src={require ("../img/home6/" + image)} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <div className="fun_fact_content">
                                <h1 className="w_color f_p f_700 mb_20">Trusted</h1>
                                <p className="f_400 d_p_color f_size_15 l_height28 mb_40">Why I say old chap that is spiffing barney, nancy boy bleeder chimney pot Richard cheers the little rotter so I said, easy peasy buggered blower bevvy A bit of how's your father he nicked it arse over tit. </p>
                                <div className="d-flex">
                                    {
                                        this.state.posts.map(post => (
                                            <div className="fact_item" key={post.id}>
                                                <h1 className="w_color"><span>{post.time}</span>{post.timeT}</h1>
                                                <p className="mb-0 d_p_color">{post.description}<br/>{post.descriptionTwo}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
   }
}

export default SecurityFact;