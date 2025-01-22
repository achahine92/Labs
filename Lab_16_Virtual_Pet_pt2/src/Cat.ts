import VirtualPet from "./VirtualPet";

export default class Cat extends VirtualPet {
    color: string
    constructor(name: string, color: string, hunger: number = 50, happiness: number = 50) {
        super(name, hunger, happiness)
        this.color = color
    }
    getAttitude() {
        let satisfaction = this.getSatisfaction()
        if (satisfaction <= 0) {
            return "grumpy"
        }
        else {
            return "inquisitive"
        }
    }
    describe() {
        return (
            `Name: ${this.name}, Hunger: ${this.hunger}, Happiness: ${this.happiness}, Color: ${this.color}, Attitude: ${this.getAttitude()}`
        )
    }
}