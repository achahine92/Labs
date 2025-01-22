import VirtualPet from "./VirtualPet";

export default class Dog extends VirtualPet {
    constructor(name: string, hunger: number = 50, happiness: number = 50) {
        super(name, hunger, happiness)
    }
    play() {
        if ((this.happiness + 15) <= 100) {
            this.happiness += 15
        } else {
            this.happiness = 100
        }
        return this.happiness
    }
}