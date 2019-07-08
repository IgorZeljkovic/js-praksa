var globalVariable = 'this is global';

function fooOne() {
    for (let i = 0; i < 3; i++) {
        var variable = 'var variable';
        let letVariable = 'let variable';
    }
    //  ispisace se jer var scope nije ogranicen blokom
    console.log(variable);

    //  
    console.log(globalVariable);

    //  reference error jer let scope zavisi od bloka
    console.log(letVariable);

    anotherGlobal = 'another global';
    var localVariable = 'local variable';
}

fooOne();

//  ispisace se
console.log(anotherGlobal);
//  nece se ispisati jer je lokalna...scope unutar funkcije
console.log(localVariable);