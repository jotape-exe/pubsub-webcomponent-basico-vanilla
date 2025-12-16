# 🌗 Theme Toggle MVP (Web Components + Pub/Sub)

Este é um **MVP simples e didático** que demonstra como implementar **Light/Dark Mode** usando:

- **Web Components (HTML puro)**
- **Padrão de design Pub/Sub**
- **EventBus desacoplado**
- **CSS com `data-theme`**

O objetivo do projeto é **estudar arquitetura**, não frameworks.

---

## ✨ Funcionalidades

- Alternância entre **light** e **dark mode**
- Estado do tema controlado via `data-theme` no `<html>`
- Comunicação entre componentes usando **Pub/Sub**
- Componentes desacoplados e reutilizáveis
- Ícones dinâmicos (`sun.svg` / `moon.svg`)

---

## 🧠 Conceitos aplicados

### Pub/Sub
- O componente que **muda o estado** publica eventos
- Componentes que **reagem** apenas se inscrevem
- Nenhum componente conhece o outro diretamente

### Web Components
- Uso de `class extends HTMLElement`
- Ciclo de vida:
  - `connectedCallback`
  - `disconnectedCallback`
- Encapsulamento de comportamento

### CSS Theming
- Uso de variáveis CSS
- Tema controlado via:
  ```html
  <html data-theme="light">
