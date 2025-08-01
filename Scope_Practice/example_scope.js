var language = "JS";

function outer() {
  let language = "Python";
  if (true) {
    let language = "C++";
    console.log(language); // C++
  }
  console.log(language); //Python
}

outer();
console.log(language); // JS

//_____________________________________________________________________________

function checkAge(age) {
    if (age >= 18) {
      let isAdult = true; // Block scope
      console.log("Adult");
    } else {
      let isAdult = false; // Block scope
      console.log("Minor");
    }
  
    // Try to access isAdult outside the block
    console.log("isAdult value:", isAdult); 
  }
  
  checkAge(20);
  