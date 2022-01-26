import React from 'react'
import {  
    Nav, 
    NavItem, 
    NavLink, 
}
from 'reactstrap'

const Navigation = () => {
    return (  
    <Nav className="navigation-bar">
        <NavItem>
            <NavLink className="left" href="/">
                HOME
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink className="left" href="/horoscopes">
                HOROSCOPES
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink className="left" href="/about">
                ABOUT
            </NavLink>
        </NavItem>
        {/* <NavItem>
            <div className="search-container">
            <label>
                <input className="search-input" type="text" placeholder="Search..."/>
            </label>
            </div>
        </NavItem> */}
    </Nav>

    );
}

export default Navigation;

