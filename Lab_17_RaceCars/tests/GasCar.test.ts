import GasCar from "../src/GasCar";

describe("GasCar properties", () => {
    it("team and fuel properties are set from the constructor parameter", () => {
        const newGasCar = new GasCar("Red Team")
        expect(newGasCar.team).toBe("Red Team")
        expect(newGasCar.fuel).toBe(10)
    })
    it("speed is initialized at 0", () => {
        const newGasCar = new GasCar("Red Team")
        expect(newGasCar.speed).toBe(0)
    })
})

describe("GasCar methods", () => {
    it("calling accelerate() once brings speed to 2", () => {
        const newGasCar = new GasCar("Red Team")
        newGasCar.accelerate()
        expect(newGasCar.speed).toBe(2)
    })
    it("calling accelerate() twice brings speed to 4", () => {
        const newGasCar = new GasCar("Red Team")
        newGasCar.accelerate()
        newGasCar.accelerate()
        expect(newGasCar.speed).toBe(4)
    })
    it("calling accelerate() once reduces fuel by 1", () => {
        const newGasCar = new GasCar("Red Team", 0, 40)
        newGasCar.accelerate()
        expect(newGasCar.fuel).toBe(39)
    })
    it("calling accelerate() twice reduces fuel by 2", () => {
        const newGasCar = new GasCar("Red Team", 0, 40)
        newGasCar.accelerate()
        newGasCar.accelerate()
        expect(newGasCar.fuel).toBe(38)
    })
    it("returns true when isFuelEmpty() is called with fuel at 0", () => {
        const newGasCar = new GasCar("Red Team", 0, 0)
        newGasCar.accelerate()
        expect(newGasCar.isFuelEmpty()).toBe(true)
    })
    it("returns false when isFuelEmpty() is called when fuel is greater than zero", () => {
        const newGasCar = new GasCar("Red Team", 0, 5)
        expect(newGasCar.isFuelEmpty()).toBe(false)
    })
})