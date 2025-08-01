let index = 0
while (index != 5) {
    
    // console.log("Current Value is " +index);
    // console.log("Next Value is " +(index+1));

    index++;
}

let myArray = ["Flash" , "Superman", "Ironman"]

while (index < myArray.length) {

    // console.log("Value is " + myArray[index]);
    
    index++;
}

// DO WHILE LOOP

let score = 1;
do {

    // console.log("Score is " +score);
    score = 12

} while (score < 11);

// FOR EACH LOOP

myArray.forEach (function (numm) {

    // console.log(numm);
    

})

// DOT MAP 

let numArray = [1,2,3,4,5]

let newArray = numArray.map(

    numberr => numberr*2

)
// console.log(newArray);

// First Even Number
let EvenNumber = numArray.find(

    numberr => numberr % 2 == 0
)
// console.log(EvenNumber);

// Sorting
let unSortedArray = [6,9,3,4,56,23,87]

let sortedArrayinAsc = unSortedArray.sort(function(a,b){

    return a - b;

})
let sortedArrayinDes = unSortedArray.sort(function(a,b){

    return b - a;

})

// console.log(sortedArrayinAsc);
// console.log(sortedArrayinDes);

// FOR OF LOOP

const array = [1,2,3,4,5,6,7]

// IT SKIPS THE SPACE
const greeting = "Hello World" 
for (const variable of greeting) {
    if (variable === " ") {
        continue
    }else
        console.log(variable);
    
}
