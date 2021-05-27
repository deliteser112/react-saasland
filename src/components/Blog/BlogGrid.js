import React from 'react';
import Blogrightsidebar from './Blogrightsidebar';
import BlogGridItem from './BlogGridItem';
import ServiceData from '../Service/ServiceData';
const BlogGrid =()=>{
    return(
        <section className="blog_area_two sec_pad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 blog_grid_info">
                        <div className="row">
                            <BlogGridItem date="14" month="jan" image="blog_grid_1.jpg" Title="Why I say old chap that is." description="Only a quid bobby brilliant bugger Jeffrey owt to do with me lurgy blimey.!"
                            btn="Read More" comment="3"/>
                            <BlogGridItem date="15" month="Apr" image="blog_grid_2.jpg" Title="Oxford bum bag gutted." description="Only a quid bobby brilliant bugger Jeffrey owt to do with me lurgy blimey.!"
                            btn="Read More" comment="2"/>
                            <BlogGridItem date="10" month="jan" image="blog_grid_3.jpg" Title="Kell at public school chee." description="Only a quid bobby brilliant bugger Jeffrey owt to do with me lurgy blimey.!"
                            btn="Read More" comment="3"/>
                            <BlogGridItem date="7" month="Apr" image="blog_grid_4.jpg" Title="Oxford bum bag gutted." description="Only a quid bobby brilliant bugger Jeffrey owt to do with me lurgy blimey.!"
                            btn="Read More" comment="2"/>
                            <BlogGridItem date="14" month="jan" image="blog_grid_5.jpg" Title="Why I say old chap that is." description="Only a quid bobby brilliant bugger Jeffrey owt to do with me lurgy blimey.!"
                            btn="Read More" comment="3"/>
                            <BlogGridItem date="15" month="Apr" image="blog_grid_6.jpg" Title="Oxford bum bag gutted." description="Only a quid bobby brilliant bugger Jeffrey owt to do with me lurgy blimey.!"
                            btn="Read More" comment="2"/>
                            <BlogGridItem date="10" month="jan" image="blog_grid_7.jpg" Title="Kell at public school chee." description="Only a quid bobby brilliant bugger Jeffrey owt to do with me lurgy blimey.!"
                            btn="Read More" comment="3"/>
                            <BlogGridItem date="7" month="Apr" image="blog_grid_8.jpg" Title="Oxford bum bag gutted." description="Only a quid bobby brilliant bugger Jeffrey owt to do with me lurgy blimey.!"
                            btn="Read More" comment="2"/>
                        </div>
                        <ul className="list-unstyled page-numbers shop_page_number text-left mt_30">
                            <li><span aria-current="page" className="page-numbers current">1</span></li>
                            <li><a className="page-numbers" href=".#">2</a></li>
                            <li><a className="next page-numbers" href=".#"><i className="ti-arrow-right"></i></a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4">
                        <Blogrightsidebar ServiceData={ServiceData}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default BlogGrid;