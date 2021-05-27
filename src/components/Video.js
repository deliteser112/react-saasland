import React from 'react';
import Sectitle from '../components/Title/Sectitle';

const video = () => {
    return(
        <section className="video_area bg_color sec_pad">
            <div className="container">
                <Sectitle Title="Your enterprise carrier in the Cloud" TitleP="WShow off show off pick your nose and blow off Elizabeth grub haggle dropped a clanger cracking.!" tClass="t_color3" sClass="sec_title text-center mb_70"/>
                <div className="video_content">
                    <div className="video_info">
                        <div className="ovarlay_color"></div>
                        <a className="popup-youtube video_icon" href="https://www.youtube.com/watch?v=sU3FkzUKHXU"><i className="arrow_triangle-right"></i></a>
                        <h2>SaasLand</h2>
                    </div>
                    <img className="video_leaf" src={require('../img/new/leaf.png')} alt=""/>
                    <img className="cup" src={require('../img/new/cup.png')} alt=""/>
                </div>
            </div>
        </section>
    )
}

export default video;
