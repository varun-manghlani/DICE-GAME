import React from 'react'
import { Score } from './Score';
import Selector from './Selector';
import styled from 'styled-components';
import RoleDice from './RoleDice';
import { useState } from 'react';
import { Button, OutlineButton } from '../styled/button';
import Rules from './Rules';

function Gameplay() {
  const [score, setScore] = useState(0);
  const [SelectedNum, setSelectedNum] = useState();
  const [Dice, setDice] = useState(1);
  const [Error, setError] = useState("")
  const [showRules, setShowRules] =useState(false);

  const RandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const roleDice = () => {
    if (!SelectedNum) {
      setError('you have not selected any number');
      return;
    }
    const randomNumber = RandomNumber(1, 7);
    setDice((prev) => randomNumber);

    if (SelectedNum == randomNumber){
      setScore((prev) => prev + randomNumber);
    }else{
      setScore((prev) => prev - 2);
    }

    setSelectedNum(undefined);
  };

  const resetScore = () => {
    setScore(0)
  }

  return (
    <Main>
      <div className='top-section'>
        <Score score={score}/>
        <Selector Error={Error} setError={setError} SelectedNum={SelectedNum} setSelectedNum={setSelectedNum}/>
      </div>
      <RoleDice Dice={Dice} roleDice={roleDice}/>
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button onClick={() => setShowRules((prev)=> !prev)}>
          {showRules ? "Hide" : "show"} Rules
        </Button>
      </div>
      {showRules && <Rules />}
    </Main>
  )
}

export default Gameplay;

const Main = styled.main`
padding-top: 70px;
 .top-section {
   display: flex;
   justify-content: space-around;
   align-items: end;
 }
 .btns{
   margin-top: 40px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 10px;
 }
`;