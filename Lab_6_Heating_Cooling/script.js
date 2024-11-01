const actualTemp = 60;
let desiredTemp = 70;

if (actualTemp < desiredTemp) {
    console.log("Run heat");
} else if (actualTemp > desiredTemp) {
    console.log("Run A/C");
} else {
    console.log("Standby");
}

const tempCelsius = 35;
const targetUnit = "F";
const convert = prompt("What would you like to convert to?");
let newUnit = null;

switch (convert) {
    case "F":
        newUnit = tempCelsius * 9/5 + 32;
        console.log("The temperature converted to Fahrenheit is " + newUnit);
        break;
    
    case "K":
        newUnit = tempCelsius + 273.15;
        console.log("The temperature converted to Kelvin is " + newUnit);
        break;

    case "C":
        console.log("The tempertaure is " + tempCelsius);
        break;
}

