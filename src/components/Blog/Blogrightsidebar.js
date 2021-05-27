import React, {Component} from 'react';

class Blogrightsidebar extends Component{
    render(){
        let ServiceData = this.props.ServiceData;
        return(
            <div className="blog-sidebar">
                <div className="widget sidebar_widget widget_search">
                    <form action="#" className="search-form input-group">
                        <input type="search" className="form-control widget_input" placeholder="Search"/>
                        <button type="submit"><i className="ti-search"></i></button>
                    </form>
                </div>
                <div className="widget sidebar_widget widget_recent_post mt_60">
                    <div className="widget_title">
                        <h3 className="f_p f_size_20 t_color3">Recent posts</h3>
                        <div className="border_bottom"></div>
                    </div>
                    {
                        ServiceData.rpost.map(post=>{
                            return(
                                <div className="media post_item" key={post.id}>
                                    <img src={require('../../img/' + post.image)} alt=""/>
                                    <div className="media-body">
                                        <a href=".#">
                                            <h3 className="f_size_16 f_p f_400">{post.ptitle}</h3>
                                        </a>
                                        <div className="entry_post_info">
                                            By: <a href=".#">{post.admin}</a>
                                            <a href=".#">{post.date}</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="widget sidebar_widget widget_categorie mt_60">
                    <div className="widget_title">
                        <h3 className="f_p f_size_20 t_color3">Categories</h3>
                        <div className="border_bottom"></div>
                    </div>
                    <ul className="list-unstyled">
                        <li> <a href=".#"><span>Fashion</span><em>(54)</em></a> </li>
                        <li> <a href=".#"><span>Food for thought</span><em>(83)</em></a> </li>
                        <li> <a href=".#"><span>Gaming</span><em>(96)</em></a> </li>
                        <li> <a href=".#"><span>Music</span><em>(38)</em></a> </li>
                        <li> <a href=".#"><span>Uncategorized</span><em>(44)</em></a> </li>
                        <li> <a href=".#"><span>SaasLand</span><em>(44)</em></a> </li>
                        <li> <a href=".#"><span>Project Management</span><em>(44)</em></a> </li>
                        <li> <a href=".#"><span>Wireframing</span><em>(44)</em></a> </li>
                    </ul>
                </div>
                <div className="widget sidebar_widget widget_tag_cloud mt_60">
                    <div className="widget_title">
                        <h3 className="f_p f_size_20 t_color3">Tags</h3>
                        <div className="border_bottom"></div>
                    </div>
                    <div className="post-tags">
                        <a href=".#">SaasLand</a>
                        <a href=".#">Web Design</a>
                        <a href=".#">Saas</a>
                        <a href=".#">Cooling System</a>
                        <a href=".#">Corporate</a>
                        <a href=".#">Software</a>
                        <a href=".#">Landing</a>
                        <a href=".#">Wheels</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Blogrightsidebar;