const Object = {

    username : "Abdul Wahab",
    pass: "ABC123",
    ip: 123456789,
    user : function(){

        console.log(this);
        

    }

}

// We cant use This in Function Outside Object
// const idk = function (){

//     let Username = "HelloWahab"
//     console.log(this.Username);
    

// }
// idk()

// Object.user();

// Here We are Using Arrow Function
// const idk = () => {

//     let Username = "HelloWahab"
//     console.log(this);


// }
// idk();

//Holding arrow function in Variable
// Basic
// Explicit (Where we use Curly braces and Return Keyword)
const sum = (num1 , num2) => {

    return num1+num2;

}
// Implicit Arrow Function(We dont use Curly Braces and Return Keyword)
// const sumFun = (num1 , num2) =>  (num1+num2);
// const sumFun = (num1 , num2) =>  ({username: "Abdul Wahab"});
// console.table(sumFun(12,8));

const Person = {
    
    user : "Usama",
    
    pass : "abc123",
    
    message :function (){ 

       const inner= () => {
        
        console.log(`Hello, ${this.user}`)
       
    }
       inner(); 
    }

}

Person.message();