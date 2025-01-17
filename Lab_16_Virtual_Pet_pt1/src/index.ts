import promptly from "promptly";
import VirtualPet from "./VirtualPet";

async function main() {
  const name = await promptly.prompt("Enter the pet's name: ");
  const pet = new VirtualPet(name);
  const sound = await promptly.prompt("What sound does this pet make? ");

  let exit = false;
  while (!exit) {
    console.log(pet.describe());
    console.log("Satisfaction: " + pet.getSatisfaction());
    console.log();

    const action = await promptly.choose(
      "What do you want to do? (feed, play, sound, exit)",
      ["feed", "play", "sound", "exit"]
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
    }
  }
}

main().catch((err) => console.error(err));