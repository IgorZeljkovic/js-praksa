//  1.
function squareItems(array) {
    var newArray = array.map(function( element ){
        return element * element;
    });
    return newArray;
}

var array = [1,2,3,4,5];
console.log(squareItems( array ));

//  2.
(
function(){
    var number1 = 5;
    var number2 = 17;
    console.log('The sum is: ', number1 + number2 );
}
)();

//  3.
const timesTwo = (number) => {
    return number * 2;
};

console.log(timesTwo(4));