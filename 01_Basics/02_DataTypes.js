//NOTES

// You can use the typeof operator to determine the data type of a variable in JavaScript. 

// For example, typeof 42 returns “number”, and typeof “hello” returns “string”.
//console.log(typeof 42);  // Outputs: "number"
/**
 JavaScript primarily has six basic data types: Number, String, Boolean, Undefined, Null, and Object. 
 Additionally, ES6 introduced Symbol for unique identifiers, and ES2020 introduced BigInt for large integers. 

 ECMAScript standards are crucial as they define the specifications for JavaScript. 
 Key milestones include ES6 in 2015, which introduced major features like arrow functions, let/const, and classes. 
 ES2017 brought in async/await for better asynchronous programming.
 
*/  

let number = 5;
let string = "Hello, World!";
let boolean = true/false;



let helloObject = {

    Name: "Abdul Wahab",
    Age: 15,
    Address: "Kano",
    //We can also use Array in the Object (Just got to know lol)

    // array : ["Hello " ,"This Is ","Array Usage",1, 2],

}
//console.table(helloObject);


let hello = ["Hello " ,"This Is ","Array Usage",1, 2];
//console.table(array);

function Testing(number){

    for (let number = 0; number < 5; number++) {
        
        const element = number;

        console.log(element);

    }
      
    
}


Testing();
console.log();

console.log(number);
