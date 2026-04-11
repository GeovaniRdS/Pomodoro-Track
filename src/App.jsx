import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
export default App

function App() {

  const [isRuning, setRuning] = useState(false)
  const [timeLeft, setTimeLeft] = useState(10)

  function alterarRunning(){
    setRuning(!isRuning)
  } 
  
  function formatTime(timeLeft){
    const minutos = Math.floor(timeLeft / 60);
    const segundos = timeLeft % 60;
    return minutos.toString().padStart(2, "0") + ":" + segundos.toString().padStart(2, "0");
  }

  useEffect(() => {
    if (isRuning){
      let timer = setInterval(() => {

        if (timeLeft <= 0){
          setRuning(false)
          setTimeLeft(1500)
        }
        else {
        setTimeLeft(timeLeft - 1);
    }
  }, 1000);
      return () => clearInterval(timer)
    }
    
  }, [isRuning, timeLeft])

  return (
    <>
      <section id="center">
        <div>
          <h1>Pomodoro</h1> 
          <h2>{formatTime(timeLeft)}</h2>
          <button onClick={alterarRunning}>{isRuning ? "Pausar" : "Iniciar"}</button>
        </div>
      </section>
    </>
  )
}