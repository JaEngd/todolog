import React from 'react'
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa'

import { Link } from "react-router-dom"

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #c0d6e4;
`;

const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  background-color: #133b61;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #c0d6e4;
  border-radius: 3px;
  display: block;
`;

const PrimaryNav = styled.nav`
  z-index: 14;
  height: 90px;
  display: flex;
  background: #244b5c;
  justify-content: space-between;
  padding: 0.18rem calc((100vw - 1000px) / 2);
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
                <Menu>
                    <MenuLink to="/">
                        <Title>
                            TodosApp
                        </Title>
                    </MenuLink>
                </Menu>
                <Button
                    
                    >SignOut
                </Button>
                <Button>
                    <MenuLink to="/signin">
                        SignIn
                    </MenuLink>
                </Button>
                <Button>
                    <MenuLink to="/signup">
                        SignUp
                    </MenuLink>
                </Button>
            </PrimaryNav>
        </> 
    );
}
 
export default NavBar;