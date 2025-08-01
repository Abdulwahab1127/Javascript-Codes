//NUMBERS

let num = 10;
let balance = new Number(100)
// console.log(num);
// console.log(balance)

let cash = 1000000

// console.log(cash.toLocaleString('en-IN'));

//MATHS

//console.log(Math.floor(Math.random()*10 +1));

let min = 5;
let max = 15;

for (let index = 0; index < 10; index++) {
    console.log(Math.floor(Math.random()*(max - min +1)+ min));
}
