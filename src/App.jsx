import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const TEMPO_FOCO = 10;
  const TEMPO_PAUSA_CURTA = 5;
  const TEMPO_PAUSA_LONGA = 15;
  const TOTAL_FOCOS_ATE_PAUSA_LONGA = 4;

  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TEMPO_FOCO);
  const [modo, setModo] = useState("foco");
  const [focosConcluidos, setFocosConcluidos] = useState(0);

  function alternarTimer() {
    setIsRunning((prev) => !prev);
  }

  function formatTime(tempo) {
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;

    return `${minutos.toString().padStart(2, "0")}:${segundos
      .toString()
      .padStart(2, "0")}`;
  }

  function resetarTimer() {
    setIsRunning(false);
    setTimeLeft(TEMPO_FOCO);
    setModo("foco");
    setFocosConcluidos(0);
  }

  function avancarCiclo() {
    if (modo === "foco") {
      const novosFocosConcluidos = focosConcluidos + 1;

      if (novosFocosConcluidos === TOTAL_FOCOS_ATE_PAUSA_LONGA) {
        setModo("pausa-longa");
        setTimeLeft(TEMPO_PAUSA_LONGA);
        setFocosConcluidos(0);
      } else {
        setModo("pausa-curta");
        setTimeLeft(TEMPO_PAUSA_CURTA);
        setFocosConcluidos(novosFocosConcluidos);
      }

      return;
    }

    if (modo === "pausa-curta" || modo === "pausa-longa") {
      setModo("foco");
      setTimeLeft(TEMPO_FOCO);
    }
  }

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsRunning(false);
          avancarCiclo();
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, modo, focosConcluidos]);

  return (
    <>
      <section id="center">
        <div>
          <h1>Pomodoro</h1>
          <h2>{formatTime(timeLeft)}</h2>

          <p>Modo atual: {modo}</p>
          <p>Focos concluídos: {focosConcluidos}</p>

          <button onClick={alternarTimer}>
            {isRunning ? "Pausar" : "Iniciar"}
          </button>

          <button onClick={resetarTimer}>Resetar</button>
        </div>
      </section>
    </>
  );
}

export default App;