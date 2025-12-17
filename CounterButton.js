import { eventBus } from "./EventBus.js"

class CounterButton extends HTMLElement {

    count = 0
    button

    constructor() {
        super()
    }

    connectedCallback() {
        this.render()
        this.button = this.querySelector('button')
        this.button.addEventListener('click', () => {
            this.onCount()
        })
    }

    onCount() {
        this.count++
        eventBus.getSubject("COUNTER").next(this.count)
    }

    render() {
        this.innerHTML = `
        <button>
            Aumentar Contador
        </button>
       `
    }
}

customElements.define("counter-button", CounterButton)
