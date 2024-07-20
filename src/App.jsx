import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Gameplay from './components/Gameplay'

function App() {
  const [started, setStarted] = useState(false);
  const toggleGamePlay = () =>{
    setStarted((prev)=>!prev);
  }

  return (
    <>
    {started ? <Gameplay /> : <Home toggle={toggleGamePlay}/>}
    </>
  )
}

export default App
