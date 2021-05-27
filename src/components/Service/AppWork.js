import React,{Component} from 'react';
import Sectitle from '../Title/Sectitle'

class AppWork extends Component{
    render(){
        let ServiceData = this.props.ServiceData;
        return(
            <section className="app_service_area" id="work">
                <div className="container">
                    <Sectitle sClass="sec_title text-center mb_70" Title="How We Work" tClass="t_color3" TitleP="Bender cobblers chap grub sloshed up the duff I fantastic owt to do with me at public school.!"/>
                    <div className="row app_service_info">
                        {
                            ServiceData.work.map(items => {
                                return(
                                    <div className="col-lg-4"key={items.id}>
                                        <div className="app_service_item wow fadeInUp" data-wow-delay="0.2s">
                                            <i className={`app_icon ${items.icon}`}></i>
                                            <h5 className="f_p f_size_18 f_600 t_color3 mt_40 mb-30">{items.title}</h5>
                                            <p className="f_400 f_size_15 mb-30">{items.p}</p>
                                            <a href=".#" className="learn_btn_two">Learn More <i className="ti-arrow-right"></i></a>
                                        </div>
                                    </div> 
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        )
    }
}
export default AppWork;