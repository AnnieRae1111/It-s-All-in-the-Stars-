import React, { useState } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import Hamburger from './Hamburger';
import Switch from './Switch';

const Navigation = ({ isToggled, themeToggler }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <Nav className="navigation-bar">
        <NavItem>
          <NavLink className="nav-left" href="/">
            HOME
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-left" href="/horoscopes">
            HOROSCOPES
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-left" href="/about">
            ABOUT
          </NavLink>
        </NavItem>
        <NavItem className="toggle-switch">
          <Switch
            rounded={true}
            isToggled={isToggled}
            onToggle={() => themeToggler()}
          />
        </NavItem>
        <NavItem className="hambgurger">
          <NavLink onClick={() => setShowMenu(!showMenu)}>
            <Hamburger />
          </NavLink>
        </NavItem>
      </Nav>
      {showMenu && (
        <div className="hamburger-menu">
          <NavItem>
            <NavLink className="ham-left" href="/">
              HOME
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="ham-left" href="/horoscopes">
              HOROSCOPES
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="ham-left" href="/about">
              ABOUT
            </NavLink>
          </NavItem>
        </div>
      )}
    </>
  );
};

export default Navigation;
