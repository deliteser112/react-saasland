import React, {Component} from 'react';
import VisibilitySensor from "react-visibility-sensor";
import { CircularProgressbar, buildStyles  } from "react-circular-progressbar/";
import "react-circular-progressbar/dist/styles.css";
import Reveal from 'react-reveal';

class Cprogress extends Component{
    render(){
        return(
            <section className="progress_bar_area">
                <div className="container">
                    <div className="sec_title mb_70 wow fadeInUp" data-wow-delay="0.4s">
                        <h2 className="f_p f_size_30 l_height40 f_600 t_color text-center">Measure and increase <br/> your reach</h2>
                    </div>
                    <Reveal bottom cascade duration={1200}>
                    <div className="row">
                        <div className="col-lg-3 col-md-4 progress_item">
                            <VisibilitySensor  partialVisibility>
                                {({ isVisible }) => {
                                const percentage = isVisible ? 60 : 0;
                                return (
                                    <CircularProgressbar
                                    value={percentage}
                                    text={`${percentage}%`}
                                    strokeWidth={5}
                                    styles={buildStyles({
                                        rotation: 0,
                                        textSize: '20px',
                                        pathTransitionDuration: 1,
                                        pathColor: '#aa6ffa',
                                        textColor: '#051441',
                                        trailColor: '#f1f1fa',
                                    })}
                                    />
                                );
                                }}
                            </VisibilitySensor>
                            <h4>Innovations</h4>
                            <p>Charles Jeffrey up the kyver loo in my flat blimey.!</p>
                        </div>
                        <div className="col-lg-3 col-md-4 progress_item">
                            <VisibilitySensor>
                                {({ isVisible }) => {
                                    const percentage = isVisible ? 82 : 0;
                                    return (
                                        <CircularProgressbar
                                        value={percentage}
                                        text={`${percentage}%`}
                                        strokeWidth={5}
                                        styles={buildStyles({
                                            rotation: 0,
                                            textSize: '20px',
                                            pathTransitionDuration: 1,
                                            pathColor: '#f3af4e',
                                            textColor: '#051441',
                                            trailColor: '#f1f1fa',
                                        })}
                                        />
                                    );
                                }}
                            </VisibilitySensor>
                            <h4>Great Tests</h4>
                            <p>Charles Jeffrey up the kyver loo in my flat blimey.!</p>
                        </div>
                        <div className="col-lg-3 col-md-4 progress_item">
                            <VisibilitySensor>
                                {({ isVisible }) => {
                                    const percentage = isVisible ? 92 : 0;
                                    return (
                                        <CircularProgressbar
                                        value={percentage}
                                        text={`${percentage}%`}
                                        strokeWidth={5}
                                        styles={buildStyles({
                                            rotation: 0,
                                            textSize: '20px',
                                            pathTransitionDuration: 1,
                                            pathColor: '#fa6fd1',
                                            textColor: '#051441',
                                            trailColor: '#f1f1fa',
                                        })}
                                        />
                                    );
                                }}
                            </VisibilitySensor>
                            <h4>Big Projects</h4>
                            <p>Charles Jeffrey up the kyver loo in my flat blimey.!</p>
                        </div>
                        <div className="col-lg-3 col-md-4 progress_item">
                            <VisibilitySensor>
                                {({ isVisible }) => {
                                    const percentage = isVisible ? 52 : 0;
                                    return (
                                        <CircularProgressbar
                                        value={percentage}
                                        text={`${percentage}%`}
                                        strokeWidth={5}
                                        styles={buildStyles({
                                            rotation: 0,
                                            textSize: '20px',
                                            pathTransitionDuration: 1,
                                            pathColor: '#6fadfa',
                                            textColor: '#051441',
                                            trailColor: '#f1f1fa',
                                        })}
                                        />
                                    );
                                }}
                            </VisibilitySensor>
                            <h4>Action Plans</h4>
                            <p>Charles Jeffrey up the kyver loo in my flat blimey.!</p>
                        </div>
                    </div>
                    </Reveal>
                    <div className="br_bottom"></div>
                </div>          
            </section>
            
        )
    }
}
export default Cprogress;

