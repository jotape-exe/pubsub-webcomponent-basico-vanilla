import { eventBus } from "./EventBus.js";

class CounterLabel extends HTMLElement {

    value
    label
    unsubscribe

    constructor() {
        super();
        this.value = 0
        this.onCount = (value) => {
            this.value = value
            if (this.label) {
                this.label.innerText = value
            }
        }
    }

    connectedCallback() {
        this.render()
        this.label = this.querySelector('span')
        const themeSubject = eventBus.getSubject("COUNTER")
        this.unsubscribe = themeSubject.subscribe(this.onCount)
    }

    render() {
        this.innerHTML = `
        <span>
            ${this.value}
        </span>
       `
    }

    disconnectedCallback() {
        if (this.unsubscribe) {
            this.unsubscribe()
        }
    }
}

customElements.define("counter-label", CounterLabel)
