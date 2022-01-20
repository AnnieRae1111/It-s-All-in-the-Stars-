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
            <NavLink href="/">
                HOME
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink>
                ABOUT
            </NavLink>
        </NavItem>
    </Nav>

    );
}

export default Navigation;

