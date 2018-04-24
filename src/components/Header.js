import React from "react";
import {Link} from "react-router-dom"
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Header = (props) => {
    return (
        <Navbar fluid inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="/">Order Now</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>

            <Navbar.Collapse>
                <Nav>
                    <NavItem componentClass={Link} href="/" to="/">
                        Home
                    </NavItem>
                    
                    <NavItem componentClass={Link} href="/categories" to="/categories">
                        Categories
                    </NavItem>

                    <NavItem componentClass={Link} href="/products" to="/products">
                        Products
                    </NavItem>
                    
                    <NavItem componentClass={Link} href="/orders" to="/orders">
                        Orders
                    </NavItem>

                    <NavItem componentClass={Link} href="/about" to="/about">
                        About Me
                    </NavItem>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    );
};

export default Header;