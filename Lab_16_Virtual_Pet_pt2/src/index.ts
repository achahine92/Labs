import promptly from "promptly";
import Dog from "./Dog";
import Cat from "./Cat";
import { decay } from "./pet-functions";
import VirtualPet from "./VirtualPet";

async function main() {
  const petType = await promptly.choose("What type of pet? (dog, cat)", [ "dog", "cat" ]);
  const name = await promptly.prompt("Enter the pet's name: ");
  let pet: null | VirtualPet = null;
  if (petType === "dog") {
    pet = new Dog(name);
  } else {
    const color = await promptly.prompt("Enter the pet's color: ");
    pet = new Cat(name, color);
  }
  const sound = await promptly.prompt("What sound does this pet make? ");
  let exit = false;
  while (!exit) {
    console.log(pet.describe());
    console.log("Satisfaction: " + pet.getSatisfaction());
    console.log();

    const action = await promptly.choose(
      "What do you want to do? (feed, play, sound, nothing, exit)",
      ["feed", "play", "sound", "nothing", "exit"]
    );
    if (action === "exit") {
      exit = true;
      break;
    } else if (action === "feed") {
      pet.feed();
      console.log(`${pet.name} has been fed.`);
    } else if (action === "play") {
      pet.play();
      console.log(`${pet.name} has played.`);
    } else if (action == "sound") {
      console.log(pet.makeSound(sound));
    } else if (action == "nothing") {
      decay(pet);
    }
  }
}

main().catch((err) => console.error(err));
