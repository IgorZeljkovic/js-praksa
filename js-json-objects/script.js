person = {
    firstName: "Igor",
    lastName: "Zeljkovic",
    age: 24
}

jsonPerson = '{ "firstName":"Aleksandra", "lastName":"Jovanovic", "age":24 }'

parsedPerson = JSON.parse(jsonPerson);

stringifiedPerson = JSON.stringify(person);

console.log(person)
console.log(jsonPerson)
console.log(parsedPerson)
console.log(stringifiedPerson)

arrayOfNumbers = [1, 2, 3, 4, 5]
jsonNumbers = '{ "jsonArrayOfNumbers":[1, 2, 3, 4, 5] }'
jsonArrayOfNumbers = JSON.parse(jsonNumbers).jsonArrayOfNumbers;

for (let i = 0; i < jsonArrayOfNumbers.length; i++) {
    const number = jsonArrayOfNumbers[i];
}