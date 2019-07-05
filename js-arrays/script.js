var fruits = ['orange', 'mandarine', 'lemon', 'grapefruit'];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

fruits.forEach(fruit => {
    console.log(fruit)
});

//  1.
function rotateArray( array, steps ) {
    for (let i = 0; i < steps; i++) {
        var last = array.pop();
        array.unshift(last);
    }
    
    return array;
}

console.log(rotateArray(fruits, 1));

//  2.
var numbers = [1,2,3,4,5];

function addNumbersStarting50( numbersArray ) {

    return numbersArray.reduce(( sum, current ) => sum + current, 50)
}

console.log(addNumbersStarting50(numbers));

//  3.
function countdown( length ) {
    var array = [0];
    while ( array[array.length - 1] < length) {
        let last = array[array.length - 1];
        array.push(++last);
    }
    
    var finalArray = [];
    array.forEach(element => {
        newArray = [element]
        while ( newArray.length <= element ) {
            let last = newArray[newArray.length - 1];
            newArray.push(--last)
        }
        finalArray.push(newArray);
    });

    return finalArray;
}

console.log(countdown(4))

//  4.
var myZoo = [
    ["King Kong", ["gorilla", 42]],
    ["Nemo", ["fish", 5]],
    ["Punxsutawney Phil", ["groundhog", 11]]
];

function zooInventory( inventory ) {
    var arrayOfStrings = [];
    inventory.forEach(element => {
        let animal = element.flat();
        arrayOfStrings.push(animal[0] + ' the ' + animal[1] + ' is ' + animal[2]);
    });
    
    return arrayOfStrings;
}

console.log(zooInventory(myZoo));