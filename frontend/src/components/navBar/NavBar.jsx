import React from 'react'
import styled from 'styled-components';

import { Link } from "react-router-dom"

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;

const NavBar = () => {
    return ( 
    <>
        <StyledLink to="/">
            TodosApp
        </StyledLink>
    </> 
    );
}
 
export default NavBar;