
// function SumNumbers (Number1 , Number2){

//     let Sum = Number1 + Number2;
//     return Sum;

// }

// const SumOfNumbers = SumNumbers(12,8)
// console.log(SumOfNumbers);

// function calculation (number1, number2,...num1){

//     return num1;

// }
// console.log(calculation(200,100,450,500,780));

const User = {
    Name: "Abdul Wahab",
    Age: 22
}

function objectFunction (anyobject){

        console.log(`Name of User is ${anyobject.Name} & Age of User is ${anyobject.Age}`);
        
}

// objectFunction(User)

// Using Objects Here
// objectFunction({
//     Name: "Ali Zain",
//     Age: 24
// })

// Using Arrays Here

function ArrayFunction (anyArray){

    console.log(...anyArray);
    
}
const array = [5,45,78,65,213,49]
console.log(ArrayFunction(array))