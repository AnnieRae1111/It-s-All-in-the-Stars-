import React, { useState }from 'react'

import {  
    Nav, 
    NavItem, 
    NavLink, 
    Button,
}
from 'reactstrap'
import Hamburger from './Hamburger';
import Switch from './Switch';

const Navigation = ({isToggled,themeToggler}) => {
    const [showMenu, setShowMenu]=useState(false)

    let hamburger 
    
    if(showMenu){
    hamburger = <div>
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

    </div>
    }
        

    return (  
    <>
    <Nav className="navigation-bar">
        <NavItem className="hambgurger">
            <NavLink onClick={()=>setShowMenu(!showMenu)}><Hamburger /></NavLink>
        </NavItem>
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
        <NavItem className="toggle-switch"><Switch rounded={true} isToggled={isToggled} onToggle={()=>themeToggler()}/></NavItem>
    </Nav>
        {showMenu && 

            <div>
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

        </div>
        }
        {/* {hamburger} */}
    </>

    );
}

export default Navigation;

