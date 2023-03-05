import React from 'react'
import styled from 'styled-components';

import Todo from './Todo';

const Title = styled.h5`
  font-size: 20px;
  text-align: left;
  color: black;
`;

const ListTodos = () => {
    return ( 
    <>
    <div >
        <Title>
            The todos
        </Title>
        <Todo />
        <Todo />
    </div>
    </> 
    );
}
 
export default ListTodos;