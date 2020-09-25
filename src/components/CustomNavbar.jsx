import React from 'react';
import { Menu, Layout } from 'antd';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/vectors/logo.svg';

const { Header, Footer } = Layout;

const Navbar = (props) => {
    return (
        <Header >
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="0">
                <Logo className='menu-logo'/> 
            </Menu.Item>
            <Menu.Item key="1">
                <NavLink className='nav-link' to='/'>Home</NavLink>
            </Menu.Item>
            <Menu.Item key="2">
                <a target="_blank" className='nav-link' href='https://secure.givelively.org/donate/humanity-lab-foundation'>Donate</a>
            </Menu.Item>
            <Menu.Item key="3">
            <a target="_blank" className='nav-link' href='https://linktr.ee/JoinHumanityLab'>Join</a>
            </Menu.Item>
            </Menu>
        </Header>
    );
};

export default Navbar;