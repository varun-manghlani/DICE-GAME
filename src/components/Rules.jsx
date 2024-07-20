import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <Container>
      <h2>How to play dice game</h2>
      <div className="text">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          After click on dice if selected number is equal to dice number you will get same point as dice{" "}
        </p>
        <p>
          if you get wrong guess then 2 point will be dedcuted
        </p>
      </div>
    </Container>
  )
}

export default Rules

const Container = styled.div`
  background-color: #fbf1f1;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 40px;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  h2{
   font-size: 24px;
  }
  .text{
    margin-top: 24px;
  } 
`;