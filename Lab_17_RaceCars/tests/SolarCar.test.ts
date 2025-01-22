import SolarCar from "../src/SolarCar";

describe("SolarCar properties", () => {
    it("team property is set from the constructor parameter", () => {
        const newSolarCar = new SolarCar("Green Team")
        expect(newSolarCar.team).toBe("Green Team")
    })
    it("speed is initialized at 0", () => {
        const newSolarCar = new SolarCar("Green Team")
        expect(newSolarCar.speed).toBe(0)
    })
})

describe("SolarCar methods", () => {
    it("calling accelerate() once brings speed to 1", () => {
        const newSolarCar = new SolarCar("Green Team")
        newSolarCar.accelerate()
        expect(newSolarCar.speed).toBe(1)
    })
    it("calling accelerate() twice brings speed to 2", () => {
        const newSolarCar = new SolarCar("Green Team")
        newSolarCar.accelerate()
        newSolarCar.accelerate()
        expect(newSolarCar.speed).toBe(2)
    })
    it("returns false when isFuelEmpty() is called", () => {
        const newSolarCar = new SolarCar("Green Team")
        expect(newSolarCar.isFuelEmpty()).toBe(false)
    })
})