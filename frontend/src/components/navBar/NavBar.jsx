import React from 'react'
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa'

import { NavLink as Link } from "react-router-dom"

const Title = styled.h1`
  font-size: 30px;
  text-align: left;
  color: #c0d6e4;
`;

const PrimaryNav = styled.nav`
  z-index: 14;
  background: #244b5c;
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
`;

export const MenuLink = styled(Link)`
  color: #fff;
  display: flex;
  cursor: pointer;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  padding: 0 1.2rem;
  height: 100%;
  &.active {
    color: #000000;
  }
`
export const Hamburger = styled(FaBars)`
  display: none;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.9rem;
    top: 0;
    right: 0;
    position: absolute;
    cursor: pointer;
    transform: translate(-100%, 75%);
  }
`
export const Menu = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-right: -25px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavBar = () => {
    //const history = useHistory();

    //const handleSignOut = () => {
        //SignOut the user   
        //history.push("/signin")
    //}
    return ( 
        <>
            <PrimaryNav>
              <Hamburger />
                <Logo>
                  <MenuLink to="/">
                    <Title>
                      TodosApp
                    </Title>
                  </MenuLink>
                </Logo>
                <Menu>
                  <MenuLink to="/signout">
                    SignOut
                  </MenuLink>
                  <MenuLink to="/signin">
                    SignIn
                  </MenuLink>
                  <MenuLink to="/signup">
                    SignUp
                  </MenuLink>
                </Menu>
            </PrimaryNav>
        </> 
    );
}
 
export default NavBar;