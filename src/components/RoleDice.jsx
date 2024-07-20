import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';

const RoleDice = ({roleDice, Dice}) => {

  return (
    <Container>
      <div className='dice' onClick={roleDice}>
        <img src={`/images/dice/dice_${Dice}.png`} alt="dice 1" />
      </div>
      <p>Click on Dice to roll</p>
    </Container>
  )
}

export default RoleDice;

const Container = styled.div`
 margin-top: 48px;
 display: flex;
 flex-direction: column;
 align-items: center;

 .dice{
  cursor: pointer;
 }

 p{
   font-size: 24px;
 }
 `;