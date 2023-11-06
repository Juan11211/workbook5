let numbers = [3, 40, 5, 39, 30, 55, 60, 62, 65]

function isOver60(somevalue){
    return (somevalue > 60 )
}

let numOver60 = numbers.find(isOver60)

console.log(`${numOver60}`)

// find returns the first element found for the value


// findIndex
let numOver60Index = numbers.findIndex(isOver60);

console.log(`the firstIndex is ${numOver60Index} the second one is ${numOver60}`)



const allOver60 = [];

for (let number of numbers) {
    if (number > 60) {
        allOver60.push(number);
    }
}

console.log(allOver60);
