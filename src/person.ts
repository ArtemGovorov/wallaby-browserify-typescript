export default class Person {
    constructor(name: string) {
        this.name = name;
    }

    greet() {
        return `Hello ${this.name}`
    }
}