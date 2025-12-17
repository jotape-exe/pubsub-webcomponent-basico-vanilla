import { Subject } from "./Subject.js"

export class EventBus {
    subjects

    constructor() {
        this.subjects = new Map()
    }

    getSubject(eventName) {
        if (!this.subjects.has(eventName)) {
            this.subjects.set(eventName, new Subject())
        }

        return this.subjects.get(eventName)
    }
}

export const eventBus = new EventBus()
