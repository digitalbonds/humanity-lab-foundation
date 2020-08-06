import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactSVG } from 'react-svg'
import logo from '../../assets/vectors/logo.svg';

const Navbar = (props) => {
    return (
        <nav className="header row auto-hide-header navbar-transparent">
            <div className="header-inner">
                <div className="logo col-xs-2 col-md-2">
                    <a href="/">
                        <ReactSVG src={ logo } style={{width:'120px'}} />
                    </a>
                </div>
                <div className="mobile-menu-btn col-sm-2 col-md-2">
                    <a href="#" className="nav-trigger">
                        <span><em aria-hidden="true"></em></span>
                    </a>
                </div>
                <div className="menu col-md-8 col-xs-10" id="menu">
                    <ul className="menu_list">
                        <li><a href="#home">home</a></li>
                        <li><a href="#aboutus">about</a></li>
                        <li><a href="#joinus">join</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;