let numbers = [10,25,30,45,45,60,90,80];

// const evenNum = numbers.filter(numbers => numbers % 2 == 0)
// console.log(evenNum);

// Q1 Find the largest number in an array.

let max = numbers[0];

for (let i=0; i<numbers.length;i++){

    if(max < numbers[i]){
        max = numbers[i]
    }

}
console.log(max);

