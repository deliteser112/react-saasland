import React, {Component} from 'react'; 

class Funfact extends Component{
    render(){
        var {fclass, manImg, tClass,ftitle,fdescription,CnumberOne,CnumberTwo} = this.props;
        return(
            <section className={`fun_fact_area ${fclass}`}>
                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-7 col-md-6">
                            <div className="fact_author_img fact_author_img_two text-right">
                                <div className="square_box box_three"></div>
                                <div className="square_box box_four"></div>
                                <img className="wow fadeInUp" data-wow-delay="0.3s" src={require ("../img/" + manImg)} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <div className="fun_fact_content">
                                <h1 className={`f_p f_700 mb_20 ${tClass}`}>{ftitle}</h1>
                                <p className="f_400 f_size_15 l_height28 mb_40">{fdescription}</p>
                                <div className="d-flex">
                                    <div className="fact_item">
                                        <h1 className={`${tClass}`}><span>{CnumberOne}</span>M+</h1>
                                        <p className="mb-0">Users <br/>trust our tools</p>
                                    </div>
                                    <div className="fact_item pl_100">
                                        <h1 className={`${tClass}`}><span>{CnumberTwo}</span>K</h1>
                                        <p className="mb-0">Join <br/>every month</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Funfact;
