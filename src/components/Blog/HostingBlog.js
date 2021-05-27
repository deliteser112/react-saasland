import React from 'react';
import Sectitle from '../Title/Sectitle';
import HostingBlogItems from '../Blog/HostingBlogItems';
const HostingBlog =()=> {
    return(
        <section className="h_blog_area sec_pad">
            <div className="container">
                <Sectitle Title="Our Latest News" TitleP="The full monty burke posh excuse my French Richard cheeky bobby spiffing crikey Why gormless, pear shaped.!" sClass="hosting_title text-center"/>
                <div className="row">
                    <HostingBlogItems blogImage="h_blog1.jpg" blogTitle="How To Deploy a PHP Application with Kubernetes on Ubuntu" pDate="March 20, 2019" comments="3 Comments"/>
                    <HostingBlogItems blogImage="h_blog2.jpg" blogTitle="How To Build a Node.js Application with Docker" pDate="June 20, 2019" comments="2 Comments"/>
                </div>
            </div>
        </section>
    )
}

export default HostingBlog;