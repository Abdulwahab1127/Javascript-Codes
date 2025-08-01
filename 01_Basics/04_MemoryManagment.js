// Two Types of Memory Allocation 
// Stack and Heap 
// >>Stack (For Primitive Data Type)
//It Makes copies , so changes in copies wont affect original data

let MyName = "Abdul Wahab"

let anotherName = MyName;

anotherName = "ChaiaurCode"

// console.log(MyName);
// console.log(anotherName);


// >>Heap(For Non Primitive Data Types like Objects, Array, Functions)
//It Provides Reference in that object , so changes will affect original data

let ObjectOne = {

    Name: "Ali Zain",
    Age: 24,

}

let ObjectTwo = ObjectOne;

console.log(ObjectTwo.Name);

ObjectTwo.Name = "Muneed"

//Object Two has Reference of ObjectOne and if i make changes
// in ObjectOne then it will change in ObjectTwo aswell

console.log();

console.log(ObjectOne.Name);
console.log(ObjectTwo.Name);

//console.log(process.memoryUsage());