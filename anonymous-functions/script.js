//  1.
function squareItems(array) {
    return array.map(element => element * element);
}

const array = [1,2,3,4,5];
console.log(squareItems( array ));

//  2.
(
function(){
    const number1 = 5;
    const number2 = 17;
    console.log('The sum is: ', number1 + number2 );
}
)();

//  3.
const timesTwo = (number) => number * 2;

console.log(timesTwo(4));