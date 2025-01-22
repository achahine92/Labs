import Dog from "../src/Dog"
import VirtualPet from "../src/VirtualPet"

describe("Dog properties", () => {
    it("Dog has the name from its constructor", () => {
        const newDog = new Dog("Scooby Doo")
        expect(newDog.name).toBe("Scooby Doo")
    })
    it("Dog is initialized with hunger of 50", () => {
        const newDog = new Dog("Scooby Doo")
        expect(newDog.hunger).toBe(50)
    })
    it("Dog is initialized with happiness of 50", () => {
        const newDog = new Dog("Scooby Doo")
        expect(newDog.happiness).toBe(50)
    })
})

describe("Dog methods", () => {
    it("increases happiness by 15 when play() method is called", () => {
        const newDog = new Dog("Scooby Doo")
        newDog.happiness = 70
        expect(newDog.play()).toBe(85)
    })
    it("stops happiness from exceeding 100", () => {
        const newDog = new Dog("Scooby Doo")
        newDog.happiness = 95
        expect(newDog.play()).toBe(100)
    })
})