// Real-Life Analogy:
// Imagine you're ordering a pizza 🍕:

// You place the order (function starts).

// You give them your phone number (callback).

// When the pizza is ready, they call you back to notify (invoke your callback).

//______________________________________________________________________________________

// function greetUser(name, callback) {
//     console.log("Hello " + name);
//     callback(); // call the passed-in function
//   }
  
//   function sayBye() {
//     console.log("CallBacked in Function!");
//   }
  
//   greetUser("Wahab", sayBye);
  
//______________________________________________________________________________________

// function maths (a , b , fun){

//     result = a + b;

//     fun(result);

// }

// maths(5 , 7, function(sum){

//     console.log("Sum of Values: "+ sum);
    

// });

//________________________________________________________________________________________

// function welcome(name, showmsg) {
//     showmsg(name);
//   }
  
//   function showMessage(n) {
//     console.log("Welcome, " + n + "!");
//   }
  
//   welcome("Ali", showMessage); // Welcome,Ali!
  
//_________________________________________________________________________________________

// function fetchData(callback) {
//     setTimeout(() => {
//       console.log("Fetching data...");
//       callback("Data loaded");
//     }, 1000);
//   }
  
//   let callback = function (hello) {
//     console.log("Callback says:", hello);
//   };

//   fetchData(callback);

//_____________________________________________________________________________________

function delayedGreet (name , callback){

    setTimeout(() => {

        console.log("Sending Name to Callback...");
        
        callback(name);

    },2000);

}
 
//Nested Calling Back!
delayedGreet ("Abdul Wahab", function(helo){
    console.log("Called Back Name is: " + helo);
    
    
    delayedGreet("JavaScript", function (next) {
        console.log("Learning " + next + " is fun!");
      });
});


  