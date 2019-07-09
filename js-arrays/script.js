let fruits = ["orange", "mandarine", "lemon", "grapefruit"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

fruits.forEach(fruit => {
    console.log(fruit)
});

//  1.
const rotateArray = ( array, steps ) => {
    for (let i = 0; i < steps; i++) {
        const last = array.pop();
        array.unshift(last);
    }
    
    return array;
}

console.log(rotateArray(fruits, 1));

//  2.
let numbers = [1,2,3,4,5];

const addNumbers = ( numbersArray, limit ) => numbersArray.reduce(( sum, current ) => sum + current, limit);

console.log(addNumbers(numbers, 50));

//  3.
function countdown(number) {
    const array = Array(number * 2 + 1).fill(0);

    return array.map((n, index) => (
        n + index <= number
        ? n + index
        : number - (index - number)
    ))
}

console.log(countdown(4))

//  4.
const myZoo = [
    ["King Kong", ["gorilla", 42]],
    ["Nemo", ["fish", 5]],
    ["Punxsutawney Phil", ["groundhog", 11]]
];

function zooInventory( inventory ) {
    return inventory.map(animal => {
        const [name, [type, age] = info] = animal

        return `${name} the ${type} is ${age}.`
    })
}

console.log(zooInventory(myZoo))