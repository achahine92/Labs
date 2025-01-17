export default class VirtualPet {
    name: string 
    hunger: number
    happiness: number

    constructor(name: string, hunger: number = 50, happiness: number = 50) {
        this.name = name
        this.hunger = hunger
        this.happiness = happiness
    }

    describe() {
        return `Name: ${this.name}, Hunger: ${this.hunger}, Happiness: ${this.happiness}`
    }

    getSatisfaction() {
        return this.happiness - this.hunger
    }

    makeSound(sound: string) {
        if (sound === "") return `${this.name} says nothing`
        else return `${this.name} says ${sound}`
    }

    feed() {
        if (this.hunger > 0) {
            this.hunger -= 10
            return this.hunger
        }
        return ":)"
    }

    play() {
        if (this.happiness < 100) {
            this.happiness += 10
            return this.happiness
        }
        return ":D"
    }
}