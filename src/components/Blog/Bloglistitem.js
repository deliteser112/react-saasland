import React, {Component} from 'react';
class Bloglistitem extends Component{
    render(){
        let ServiceData = this.props.ServiceData;
        return(
            <>
                {
                    ServiceData.Blist.map(post=>{
                        return(
                            <div className="blog_list_item mb_50"  key={post.id}>
                                <img className="img-fluid" src={require("../../img/" + post.image)} alt=""/>
                                <div className="blog_content">
                                    <div className="post_date">
                                        <h2>{post.pdate} <span>{post.Month}</span></h2>
                                    </div>
                                    <div className="entry_post_info">
                                        <a href=".#"> By: Admin</a>
                                        <a href=".#">2 Comments</a>
                                        <a href=".#">SaasLand</a>
                                    </div>
                                    <a href=".#">
                                        <h5 className="f_p f_size_20 f_500 t_color mb_20">{post.btitle}</h5>
                                    </a>
                                    <p className="f_400 mb_20">{post.bdescription}</p>
                                    <a href=".#" className="learn_btn_two">Read More <i className="ti-arrow-right"></i></a>
                                </div>
                            </div>
                        )
                    })
                }
            </>
        )
    }
}
export default Bloglistitem;