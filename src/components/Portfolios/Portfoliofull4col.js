import React, {Component} from 'react';
import Isotope from 'isotope-layout/js/isotope';
import ImagesLoaded from 'imagesloaded/imagesloaded';
import Portfolio2griditem from './Portfolio2griditem';

class Portfoliofull4col extends Component{
    state = {
        activeItem: '*',
    }
    
    componentDidMount() {
        var imgLoad = new ImagesLoaded('#work-portfolio');
    
        imgLoad.on('progress', function(instance, image) {
            this.iso = new Isotope('#work-portfolio', {
                itemSelector: '.portfolio_item',
                layoutMode: "masonry"
            });
        }); 
        
    }
    onFilterChange = (newFilter) => {
        
        this.setState({activeItem: newFilter});
        if (this.iso === undefined) {
            this.iso = new Isotope('#work-portfolio', {
            itemSelector: '.portfolio_item',
            layoutMode: "masonry"
            });
        }
    
    // this.iso.arrange({ filter: newFilter });
        
      if(newFilter === '*') {
        this.iso.arrange({ filter: `*` });
      } else {
        this.iso.arrange({ filter: `.${newFilter}` });
      }
    }

    onActive = v => v === this.state.activeItem ? 'active' : '';

    render(){
        return(
            <section className="portfolio_fullwidth_area bg_color">
                <div className="container-fluid pl-0 pr-0">
                    <div id="portfolio_filter" className="portfolio_filter mb_50">
                        <div data-filter="*" className={`work_portfolio_item ${this.onActive('*')}`} onClick={() => {this.onFilterChange("*")}}>All</div>
                        <div data-filter="brand" className={`work_portfolio_item ${this.onActive('web')}`} onClick={() => {this.onFilterChange("brand")}}>Branding</div>
                        <div data-filter="develop" className={`work_portfolio_item ${this.onActive('develop')}`} onClick={() => {this.onFilterChange("develop")}}>Development</div>
                        <div data-filter="web" className={`work_portfolio_item ${this.onActive('web')}`} onClick={() => {this.onFilterChange("web")}}>Web Design</div>
                        <div data-filter="fashion" className={`work_portfolio_item ${this.onActive('fashion')}`} onClick={() => {this.onFilterChange("fashion")}}>Fashion</div>
                        <div data-filter="ux" className={`work_portfolio_item ${this.onActive('ux')}`} onClick={() => {this.onFilterChange("ux")}}>UI/UX</div>
                        <div data-filter="product" className={`work_portfolio_item ${this.onActive('product')}`} onClick={() => {this.onFilterChange("product")}}>Product</div>
                    </div>
                    <div className="row portfolio_gallery ml-0 mr-0" id="work-portfolio">
                        <Portfolio2griditem colClass="col-lg-3 mb-0 p0 col-sm-6 web fashion" pImg="full-width/full_1.jpg" ptitle="Apple Mobile Mockup" tOne="Web" tTwo="Fashion"/>
                        <Portfolio2griditem colClass="col-lg-3 mb-0 p0 col-sm-6 develop" pImg="full-width/full_2.jpg" ptitle="Interior Design" tOne="Develop"/>
                        <Portfolio2griditem colClass="col-lg-3 mb-0 p0 col-sm-6 web" pImg="full-width/full_3.jpg" ptitle="Portfolio Center Slider" tOne="Web" tTwo="Fashion"/>
                        <Portfolio2griditem colClass="col-lg-3 mb-0 p0 col-sm-6 fashion" pImg="full-width/full_4.jpg" ptitle="Portfolio Masonry" tOne="fashion"/>
                        <Portfolio2griditem colClass="col-lg-3 mb-0 p0 col-sm-6 ux brand" pImg="full-width/full_5.jpg" ptitle="Double Exposure" tOne="UX" tTwo="Brand"/>
                        <Portfolio2griditem colClass="col-lg-3 mb-0 p0 col-sm-6 product" pImg="full-width/full_6.jpg" ptitle="American Burger" tOne="Product" />
                        <Portfolio2griditem colClass="col-lg-3 mb-0 p0 col-sm-6 develop fashion" pImg="full-width/full_7.jpg" ptitle="Double Exposure" tOne="Develop" tTwo="Fashion"/>
                        <Portfolio2griditem colClass="col-lg-3 mb-0 p0 col-sm-6 brand ux" pImg="full-width/full_8.jpg" ptitle="Inner Smart Watch" tOne="Brand" tTwo="UX"/>
                        <Portfolio2griditem colClass="col-lg-3 mb-0 p0 col-sm-6 brand web" pImg="full-width/full_9.jpg" ptitle="Portfolio Masonry" tOne="Brand" tTwo="UX"/>
                        <Portfolio2griditem colClass="col-lg-3 mb-0 p0 col-sm-6 develop" pImg="full-width/full_10.jpg" ptitle="Interior Design" tOne="Develop"/>
                        <Portfolio2griditem colClass="col-lg-3 mb-0 p0 col-sm-6 fashion" pImg="full-width/full_11.jpg" ptitle="Portfolio Masonry" tOne="fashion"/>
                        <Portfolio2griditem colClass="col-lg-3 mb-0 p0 col-sm-6 develop fashion" pImg="full-width/full_12.jpg" ptitle="Double Exposure" tOne="Develop" tTwo="Fashion"/>
                    </div>
                </div>
            </section>  
        )
    }
}
export default Portfoliofull4col;
