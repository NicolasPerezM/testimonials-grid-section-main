
let myArray = ["A", "B", "C"];

function reverseArray(myArray) {
    let newArray = [];
    for(let i = myArray.length-1; i >= 0; i--){
        newArray.push(myArray[i]);
    }
    return newArray;
}

console.log(reverseArray(myArray));
// → ["C", "B", "A"]
console.log(myArray);
// → ["A", "B", "C"];


function reverseArrayInPlace(myArray) {
    for(let i = myArray.length - 1; i >= 0; i--){
        console.log(myArray[i]);
    }
}

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]