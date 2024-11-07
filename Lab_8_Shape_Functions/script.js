const getAreaOfCircle = function(radius) {
    return Math.PI * radius ** 2;
} 
console.log(getAreaOfCircle(3));

const getCircumferenceOfCircle = function(radius) {
    return Math.PI * radius * 2;
}
console.log(getCircumferenceOfCircle(3));

const getAreaOfSquare = function(side) {
    return side * side;
}
console.log(getAreaOfSquare(4));

const getAreaOfTriangle = function(base, height) {
    return base * height * .5;
}
console.log(getAreaOfTriangle(4, 6));