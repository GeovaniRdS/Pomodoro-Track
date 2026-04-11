# 🍅 Pomodoro Timer

Um temporizador Pomodoro simples construído com React e Vite.

## Sobre o projeto

Este projeto foi desenvolvido como exercício de aprendizado de React, explorando conceitos fundamentais como `useState`, `useEffect`, `setInterval` e manipulação de estado.

## Funcionalidades

- ⏱️ Temporizador regressivo de 25 minutos
- ▶️ Botão de iniciar e pausar
- 🔄 Tempo exibido no formato `MM:SS`
- ⏹️ Reset automático ao chegar a zero

## Tecnologias

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)

## Como rodar o projeto

```bash
# Instalar dependências
npm install

# Rodar em modo de desenvolvimento
npm run dev
```

## Conceitos aprendidos

- **useState** — armazenar e atualizar o tempo restante e o estado de execução do timer
- **useEffect** — sincronizar o `setInterval` com o estado `isRunning`
- **setInterval / clearInterval** — criar e cancelar o intervalo do timer
- **Cleanup function** — evitar vazamentos de memória ao pausar o timer
- **Operador ternário** — alternar o texto do botão entre "Iniciar" e "Pausar"
- **Math.floor e módulo (%)** — converter segundos em formato `MM:SS`
- **padStart** — garantir dois dígitos na exibição do tempo


