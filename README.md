# 🍅 Pomodoro Timer

Um temporizador Pomodoro construído com React e Vite, baseado nos requisitos do [roadmap.sh](https://roadmap.sh/projects/pomodoro-timer).

## Sobre o projeto

Este projeto foi desenvolvido como exercício de aprendizado de React, explorando conceitos fundamentais como `useState`, `useEffect`, `setInterval` e manipulação de estado.

## Funcionalidades

- [x] Iniciar, pausar e retomar o timer
- [x] Alternância automática entre sessão de foco, pausa curta e pausa longa
- [x] Exibição do modo atual (Foco, Pausa Curta, Pausa Longa)
- [x] Contador de sessões de foco concluídas
- [ ] Configuração dos intervalos padrão pelo usuário
- [ ] Notificação sonora ao fim de cada sessão
- [ ] Interface responsiva para desktop e mobile

## Intervalos padrão

| Sessão | Duração |
|--------|---------|
| Foco | 25 minutos |
| Pausa curta | 5 minutos |
| Pausa longa (a cada 4 focos) | 15 minutos |

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
- **Closures e prev** — atualizar state de forma segura dentro do `setInterval`
- **Constantes descritivas** — facilitar manutenção dos valores de tempo
