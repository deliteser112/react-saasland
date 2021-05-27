import React, {Component} from 'react';
import Isotope from 'isotope-layout/js/isotope';
import ImagesLoaded from 'imagesloaded/imagesloaded';
import Portfolio2griditem from './Portfolio2griditem';

class Portfolio2grid extends Component{
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
            <section className="portfolio_area sec_pad bg_color">
                <div className="container">
                    <div id="portfolio_filter" className="portfolio_filter mb_50">
                        <div data-filter="*" className={`work_portfolio_item ${this.onActive('*')}`} onClick={() => {this.onFilterChange("*")}}>All</div>
                        <div data-filter="brand" className={`work_portfolio_item ${this.onActive('web')}`} onClick={() => {this.onFilterChange("brand")}}>Branding</div>
                        <div data-filter="develop" className={`work_portfolio_item ${this.onActive('develop')}`} onClick={() => {this.onFilterChange("develop")}}>Development</div>
                        <div data-filter="web" className={`work_portfolio_item ${this.onActive('web')}`} onClick={() => {this.onFilterChange("web")}}>Web Design</div>
                        <div data-filter="fashion" className={`work_portfolio_item ${this.onActive('fashion')}`} onClick={() => {this.onFilterChange("fashion")}}>Fashion</div>
                        <div data-filter="ux" className={`work_portfolio_item ${this.onActive('ux')}`} onClick={() => {this.onFilterChange("ux")}}>UI/UX</div>
                        <div data-filter="product" className={`work_portfolio_item ${this.onActive('product')}`} onClick={() => {this.onFilterChange("product")}}>Product</div>
                    </div>
                    <div className="row portfolio_gallery mb_30" id="work-portfolio">
                        <Portfolio2griditem colClass="col-lg-6 web fashion" pImg="2-columns/grid1.jpg" ptitle="Apple Mobile Mockup" tOne="Web" tTwo="Fashion"/>
                        <Portfolio2griditem colClass="col-lg-6 develop" pImg="2-columns/grid2.jpg" ptitle="Interior Design" tOne="Develop"/>
                        <Portfolio2griditem colClass="col-lg-6 web" pImg="2-columns/grid3.jpg" ptitle="Portfolio Center Slider" tOne="Web" tTwo="Fashion"/>
                        <Portfolio2griditem colClass="col-lg-6 fashion" pImg="2-columns/grid4.jpg" ptitle="Portfolio Masonry" tOne="fashion"/>
                        <Portfolio2griditem colClass="col-lg-6 ux brand" pImg="2-columns/grid5.jpg" ptitle="Double Exposure" tOne="UX" tTwo="Brand"/>
                        <Portfolio2griditem colClass="col-lg-6 product" pImg="2-columns/grid6.jpg" ptitle="American Burger" tOne="Product" />
                        <Portfolio2griditem colClass="col-lg-6 develop fashion" pImg="2-columns/grid7.jpg" ptitle="Double Exposure" tOne="Develop" tTwo="Fashion"/>
                        <Portfolio2griditem colClass="col-lg-6 brand ux" pImg="2-columns/grid8.jpg" ptitle="Inner Smart Watch" tOne="Brand" tTwo="UX"/>
                    </div>
                </div>
            </section>
        )
    }
}
export default Portfolio2grid;