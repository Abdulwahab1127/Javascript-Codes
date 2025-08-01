
const [NumberPlate] = "ABC1234"; 
const Object =  {

    Name: "Car",
    "User" : "Hello WOrld",
    [NumberPlate] : "Hello",
    Color: "Red",
    Number: 213,
    

}

Object.Name = "NewCar"

// console.log(Object.Name);
// console.log(Object["User"]);
// console.log([NumberPlate]);

Object.greeting = function(){

    console.log(`Name of the user is, ${this.Name}`);
    
}

console.log(Object.greeting());


