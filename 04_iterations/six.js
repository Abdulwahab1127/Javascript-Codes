// USING REDUCE FUNCTION HERE

const newArray = [1,3,4]

const sumOfArray = newArray.reduce(function (acc,cur){

    // console.log("Accumulated Value :"+acc+ " Current Value :" +cur);
    
    return acc + cur


},0 )

// console.log("Final Value :" +sumOfArray);

// EXAMPLE FOR REDUCE

const cart = [
    { id: 1, name: "Laptop", price: 1200, quantity: 1 },
    { id: 2, name: "Headphones", price: 200, quantity: 2 },
    { id: 3, name: "Mouse", price: 50, quantity: 1 },
    { id: 4, name: "Keyboard", price: 100, quantity: 1 },
    { id: 5, name: "Monitor", price: 300, quantity: 2 }
];

const totalCartSum = cart.reduce( (acc,current) => acc+current.price,0)

//console.log(totalCartSum);

// Finding Expensive item

const ExpItem = cart.reduce(function(exp , current){

    if(current > exp){
        exp = current
    }

    return exp

})

console.log(ExpItem);
