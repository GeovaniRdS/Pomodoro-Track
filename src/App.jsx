import { useEffect, useState } from "react";
import "./App.css";

const despertador = new Audio("/AlarmClock.wav");

function App() {

  // States principais do timer
  const [tempoFoco, setTempoFoco] = useState(25 * 60);
  const [tempoPausaCurta, setTempoPausaCurta] = useState(5 * 60);
  const [tempoPausaLonga, setTempoPausaLonga] = useState(15 * 60);
  const [totalFocos, setTotalFocos] = useState(4);

  // Controla se o painel de configurações está aberto
  const [configAberta, setConfigAberta] = useState(false);

  // Valores temporários enquanto o usuário edita, antes de salvar
  const [configTemp, setConfigTemp] = useState({
    tempoFoco: 25,
    tempoPausaCurta: 5,
    tempoPausaLonga: 15,
    totalFocos: 4,
  });

  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(tempoFoco);
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
    setTimeLeft(tempoFoco);
    setModo("foco");
    setFocosConcluidos(0);
  }

  function abrirConfiguracoes() {
    setConfigAberta(!configAberta);
  }

  function salvarConfiguracoes() {
    const novoTempoFoco = configTemp.tempoFoco * 60;
    const novoPausaCurta = configTemp.tempoPausaCurta * 60;
    const novoPausaLonga = configTemp.tempoPausaLonga * 60;
    setIsRunning(false);
    setModo("foco");
    setFocosConcluidos(0);
    setTempoFoco(novoTempoFoco);
    setTempoPausaCurta(novoPausaCurta);
    setTempoPausaLonga(novoPausaLonga);
    setTotalFocos(configTemp.totalFocos);
    setTimeLeft(novoTempoFoco);
    setConfigAberta(false);
  }

  function avancarCiclo() {
    despertador.play();
    if (modo === "foco") {
      const novosFocosConcluidos = focosConcluidos + 1;
      if (novosFocosConcluidos === totalFocos) {
        setModo("pausa-longa");
        setTimeLeft(tempoPausaLonga);
        setFocosConcluidos(0);
      } else {
        setModo("pausa-curta");
        setTimeLeft(tempoPausaCurta);
        setFocosConcluidos(novosFocosConcluidos);
      }
      return;
    }
    if (modo === "pausa-curta" || modo === "pausa-longa") {
      setModo("foco");
      setTimeLeft(tempoFoco);
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

  // Label legível do modo
  const modoLabel = {
    foco: "Foco",
    "pausa-curta": "Pausa Curta",
    "pausa-longa": "Pausa Longa",
  }[modo];

  return (
    <div className={`app modo-${modo}`}>
      <h1>Pomodoro</h1>

      {/* Bolha principal */}
      <div className="timer-bubble">
        <span className="timer-display">{formatTime(timeLeft)}</span>
        <span className="modo-label">{modoLabel}</span>
      </div>

      {/* Botão principal */}
      <button className="btn-main" onClick={alternarTimer}>
        {isRunning ? "Pausar" : "Iniciar"}
      </button>

      {/* Indicador de focos */}
      <div className="focos">
        {Array.from({ length: totalFocos }).map((_, i) => (
          <div
            key={i}
            className={`foco-dot ${i < focosConcluidos ? "ativo" : ""}`}
          />
        ))}
      </div>

      {/* Bolhinhas de ações */}
      <div className="bubbles-row">
        <button className="bubble-small" onClick={resetarTimer}>
          <span className="icone-reset">↺</span>
          <small>Reiniciar</small>
        </button>
        <button className="bubble-small" onClick={abrirConfiguracoes}>
          <span>⚙️</span>
          <small>Ajustes</small>
        </button>
      </div>

      {/* Painel de configurações */}
      {configAberta && (
        <div className="config-overlay" onClick={() => setConfigAberta(false)}>
          <div className="config-panel" onClick={(e) => e.stopPropagation()}>
            <h2>Ajustes</h2>

            <div className="config-field">
              <label>Foco (minutos)</label>
              <input
                type="number"
                value={configTemp.tempoFoco}
                onChange={(e) =>
                  setConfigTemp({ ...configTemp, tempoFoco: Number(e.target.value) })
                }
              />
            </div>

            <div className="config-field">
              <label>Pausa curta (minutos)</label>
              <input
                type="number"
                value={configTemp.tempoPausaCurta}
                onChange={(e) =>
                  setConfigTemp({ ...configTemp, tempoPausaCurta: Number(e.target.value) })
                }
              />
            </div>

            <div className="config-field">
              <label>Pausa longa (minutos)</label>
              <input
                type="number"
                value={configTemp.tempoPausaLonga}
                onChange={(e) =>
                  setConfigTemp({ ...configTemp, tempoPausaLonga: Number(e.target.value) })
                }
              />
            </div>

            <div className="config-field">
              <label>Focos até pausa longa</label>
              <input
                type="number"
                value={configTemp.totalFocos}
                onChange={(e) =>
                  setConfigTemp({ ...configTemp, totalFocos: Number(e.target.value) })
                }
              />
            </div>

            <div className="config-actions">
              <button className="btn-cancelar" onClick={() => setConfigAberta(false)}>
                Cancelar
              </button>
              <button className="btn-salvar" onClick={salvarConfiguracoes}>
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
