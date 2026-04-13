# 🍅 Pomodoro Timer

Um temporizador Pomodoro construído com React e Vite, baseado nos requisitos do [roadmap.sh](https://roadmap.sh/projects/pomodoro-timer).

## Sobre o projeto

Este projeto foi desenvolvido como exercício de aprendizado de React, explorando conceitos fundamentais como `useState`, `useEffect`, `setInterval` e manipulação de estado. O design foi pensado para ser visualmente agradável e responsivo, com tema roxo e bolhas animadas.

## Funcionalidades

- ✅ Iniciar, pausar e retomar o timer
- ✅ Alternância automática entre sessão de foco, pausa curta e pausa longa
- ✅ Configuração dos intervalos padrão pelo usuário
- ✅ Exibição do modo atual (Foco, Pausa Curta, Pausa Longa)
- ✅ Contador de sessões de foco concluídas
- ✅ Notificação sonora ao fim de cada sessão
- ✅ Interface responsiva para desktop e mobile

## Intervalos padrão

| Sessão | Duração |
|--------|---------|
| Foco | 25 minutos |
| Pausa curta | 5 minutos |
| Pausa longa (a cada 4 focos) | 15 minutos |

> Os intervalos podem ser configurados pelo usuário diretamente na aplicação.

## Tecnologias

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- Google Fonts (Bebas Neue, Space Mono, Nunito)

## Como rodar o projeto

```bash
# Instalar dependências
npm install

# Rodar em modo de desenvolvimento
npm run dev

# Gerar build de produção
npm run build
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
- **Spread operator** — atualizar campos de um objeto no state sem perder os demais
- **Constantes descritivas** — facilitar manutenção dos valores de tempo
- **CSS Variables** — tema dinâmico que muda de cor conforme o modo ativo

## Estrutura do projeto

```
src/
├── App.jsx       # Componente principal com a lógica do timer
├── App.css       # Estilos e tema visual
└── main.jsx      # Ponto de entrada da aplicação
public/
└── AlarmClock.wav  # Som de notificação ao fim de cada sessão
```
