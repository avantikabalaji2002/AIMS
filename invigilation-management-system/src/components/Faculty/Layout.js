import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./styles";


const Layout = () => {
  return (
    <>
      <Nav>
        <NavMenu>
        <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/Ticket" activeStyle>
            Ticket
          </NavLink>
          <NavLink to="/TimeTable" activeStyle>
            TimeTable
          </NavLink>
          <NavLink to="/Leave" activeStyle>
            Leave
          </NavLink>
          <NavLink to="/Logout" activeStyle>
            Logout
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Layout;