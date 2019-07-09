//  1.
function varLetConst () {
    var number = 2;

    someArray = [1,2,3,4];
    for (let i = 0; i < someArray.length; i++) {
        let numberLet = 3;
        const numberConst = 4;

        numberConst = 2;    //  Type error jer se vrednost const-a ne moze menjati
    }

    console.log(numberLet, numberConst)  //  Reference error je let ima const na nivou bloka
}

console.log(number);    //  Reference error jer var ima scope na nivou funkcije


//  2.
//      class ES6
class User6 {
    constructor (name) {
        this.name = name;
    }

    alertName6 () {
        alert(this.name);
    }
}

let user6 = new User6("Igor");
user6.alertName6()

//      class function ES5
function User5 (name) {
    this.name = name;
}

User5.prototype.alertName5 = function () {
    alert(this.name);
}

let user5 = new User5("Marina");
user5.alertName5();

//  3.
//  ES6
const sayHello = () => console.log("Hello es6");

//  ES5
function sayHi () {
    console.log("Hi es5")
}

sayHi()
sayHello()

//  4.
var promiseMe = function () {
    return new Promise( resolve => {
        setTimeout(function(){
            resolve("promise");
        }, 1000);
    });
};

//  async/await
async function promiseCall () {
    var awaitPromise = await promiseMe();
    console.log(awaitPromise);

    var regularPromise = promiseMe();
    regularPromise.then(function(value){
        console.log(value);
    })
}

promiseCall();