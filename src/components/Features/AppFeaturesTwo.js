import React, {Component} from 'react';
import Plx from "react-plx";
import Reveal from "react-reveal"

class AppFeaturesTwo extends Component{
    render(){
        const exampleParallaxData = [
              {
                start: 700,
                duration: 100,
                properties: [
                  {
                    startValue: -100,
                    endValue: -20,
                    property: "translateY"
                  },
                  {
                    startValue: 1,
                    endValue: 20,
                    property: "translateX"
                  },
                  {
                    startValue: 0,
                    endValue: 20,
                    property: "translate"
                  },
                  {
                    startValue: 0,
                    endValue: 2,
                    property: "translateY"
                  }
                ]
              }
          ];
          const exampleParallaxDatas = [
              {
                start: 700,
                duration: 100,
                properties: [
                  {
                    startValue: 100,
                    endValue: 30,
                    property: "translateY"
                  },
                  {
                    startValue: 1.5,
                    endValue: -20,
                    property: "translateX"
                  },
                  {
                    startValue: 0,
                    endValue: 20,
                    property: "translate"
                  },
                  {
                    startValue: 0,
                    endValue: 5,
                    property: "translateY"
                  }
                ]
              }
          ];
        return(
            <section className="app_featured_area" id="features">
                <div className="container">
                    <div className="row flex-row-reverse app_feature_info">
                        <div className="col-lg-6">
                            <div className="app_fetured_item">
                                <Plx className="app_item item_one" parallaxData={exampleParallaxData}>
                                    <i className="ti-face-smile f_size_40 w_color"></i>
                                    <h6 className="f_p f_400 f_size_16 w_color l_height45">Community</h6>
                                </Plx>
                                <Plx className="app_item item_two"  parallaxData={exampleParallaxDatas}>
                                    <i className="ti-receipt f_size_40 w_color"></i>
                                    <h6 className="f_p f_400 f_size_16 w_color l_height45">Honest pricing</h6>
                                </Plx>
                                <div className="app_item item_three" data-parallax='{"x": 50, "y": 10}'>
                                    <i className="ti-face-smile f_size_40 w_color"></i>
                                    <h6 className="f_p f_400 f_size_16 w_color l_height45">Management</h6>
                                </div>
                                <div className="app_item item_four" data-parallax='{"x": -20, "y": 50}'>
                                    <i className="ti-tablet f_size_40 w_color"></i>
                                    <h6 className="f_p f_400 f_size_16 w_color l_height45">Mobile Design</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                          <Reveal bottom cascade>
                              <div className="app_featured_content">
                                <h2 className="f_p f_size_30 f_700 t_color3 l_height45 pr_70 mb-30">Inspired design for the digital app landing</h2>
                                <p className="f_400">Bender cobblers chap grub sloshed up the duff I fantastic owt to do with me at public school, James Bond chip shop chancer my lady gormless brilliant the full monty lavatory, buggered loo horse play cracking goal butty young delinquent zonked no biggie.!</p>
                                <a href=".#" className="learn_btn_two">See All Featureds <i className="ti-arrow-right"></i></a>
                              </div>
                          </Reveal>
                            
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default AppFeaturesTwo;