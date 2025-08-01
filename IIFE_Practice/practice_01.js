//IIFE stands for Immediately Invoked Function Expression | Self Executing Function 

//_____________________________________________________________

console.log("\nFirst Question\n");

(function helo () {

    let username = "Abdul"
    console.log(username);
})();

//_____________________________________________________________

console.log("\nSecond Question\n");

//Arrow Function
( () => {

    let username = "Abdul Wahab Arrow"
    console.log(username);
})();

//_____________________________________________________________

console.log("\nThird Question\n");

( () => {
    let secret = "Top Secret!";
    console.log("Inside IIFE:", secret);
  })();
  
  //Outside Block scope , so undefined Output 
  console.log("Outside IIFE:", typeof secret); //

//_____________________________________________________________

console.log("\nFourth Question\n");  

(function () {
    let count = 0;
    while (count <= 10)
    {
        
        console.log("Count:", count);
        count++;
    }
  })();
  
  console.log(count); // ?
  
//_____________________________________________________________

console.log("\nFifth Question\n");  

const app = (function () {
    let data = "hidden";
    return {
      reveal: function () {
        console.log(data);
      }
    };
  })();
  
  app.reveal(); // Hidden
  console.log(data); // Error
  
