"use strict"

function customSort(inputArray) {
    // Make a copy of the input array to avoid modifying the original
    let outputArray = [];
    for (let i = 0; i < inputArray.length; i++) {
        outputArray.push(inputArray[i]);
    }

    const n = outputArray.length;

    // Outer loop to iterate through the array
    for (let i = 0; i < n; i++) {
        // Inner loop to compare adjacent elements and swap them if they are in the wrong order
        for (let j = 0; j < n - 1 - i; j++) {
            if (outputArray[j] > outputArray[j + 1]) {
                // Swap the elements
                let temp = outputArray[j];
                outputArray[j] = outputArray[j + 1];
                outputArray[j + 1] = temp;
            }
        }
    }

    return outputArray;
}

let numbers = [12, 52, 10, 20, 69, 10, 28, 6, 92, 52, 83];

let sortNumbers = customSort(numbers);

console.log(sortNumbers);

