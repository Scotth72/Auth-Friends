import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const NavBar = (props) => {


    return (
        <div>
            <Nav pills >
                <NavItem color="light">
                    <NavLink href="#" active>Home</NavLink>
                    <NavLink href="#" active>Protected Page</NavLink>
                </NavItem>
            </Nav>
        </div>
    );
}

export default NavBar;