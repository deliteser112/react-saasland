import React from 'react';
import Sectitle from "../Title/Sectitle";
import Tabitem from "./TabItem";

const CloudServiceTab =()=>{
    return(
        <section className="software_service_area sec_pad">
            <div className="container">
                <Sectitle Title="Seamlessly go from deploying to scaling." TitleP="Tickety-boo cheers plastered twit chimney pot off his nut hotpot spend a penny have it, so I said squiffy A bit of how's your father."
                 sClass="sec_title text-center mb_70"/>
                <div className="row">
                    <div className="col-lg-3 col-md-3">
                        <ul className="nav nav-tabs software_service_tab" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="de-tab" data-toggle="tab" href="#de" role="tab" aria-controls="de" aria-selected="true">Deploy</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="saas-tab" data-toggle="tab" href="#saas" role="tab" aria-controls="saas" aria-selected="false">SaasLand</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="ma-tab" data-toggle="tab" href="#ma" role="tab" aria-controls="ma" aria-selected="true">Manage</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="secure-tab" data-toggle="tab" href="#secure" role="tab" aria-controls="secure" aria-selected="false">Secure</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="scale-tab" data-toggle="tab" href="#scale" role="tab" aria-controls="scale" aria-selected="true">Scale</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="monitor-tab" data-toggle="tab" href="#monitor" role="tab" aria-controls="monitor" aria-selected="false">Monitor</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-9 col-md-9">
                        <div className="tab-content software_service_tab_content">
                            <div className="tab-pane fade show active" id="de" role="tabpanel" aria-labelledby="de-tab">
                                <div className="row">
                                    <Tabitem ticon="ti-user" text="Team Management" description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                                    <Tabitem colClass="offset-lg-2" ticon="ti-basketball" text="Global Availability" description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                                    <Tabitem ticon="ti-face-smile" text="Cluster Deployments" description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                                    <Tabitem colClass="offset-lg-2" ticon="ti-harddrives" text="Backups & Snapshots" description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="saas" role="tabpanel" aria-labelledby="saas-tab">
                                <div className="row">
                                    <Tabitem ticon="ti-face-smile" text="Cluster Deployments" description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                                    <Tabitem colClass="offset-lg-2" ticon="ti-harddrives" text="Backups & Snapshots" description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                                    <Tabitem ticon="ti-user" text="Team Management" description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                                    <Tabitem colClass="offset-lg-2" ticon="ti-basketball" text="Global Availability" description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="ma" role="tabpanel" aria-labelledby="ma-tab">
                                <div className="row">
                                    <Tabitem ticon="ti-user" text="Team Management" description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                                    <Tabitem colClass="offset-lg-2" ticon="ti-basketball" text="Global Availability" description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                                    <Tabitem ticon="ti-face-smile" text="Cluster Deployments" description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                                    <Tabitem colClass="offset-lg-2" ticon="ti-harddrives" text="Backups & Snapshots" description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="secure" role="tabpanel" aria-labelledby="secure-tab">
                                <div className="row">
                                    <Tabitem ticon="ti-user" text="Team Management" description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                                    <Tabitem colClass="offset-lg-2" ticon="ti-basketball" text="Global Availability" description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                                    <Tabitem ticon="ti-face-smile" text="Cluster Deployments" description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                                    <Tabitem colClass="offset-lg-2" ticon="ti-harddrives" text="Backups & Snapshots" description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="scale" role="tabpanel" aria-labelledby="scale-tab">
                                <div className="row">
                                    <Tabitem ticon="ti-user" text="Team Management" description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                                    <Tabitem colClass="offset-lg-2" ticon="ti-face-smile" text="Cluster Deployments" description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                                    <Tabitem ticon="ti-harddrives" text="Backups & Snapshots" description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                                    <Tabitem colClass="offset-lg-2" ticon="ti-basketball" text="Global Availability" description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="monitor" role="tabpanel" aria-labelledby="monitor-tab">
                                <div className="row">
                                    <Tabitem ticon="ti-user" text="Team Management" description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                                    <Tabitem colClass="offset-lg-2" ticon="ti-basketball" text="Global Availability" description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                                    <Tabitem ticon="ti-face-smile" text="Cluster Deployments" description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                                    <Tabitem colClass="offset-lg-2" ticon="ti-harddrives" text="Backups & Snapshots" description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CloudServiceTab;