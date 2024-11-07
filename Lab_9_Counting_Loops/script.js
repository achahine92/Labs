for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

let i = 0;
while (i < 10) {
    i++;
    console.log(i);
}

i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}

do {
    i++;
    console.log(i);
} while (i < 10);

i = 10;
do {
    console.log(i);
    i--;
} while (i >= 1);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const number of numbers) {
    console.log(number);
}