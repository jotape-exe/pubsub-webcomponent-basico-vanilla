export class EventBus {
    events
    constructor() {
        this.events = new Map()
    }

    subscribe(eventName, callback) {
        if (!this.events.has(eventName)) {
            this.events.set(eventName, [])
        }

        this.events.get(eventName).push(callback)
    }

    publish(eventName, data) {

        if (!this.events.has(eventName)) return

        const callbacks = this.events.get(eventName)

        callbacks.forEach(cb => cb(data))
    }

    unsubscribe(eventName, callback) {
        if (!this.events.has(eventName)) return

        const callbacks = this.events.get(eventName)

        const filtered = callbacks.filter(cb => cb !== callback)

        this.events.set(eventName, filtered)
    }
}

export const eventBus = new EventBus()