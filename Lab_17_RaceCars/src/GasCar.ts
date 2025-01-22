import Racer from "./Racer";

export default class GasCar implements Racer {
    team: string 
    speed: number = 0
    fuel: number 

    constructor(team: string, speed: number = 0, fuel: number = 10) {
        this.team = team 
        this.speed = speed
        this.fuel = fuel
    } 

    accelerate() {
        this.speed += 2
        this.fuel -= 1
    }

    isFuelEmpty() {
        if (this.fuel <= 0) return true
        else return false
    }
}