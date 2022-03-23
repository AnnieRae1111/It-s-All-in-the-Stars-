import React, { useState }from 'react'

import {  
    Nav, 
    NavItem, 
    NavLink, 
    Button,
}
from 'reactstrap'

import Switch from './Switch';

const Navigation = ({theme,isToggled, setIsToggled, themeToggler}) => {
// const[isToggled, setIsToggled]=useState(false)

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
         {/* <Button id="change-theme-button" onToggle={()=>themeToggler()}><Switch rounded={true} isToggled={isToggled} onToggle={()=>themeToggler()}/></Button> */}
         <NavItem className="toggle-switch"><Switch rounded={true} isToggled={isToggled} onToggle={()=>themeToggler()}/></NavItem>
         {/* <Button id="change-theme-button" onClick={()=>themeToggler()}>Change Theme</Button> */}
    </Nav>
    
    </>

    );
}

export default Navigation;

