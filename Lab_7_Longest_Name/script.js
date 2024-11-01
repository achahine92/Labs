const names = ["Bernadette", "Gennevieve", "Beatrice"];

const name1 = names[0].length;
const name2 = names[1].length;
const name3 = names[2].length;

if (name1 > name2 && name1 > name3) {
    console.log(names[0] + " has the longest name.");
} else if (name2 > name1 && name2 > name3) {
    console.log(names[1] + " has the longest name.");
} else if (name3 > name1 && name3 > name2) {
    console.log(names[2] + " has the longest name.")
} else if (name1 > name3 && name1 === name2) {
    console.log(names[0] + " and " + names[1] + " tie for the longest name.");
} else if (name2 > name1 && name2 === name3) {
    console.log(names[1] + " and " + names[2] + " tie for the longest name");
} else if (name3 > name2 && name3 === name1) {
    console.log(names[0] + " and " + names[2] + " tie for the longest name.");
} else {
    console.log(names[0] + ", " + names[1] + ", and " + names[2] + " all have the same length.");
}