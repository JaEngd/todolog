import React from 'react'
import styled from 'styled-components';
import { FaCheckCircle } from 'react-icons/fa';

const Description = styled.p`
  font-size: 15px;
  text-align: left;
  color: black;
`;

export const CheckIcon = styled(FaCheckCircle)`
  color: white;
`

export const StyledButton = styled.button`
  background-color: #244b5c;
  color: white;
  padding: 10px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`

const Todo = () => {
    return ( 
    <>
        <div>
            <div>
                <Description>
                    Learn React
                </Description>
                <Description>
                    Author: Jacob
                </Description>
                <Description>
                    Added: 4 days ago
                </Description>

                <StyledButton type="submit">
                    <CheckIcon />   
                </StyledButton>
            </div>
        </div>
    </> 
    );
}
 
export default Todo;