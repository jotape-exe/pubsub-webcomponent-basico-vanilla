import { eventBus } from "./EventBus.js"

class ThemeLabel extends HTMLElement {
  
  value
  label
  unsubscribe

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
    const themeSubject = eventBus.getSubject("THEME_CHANGED")
    this.unsubscribe = themeSubject.subscribe(this.onThemeChanged)
  }

  disconnectedCallback() {
    if (this.unsubscribe) {
      this.unsubscribe()
    }
  }
}

customElements.define('theme-label', ThemeLabel)
