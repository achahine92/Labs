import VirtualPet from "../src/VirtualPet";

describe("VirtualPet", () => {
    it("The Virtual Pet has the name from its constructor", () => {
        const newPet = new VirtualPet("Bellatrix")
        expect(newPet.name).toBe("Bellatrix")
    })
    it("The Virtual Pet is initialized with hunger of 50", () => {
        const newPet = new VirtualPet("Bellatrix")
        expect(newPet.hunger).toBe(50)
    })
    it("The Virtual Pet is initialized with happiness of 50", () => {
        const newPet = new VirtualPet("Bellatrix")
        expect(newPet.happiness).toBe(50)
    })
})

describe("VirtualPet methods", () => {
    it("The Virtual pet has the name from its constructor and hunger and happiness will default", () => {
        const newPet = new VirtualPet("Sirius")
        expect(newPet.describe()).toBe("Name: Sirius, Hunger: 50, Happiness: 50")
    })
    it("The Virtual pet has the name, hunger, and happiness from its constructor", () => {
        const newPet = new VirtualPet("Sirius")
        newPet.hunger = 30
        newPet.happiness = 90
        expect(newPet.describe()).toBe("Name: Sirius, Hunger: 30, Happiness: 90")
    })
    it("when hunger and happiness are default values, satisfaction is 0", () => {
        const newPet = new VirtualPet("Sirius")
        expect(newPet.getSatisfaction()).toBe(0)
    })
    it("when hunger and happiness values are given, satisfaction returns the difference of those values", () => {
        const newPet = new VirtualPet("Sirius")
        expect(newPet.getSatisfaction()).toBe(0)
        newPet.hunger = 30
        newPet.happiness = 90
        expect(newPet.getSatisfaction()).toBe(60)
    })
    it("if sound is an empty string, Virtual Pet says nothing", () => {
        const newPet = new VirtualPet("Sirius")
        expect(newPet.makeSound("")).toBe("Sirius says nothing")
    })
    it("when sound is indicated, Virtual Pet makes that sound", () => {
        const newPet = new VirtualPet("Sirius")
        expect(newPet.makeSound("meow")).toBe("Sirius says meow")
        expect(newPet.makeSound("hiss")).toBe("Sirius says hiss")
        expect(newPet.makeSound("purrr")).toBe("Sirius says purrr")
    })
    it("when fed, Virtual Pet's hunger decreases by 10", () => {
        const newPet = new VirtualPet("Sirius", 30)
        expect(newPet.feed()).toBe(20)
        expect(newPet.feed()).toBe(10)
        expect(newPet.feed()).toBe(0)
    })
    it("hunger does not go lower than 0 when Virtual Pet is fed", () => {
        const newPet = new VirtualPet("Sirius", 0)
        expect(newPet.feed()).toBe(":)")
    })
    it("increases happiness by 10 when Virtual Pet is played with", () => {
        const newPet = new VirtualPet("Sirius", 30, 70)
        expect(newPet.play()).toBe(80)
        expect(newPet.play()).toBe(90)
        expect(newPet.play()).toBe(100)
    })
    it("happiness does not exceed 100 when Virtual Pet is played with", () => {
        const newPet = new VirtualPet("Sirius", 0, 100)
        expect(newPet.play()).toBe(":D")
    })
})