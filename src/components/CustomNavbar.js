import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import Sticky from 'react-stickynode';

class CustomNavbar extends Component {
    render() {
        var {mClass, nClass, cClass, slogo, hbtnClass} =this.props;
        return (
            <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
                <header className="header_area">
                <nav className={`navbar navbar-expand-lg menu_one ${mClass}`}>
                    <div className={`container ${cClass}`}>
                        <Link className={`navbar-brand ${slogo}`} to="/">
                            <img src={require("../img/logo2.png")} alt=""/>
                            <img src={require("../img/logo.png")} alt="logo"/>
                        </Link>
                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="menu_toggle">
                                <span className="hamburger">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                                <span className="hamburger-cross">
                                    <span></span>
                                    <span></span>
                                </span>
                            </span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className={`navbar-nav menu ml-auto ${nClass}`}>
                                {/* <li className="nav-item dropdown submenu mega_menu mega_menu_two">
                                    <Link to="./" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Home
                                    </Link>
                                    <div className="mega_menu_inner">
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <ul className="dropdown-menu scroll">
                                                <li className="nav-item">
                                                    <NavLink to="/Home-chat" exact className="item">
                                                        <span className="img">
                                                            <span className="rebon_tap">New</span>
                                                            <img src={require('../img/mega-menu-img/home-chat.jpg')} alt="Prototyping Tool"/>
                                                        </span>
                                                        <span className="text">
                                                            Hoeme Chat
                                                        </span>
                                                    </NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink to="/Home-Tracking" exact className="item">
                                                        <span className="img">
                                                            <span className="rebon_tap">New</span>
                                                            <img src={require('../img/mega-menu-img/home-track.jpg')} alt="Prototyping Tool"/>
                                                        </span>
                                                        <span className="text">
                                                            Home Tracking
                                                        </span>
                                                    </NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink to="/Home-event" exact className="item">
                                                        <span className="img">
                                                            <span className="rebon_tap">New</span>
                                                            <img src={require('../img/mega-menu-img/home-event.jpg')} alt="Event"/>
                                                        </span>
                                                        <span className="text">   
                                                            Home Event
                                                        </span>
                                                    </NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink to="/Home-cloud" exact className="item">
                                                        <span className="img">
                                                            <span className="rebon_tap">New</span>
                                                            <img src={require('../img/mega-menu-img/home12.jpg')} alt="cloud"/>
                                                        </span>
                                                        <span className="text">   
                                                            Cloud Based Saas
                                                        </span>
                                                    </NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink to="/Home-ERP" exact className="item">
                                                        <span className="img">
                                                            <img src={require('../img/mega-menu-img/erp.jpg')} alt="Prototyping Tool"/>
                                                        </span>
                                                        <span className="text">
                                                            Hoeme ERP
                                                        </span>
                                                    </NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink to="/HomeHosting" exact className="item">
                                                        <span className="img">
                                                            <img src={require('../img/mega-menu-img/hosting.jpg')} alt="Prototyping Tool"/>
                                                        </span>
                                                        <span className="text">
                                                            Hoeme Hosting
                                                        </span>
                                                    </NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink to="/HomeSecurity" exact className="item">
                                                        <span className="img">
                                                            <img src={require('../img/mega-menu-img/home-security.jpg')} alt="Prototyping Tool"/>
                                                        </span>
                                                        <span className="text">
                                                            Hoeme Security
                                                        </span>
                                                    </NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink to="/home-support" exact className="item">
                                                        <span className="img">
                                                            <img src={require('../img/mega-menu-img/support.jpg')} alt="Prototyping Tool"/>
                                                        </span>
                                                        <span className="text">
                                                            Hoeme Support
                                                        </span>
                                                    </NavLink>
                                                </li>
                                                <li className="nav-item">
                                                        <NavLink to="/Landing" exact className="item">
                                                            <span className="img">
                                                                <img src={require('../img/mega-menu-img/home14.jpg')} alt="Prototyping Tool"/>
                                                            </span>
                                                            <span className="text">
                                                                App Landing (One Page)
                                                            </span>
                                                        </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="/" exact className="item">
                                                            <span className="img">
                                                                <img src={require('../img/mega-menu-img/Prototyping_Tool.jpg')} alt="Prototyping Tool"/>
                                                            </span>
                                                            <span className="text">
                                                                Prototyping Tool
                                                            </span>
                                                        </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="/Payment-processing" exact className="item">
                                                            <span className="img">
                                                                <img src={require('../img/mega-menu-img/home16.jpg')} alt=""/>
                                                            </span>
                                                            <span className="text">
                                                                Payment Processing
                                                            </span>
                                                        </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="/Startup" exact className="item">
                                                            <span className="img">
                                                                <img src={require('../img/mega-menu-img/home15.jpg')} alt=""/>
                                                            </span>
                                                            <span className="text">
                                                                Startup
                                                            </span>
                                                        </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="/Digital-marketing" className="item">
                                                            <span className="img">
                                                                <img src={require('../img/mega-menu-img/home11.jpg')} alt="Digital Marketing"/>
                                                            </span>
                                                            <span className="text">
                                                                Digital Marketing
                                                            </span>
                                                        </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="/HR-Management" className="item">
                                                            <span className="img">
                                                                <img src={require('../img/mega-menu-img/home4.jpg')} alt="HR Management"/>
                                                            </span>
                                                            <span className="text">
                                                                HR Management
                                                            </span>
                                                        </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="/Home-CRM" exact className="item">
                                                            <span className="img">
                                                                <img src={require('../img/mega-menu-img/home3.jpg')} alt="CRM Software"/>
                                                            </span>
                                                            <span className="text">
                                                                CRM Software
                                                            </span>
                                                        </NavLink>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                
                                <li className="dropdown submenu nav-item">
                                    <Link to="./" title="Pages" className="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Service</Link>
                                    <ul role="menu" className=" dropdown-menu">
                                        <li className="nav-item"><NavLink exact title="Service" className="nav-link" to='/Service'>Service</NavLink></li>
                                        <li className="nav-item"><NavLink exact title="Service Details" className="nav-link" to='/ServiceDetails'>Service Details</NavLink></li>
                                    </ul>
                                </li>
                                <li className="dropdown submenu nav-item">
                                    <Link to="./" title="Pages" className="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</Link>
                                    <ul role="menu" className=" dropdown-menu">
                                        <li className="nav-item"><NavLink exact title="About" className="nav-link" to='/About'>About</NavLink></li>
                                        <li className="nav-item"><NavLink exact title="Process" className="nav-link" to='/Process'>Process</NavLink></li>
                                        <li className="nav-item"><NavLink exact title="Team" className="nav-link" to='/Team'>Team</NavLink></li>
                                        <li className="nav-item"><NavLink exact title="Price" className="nav-link" to='/Price'>Price</NavLink></li>
                                        <li className="nav-item"><NavLink exact title="Faq" className="nav-link" to='/Faq'>Faq</NavLink></li>
                                        <li className="nav-item"><NavLink exact title="SignIn" className="nav-link" to='/SignIn'>Sign In</NavLink></li>
                                        <li className="nav-item"><NavLink exact title="SignUp" className="nav-link" to='/SignUp'>Sign Up</NavLink></li>
                                    </ul>
                                </li>
                                <li className="dropdown submenu nav-item"><Link title="Pages" className="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" to="#">Portfolio</Link>
                                    <ul role="menu" className=" dropdown-menu">
                                        <li className="nav-item"><NavLink title="Portfolio 2" className="nav-link" to='/Portfolio-2col'>Portfolio 2col</NavLink></li>
                                        <li className="nav-item"><NavLink title="Portfolio 3" className="nav-link" to='/Portfolio-3col'>Portfolio 3col</NavLink></li>
                                        <li className="nav-item"><NavLink title="Portfolio Fullwidth" className="nav-link" to='/Portfolio-fullwidth-4col'>Portfolio fullwidth</NavLink></li>
                                        <li className="nav-item"><NavLink title="PortfolioSingle" className="nav-link" to='/PortfolioSingle'>Portfolio Single</NavLink></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown submenu">
                                    <a className="nav-link dropdown-toggle" href=".#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Blog
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item"><NavLink to="/Bloglist" className="nav-link">Blog List</NavLink></li>
                                        <li className="nav-item"><NavLink to="/BlogGridPage" className="nav-link">Blog Grid</NavLink></li>
                                        <li className="nav-item"><NavLink to="/BlogSingle" className="nav-link">Blog Single</NavLink></li>
                                    </ul>
                                </li>
                                <li className="nav-item"><NavLink title="Pricing" className="nav-link" to="/Contact">Contact</NavLink></li> */}

                                <li className="nav-item"><NavLink exact title="Home" className="nav-link" to='/'>Home</NavLink></li>
                                <li className="nav-item"><NavLink exact title="Faq" className="nav-link" to='/Faq'>Faq</NavLink></li>
                            </ul>
                            <a className={`btn_get btn_hover ${hbtnClass}`} href="#get-app">Get Started</a>
                        </div>
                    </div>
                </nav>
                </header>
            </Sticky>
        );
    }
}

export default CustomNavbar;