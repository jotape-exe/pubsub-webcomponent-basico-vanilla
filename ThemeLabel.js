import { eventBus } from "./EventBus.js"

class ThemeLabel extends HTMLElement {
  value
  label
  onThemeChanged

  constructor() {
    super()
    this.value = "tema padrão"

    this.onThemeChanged = (value) => {
      this.value = value
      if (this.label) {
        this.label.innerText = value
      }
    }
  }

  connectedCallback() {
    this.innerHTML = `
      <span>${this.value}</span>
    `
    this.label = this.querySelector('span')
    eventBus.subscribe("THEME_CHANGED", this.onThemeChanged)
  }

  disconnectedCallback() {
    eventBus.unsubscribe("THEME_CHANGED", this.onThemeChanged)
  }
}

customElements.define('theme-label', ThemeLabel)
