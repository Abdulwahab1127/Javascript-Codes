/*
Real-Life Analogy:
Imagine:

>A parent gives money to a child.

>The child remembers that money even after the parent leaves.

In JavaScript terms:

>The child = inner function (closure)

>The parent = outer function

>The money = variables

*/

//____________________________________________________________________________

//let name= "Abdul"
// function outer() {
//     let name = "Wahab";
  
//     function inner() {
//       console.log("Hello " + name);
//     }
  
//     return inner; // returning the inner function
//   }
  
//   const greet = outer(); // outer runs and returns inner
//   greet(); // Hello Wahab
  
//____________________________________________________________________________

// function createCounter() {
//     let count = 0;
  
//     return function () {
//       count++;
//       console.log("Count:", count);
//     };
//   };
  
//   const counter1 = createCounter();
//   counter1(); // Count: 1
//   counter1(); // Count: 2
  
//   const counter2 = createCounter();
//   counter2(); // Count: 1
  
//____________________________________________________________________________


// function createAdder(x) {
//     return function(y) {
//       return x + y;
//     };
//   }
  
//   const add5 = createAdder(7);
//   console.log(add5(10)); // 7 + 10 

//____________________________________________________________________________

// function setup() {
//     var data = [];
  
//     for (var i = 0; i < 3; i++) {
//         //value of i is 3 because of using var , as it is function scoped not block scope
        
//       data[i] = function () {
//         console.log("Value of Array : " + i);
//       };
//     }
  
//     return data;
//   }
  
//   const functions = setup();
//   functions[0](); 
//   functions[1](); 
//   functions[2](); 
  

//____________________________________________________________________________

/* 
Problem Recap
We need to:

Declare a private variable balance inside a function.

Return an object that contains:

A deposit(amount) method (adds to balance).

A checkBalance() method (shows balance).

Make sure no one can directly access or modify balance from outside.

*/
function secureAccount (){

    let balance = 0;

    return {
        depositeAmount : function (amount){
            
            if(amount > 0){
            balance += amount;
            console.log("\nDeposite Amount :" + amount );
            
            }else{
                console.log("\nPlease Add Correct Amount");
            }

        },//DepositeFunction End 

        checkBalance : function() {
            console.log("\nTotal Balance Available :" + balance);
            
        },
    };//return 

}//function

const acc = secureAccount();
acc.checkBalance();

acc.depositeAmount(100);
acc.depositeAmount(0);

acc.checkBalance();