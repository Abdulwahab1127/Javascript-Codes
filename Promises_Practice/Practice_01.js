/*
1. What is a Promise?
A Promise is a placeholder for a future value.

In simple words:

“I promise to give you something in the future — either a ✅ value, or a ❌ reason I couldn’t.”

*/

//_______________________Code Sections______________________________

// let p = new Promise((resolve, reject) => {
//     resolve("Done");
//   });
//   p.then(msg => console.log(msg)); //Done


//__________________________________________________________________

// function fetchData() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve("Data fetched"), 1000);
//     });
//   }
  
//   fetchData()
//     .then(msg => console.log(msg))
//     .catch(err => console.log(err)); //Done
  

//__________________________________________________________________

// function riskyTask() {
//     return new Promise((resolve, reject) => {
//       let success = Math.random() > 0.5;
//       if (success) {
//         resolve("Task succeeded");
//       }else {
//         reject("Task failed");
//       }
//     });
//   }
  
//   riskyTask()
//     .then(msg => console.log(msg))
//     .catch(err => console.log(err)); //Both AFter trying 5-6 times
  

//__________________________________________________________________

function user (username , pass){

    return new Promise ((resolve, reject) =>{

        if(username === "admin" && pass === 12345){
            //Testing Timeout Within Promise for Practice
            setTimeout(() => {
                resolve("User Logged In")
            }, 1000);
            
        }else{
            reject("Wrong Credentials");
        }

    });


}
    user("admin" , 12345)
    .then(msg => console.log(msg))//Only Runs When Resolved
    .catch(err => console.log(err)) //Shows Error when Rejected


//__________________________________________________________________





//__________________________________________________________________