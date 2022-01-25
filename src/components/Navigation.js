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
            <NavLink className="left" href="/home">
                HOME
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink clsasName="left" href="/horoscopes">
                HOROSCOPES
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink clsasName="left" href="/about">
                ABOUT
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink clsasName="left" href="/contact">
                CONTACT
            </NavLink>
        </NavItem>
    </Nav>

    );
}

export default Navigation;

