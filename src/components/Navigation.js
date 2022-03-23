import React from 'react'
import {  
    Nav, 
    NavItem, 
    NavLink, 
    Button,
}
from 'reactstrap'

const Navigation = ({theme, themeToggler}) => {
    return (  
    <>
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
         <Button id="change-theme-button" onClick={()=>themeToggler()}>Change Theme</Button>
    </Nav>
    
    </>

    );
}

export default Navigation;

