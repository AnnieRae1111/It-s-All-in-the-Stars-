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
            <NavLink clsasName="left">
                ABOUT
            </NavLink>
        </NavItem>
    </Nav>

    );
}

export default Navigation;

