import VirtualPet from "../src/VirtualPet";
import { decay, makePet, findMostSatisfied } from "../src/pet-functions";
import Dog from "../src/Dog";
import Cat from "../src/Cat";


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
    it("decreases Virtual Pet's hunger by 10 when feed() is called", () => {
        const newPet = new VirtualPet("Sirius", 30)
        expect(newPet.feed()).toBe(20)
        expect(newPet.feed()).toBe(10)
        expect(newPet.feed()).toBe(0)
    })
    it("hunger does not go lower than 0 when feed() is called", () => {
        const newPet = new VirtualPet("Sirius", 0)
        expect(newPet.feed()).toBe(":)")
    })
    it("increases happiness by 10 when play() is called", () => {
        const newPet = new VirtualPet("Sirius", 30, 70)
        expect(newPet.play()).toBe(80)
        expect(newPet.play()).toBe(90)
        expect(newPet.play()).toBe(100)
    })
    it("happiness does not exceed 100 when play() is called", () => {
        const newPet = new VirtualPet("Sirius", 0, 100)
        expect(newPet.play()).toBe(":D")
    })
})

describe("VirtualPets functions", () => {
    it("increases hunger and decreases happiness by 5 when decay() is called", () => {
        const newPet = new VirtualPet("Bellatrix", 20, 80)
        decay(newPet)
        expect(newPet.hunger).toBe(25)
        expect(newPet.happiness).toBe(75)
    })
    it("returns hunger 55 and happiness 45 when decay() is called with hunger/happiness initialized values", () => {
        const newPet = new VirtualPet("Bellatrix")
        decay(newPet)
        expect(newPet.hunger).toBe(55)
        expect(newPet.happiness).toBe(45)
    })
    it("prevents hunger from going above 100 and happiness below 0 when decay() is called", () => {
        const newPet = new VirtualPet("Bellatrix", 100, 0)
        decay(newPet)
        expect(newPet.hunger).toBe(100)
        expect(newPet.happiness).toBe(0)
    })
    it("calls makePet() and if the type is 'dog', it makes a new Dog with the provided name", () => {
        const newPet = makePet("Sirius Black", "dog", 40, 60)
        expect(newPet instanceof Dog).toBeTruthy()
        expect(newPet.name).toBe("Sirius Black")
    })
    it("calls makePet() and if the type is 'cat', it makes a new Cat with the provided name and color", () => {
        const newPet = makePet("Crookshanks", "cat", 60, 20)
        expect(newPet instanceof Cat).toBeTruthy()
        expect(newPet.name).toBe("Crookshanks")
    })
    it("calls makePet() and if another type is provided, it makes a new VirtualPet with the provided name", () => {
        const newPet = makePet("Hedwig", "owl", 30, 70)
        expect(newPet instanceof VirtualPet).toBeTruthy()
        expect(newPet.name).toBe("Hedwig")
    })
    it("finds the most satisfied pet in an array of VirtualPets", () => {
        let pets = []
        const dog1 = makePet("Sirius Black", "dog", 40, 60)
        pets.push(dog1)
        const cat1 = makePet("Crookshanks", "orange", 60, 20)
        pets.push(cat1)
        const cat2 = makePet("Trixie", "black", 20, 80)
        pets.push(cat2)
        const owl1 = makePet("Hedwig", "owl", 30, 70)
        pets.push(owl1)
        expect(pets).toEqual([
            {name: "Sirius Black", hunger: 40, happiness: 60}, 
            {name: "Crookshanks", hunger: 60, happiness: 20}, 
            {name: "Trixie", hunger: 20, happiness: 80}, 
            {name: "Hedwig", hunger: 30, happiness: 70}
        ])
        const mostSatisfiedPetName = findMostSatisfied(pets)
        expect(mostSatisfiedPetName).toBe("Trixie")
    })
})