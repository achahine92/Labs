import Racer from "./Racer";

export default class SolarCar implements Racer {
    team: string 
    speed: number = 0 
    constructor(team: string, speed: number = 0) {
        this.team = team 
        this.speed = speed
    }

    accelerate() {
        this.speed += 1 
        // speed does not work on its own bc ts would search for a local variable named speed. 
        // this.speed refers to the property that belongs to the specific instance of this current object
        // so it's not like you create a speed property in Racer and it can just be referenced freely in every class that inherits/implements it
    }

    isFuelEmpty() {
        return false
    }
}