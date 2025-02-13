import Cat from "../src/Cat"
import VirtualPet from "../src/VirtualPet"

describe("Cat properties", () => {
    it("returns the name and color set from the constructor params", () => {
        const newCat = new Cat("Crookshanks", "orange")
        expect(newCat.name).toBe("Crookshanks")
        expect(newCat.color).toBe("orange")
    })
    it("initializes hunger and happiness at 50", () => {
        const newCat = new Cat("Crookshanks", "orange")
        expect(newCat.hunger).toBe(50)
        expect(newCat.happiness).toBe(50)
    })
})

describe("Cat methods", () => {
    it("getAttitude() returns 'inquisitive' if getSatisfaction() is greater than 0", () => {
        const newCat = new Cat("Crookshanks", "orange", 40, 60)
        newCat.getSatisfaction()
        expect(newCat.getAttitude()).toBe("inquisitive")
    })
    it("getAttitude() returns 'grumpy' if getSatisfaction() is less than 0", () => {
        const newCat = new Cat("Crookshanks", "orange", 60, 40)
        newCat.getSatisfaction()
        expect(newCat.getAttitude()).toBe("grumpy")
    })
    it("getAttitude() returns 'grumpy' if getSatisfaction() is 0", () => {
        const newCat = new Cat("Crookshanks", "orange")
        newCat.getSatisfaction()
        expect(newCat.getAttitude()).toBe("grumpy")
    })
    it("returns a string when describe() is called that includes name, hunger, happiness, color, and attitude", () => {
        const newCat = new Cat("Crookshanks", "orange")
        expect(newCat.describe()).toBe(
            "Name: Crookshanks, Hunger: 50, Happiness: 50, Color: orange, Attitude: grumpy"
        )
    })
})