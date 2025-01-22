import VirtualPet from "./VirtualPet"
import Dog from "./Dog"
import Cat from "./Cat"

export const decay = (pet: VirtualPet): void => {
    if (pet.hunger < 100 && pet.happiness > 0) {
        pet.hunger += 5
        pet.happiness -= 5
    }
}

export const makePet = (name: string, type: string, hunger: number, happiness: number): VirtualPet => {
    let newPet = new VirtualPet(name)
    if (type === "dog") newPet = new Dog(name, hunger, happiness)
    else if (type === "cat") newPet = new Cat(name, "black", hunger, happiness)
    else newPet = new VirtualPet(name, hunger, happiness)
    
    return newPet
}

export const findMostSatisfied = (pets: VirtualPet[]): string => {
    let mostSatisfiedPet = pets[0]
    let highestSatisfaction = mostSatisfiedPet.getSatisfaction()
    for (let i = 0; i < pets.length; i++) {
        const satisfactionScore = pets[i].getSatisfaction()
        if (satisfactionScore > highestSatisfaction) {
            highestSatisfaction = satisfactionScore
            mostSatisfiedPet = pets[i]
        }
    }
    return mostSatisfiedPet.name
}