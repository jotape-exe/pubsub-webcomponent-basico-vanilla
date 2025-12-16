import { eventBus } from "./EventBus.js"

class ThemeToggle extends HTMLElement {
    value = "light"
    button

    connectedCallback() {
        this.render()
        this.button = this.querySelector('button')

        this.button.addEventListener('click', () => {
            this.toggleTheme()
        })
    }

    toggleTheme() {
        this.value = this.value === "light" ? "dark" : "light"
        document.documentElement.setAttribute("data-theme", this.value)
        eventBus.publish("THEME_CHANGED", this.value)
    }

    render() {
        document.documentElement.setAttribute("data-theme", this.value)
        this.innerHTML = `
        <button>
            Mudar Tema
        </button>
       `
    }
}

customElements.define("theme-toggle", ThemeToggle)
