import React, { useState } from 'react'
import styled from 'styled-components'
const Selector = ({setError, Error, SelectedNum, setSelectedNum}) => {
  const Number = [1,2,3,4,5,6];

  const numberSelectorHandler = (value) =>{
    setSelectedNum(value)
    setError("")
  }

  return (
    <Container>
      <p className='error'>{Error}</p>
      <div className='flex'>
        {Number.map((value, i) =>(
          <Box 
          isSelected={value === SelectedNum} 
          key={i}         
          onClick={() => numberSelectorHandler(value)}
          >
           {value}
          </Box>
        ))}
      </div>
      <p>Selected Number</p>
    </Container>
  )
}

export default Selector;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

 .flex{
    display: flex;
    gap: 24px;
  }
  p{
    font-size: 24px;
    font-weight: 700px;
  }  
  .error{
    color: red;
  }  
`;

const Box = styled.div`
 height: 72px;
 width: 72px;
 border: 1px solid black;
 display: grid;
 place-items: center;
 font-size: 24px;
 font-weight: 700;
 background-color: ${(props) => (props.isSelected ? "black" : "white")};
 color: ${(props) => (props.isSelected ? "white" : "black")};
`;