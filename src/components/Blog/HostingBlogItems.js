import React, { Component } from "react";

class HostingBlogItems extends Component {
    render(){
        let{blogImage, blogTitle, pDate, comments}= this.props;
        return(
            <div className="col-sm-6">
                <div className="h_blog_item">
                    <a href="/#"><img src={require ("../../img/hosting/" + blogImage)} alt="blog"/></a>
                    <div className="h_blog_content">
                        <a href="/#" className="post_time"><i className="icon_clock_alt"></i>{pDate}</a>
                        <a href="/#"><h3>{blogTitle}</h3></a>
                        <div className="post-info-bottom">
                            <a href="/#" className="learn_btn_two">Read More <i className="arrow_right"></i></a>
                            <a className="post-info-comments" href="/#">
                                <i className="icon_comment_alt" aria-hidden="true"></i>
                                <span>{comments}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default HostingBlogItems;