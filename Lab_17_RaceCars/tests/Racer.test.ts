import Racer from "../src/Racer";
import GasCar from "../src/GasCar";
import SolarCar from "../src/SolarCar";
import { findRacersWithEmptyFuel, findAverageSpeed, getFasterRacer } from "../src/racer-functions"

describe("findRacersWithEmptyFuel()", () => {
    it("return racers with no fuel from an array of GasCar where some have no fuel", () => {
        let newRacers = []
        const racer1 = new GasCar("Red Team", 0, 20)
        newRacers.push(racer1)
        const racer2 = new GasCar("Purple Team", 0, 0)
        newRacers.push(racer2)
        const racer3 = new GasCar("Yellow Team", 0, 5)
        newRacers.push(racer3)
        const racer4 = new GasCar("Blue Team", 0, 0)
        newRacers.push(racer4)
        expect(newRacers).toEqual([
            {team: "Red Team", speed: 0, fuel: 20}, 
            {team: "Purple Team", speed: 0, fuel: 0}, 
            {team: "Yellow Team", speed: 0, fuel: 5}, 
            {team: "Blue Team", speed: 0, fuel: 0}
        ])
        expect(findRacersWithEmptyFuel(newRacers)).toEqual([
            {team: "Purple Team", speed: 0, fuel: 0},
            {team: "Blue Team", speed: 0, fuel: 0}
        ])
    })
    it("return racers with no fuel from an array of GasCar where all have no fuel", () => {
        let newRacers = []
        const racer1 = new GasCar("Red Team", 40, 0)
        newRacers.push(racer1)
        const racer2 = new GasCar("Purple Team", 50, 0)
        newRacers.push(racer2)
        const racer3 = new GasCar("Yellow Team", 60, 0)
        newRacers.push(racer3)
        const racer4 = new GasCar("Blue Team", 70, 0)
        newRacers.push(racer4)
        expect(newRacers).toEqual([
            {team: "Red Team", speed: 40, fuel: 0}, 
            {team: "Purple Team", speed: 50, fuel: 0}, 
            {team: "Yellow Team", speed: 60, fuel: 0}, 
            {team: "Blue Team", speed: 70, fuel: 0}
        ])
        expect(findRacersWithEmptyFuel(newRacers)).toEqual([
            {team: "Red Team", speed: 40, fuel: 0}, 
            {team: "Purple Team", speed: 50, fuel: 0}, 
            {team: "Yellow Team", speed: 60, fuel: 0}, 
            {team: "Blue Team", speed: 70, fuel: 0}
        ])
    })
    it("returns an empty array from an array of GasCar where all have fuel", () => {
        let newRacers = []
        const racer1 = new GasCar("Red Team", 40, 30)
        newRacers.push(racer1)
        const racer2 = new GasCar("Purple Team", 50, 20)
        newRacers.push(racer2)
        const racer3 = new GasCar("Yellow Team", 60, 40)
        newRacers.push(racer3)
        const racer4 = new GasCar("Blue Team", 70, 10)
        newRacers.push(racer4)
        expect(newRacers).toEqual([
            {team: "Red Team", speed: 40, fuel: 30}, 
            {team: "Purple Team", speed: 50, fuel: 20}, 
            {team: "Yellow Team", speed: 60, fuel: 40}, 
            {team: "Blue Team", speed: 70, fuel: 10}
        ])
        expect(findRacersWithEmptyFuel(newRacers)).toEqual([])
    })
    it("returns an empty array from an array of SolarCar racers", () => {
        let newRacers = []
        const racer1 = new SolarCar("Red Team")
        newRacers.push(racer1)
        const racer2 = new SolarCar("Purple Team")
        newRacers.push(racer2)
        const racer3 = new SolarCar("Yellow Team")
        newRacers.push(racer3)
        const racer4 = new SolarCar("Blue Team")
        newRacers.push(racer4)
        expect(newRacers).toEqual([
            {team: "Red Team", speed: 0}, 
            {team: "Purple Team", speed: 0}, 
            {team: "Yellow Team", speed: 0}, 
            {team: "Blue Team", speed: 0}
        ])
        expect(findRacersWithEmptyFuel(newRacers)).toEqual([])
    })
    it("returns racers with no fuel from an array of both SolarCar and GasCar racers", () => {
        let newRacers = []
        const racer1 = new SolarCar("Green Team", 40)
        newRacers.push(racer1)
        const racer2 = new SolarCar("Green Team", 50)
        newRacers.push(racer2)
        const racer3 = new GasCar("Yellow Team", 60, 0)
        newRacers.push(racer3)
        const racer4 = new GasCar("Blue Team", 70, 20)
        newRacers.push(racer4)
        expect(newRacers).toEqual([
            {team: "Green Team", speed: 40}, 
            {team: "Green Team", speed: 50},
            {team: "Yellow Team", speed: 60, fuel: 0}, 
            {team: "Blue Team", speed: 70, fuel: 20}
        ])
        expect(findRacersWithEmptyFuel(newRacers)).toEqual([{team: "Yellow Team", speed: 60, fuel: 0}])
    })
    it("takes an empty array and returns an empty array", () => {
        let newRacers: Racer[] = []
        expect(newRacers).toEqual([])
        expect(findRacersWithEmptyFuel(newRacers)).toEqual([])
    })
})

describe("getFasterRacer()", () => {
    it("takes in a faster racerA and returns racerA", () => {
        const racerA = new GasCar("Red Team", 75)
        const racerB = new GasCar("Blue Team", 45)
        expect(getFasterRacer(racerA, racerB)).toBe(racerA)
    })
    it("takes in a faster racerB and returns racerB", () => {
        const racerA = new GasCar("Red Team", 75)
        const racerB = new GasCar("Blue Team", 85)
        expect(getFasterRacer(racerA, racerB)).toBe(racerB)
    })
    it("takes in racerA and racerB of same speed and returns null", () => {
        const racerA = new GasCar("Red Team", 90)
        const racerB = new GasCar("Blue Team", 90)
        expect(getFasterRacer(racerA, racerB)).toBe(null)
    })
    it("takes in GasCar racerA and a faster SolarCar racerB and returns racerB", () => {
        const racerA = new GasCar("Red Team", 88)
        const racerB = new SolarCar("Blue Team", 90)
        expect(getFasterRacer(racerA, racerB)).toBe(racerB)
    })
})