// Simple Definition:
// async is a keyword you put before a function to make it return a Promise.

// await is used inside an async function to pause execution until a Promise is resolved or rejected.

// 🧠 Think of await as saying: “Wait here until I get the result, then continue.”

//________________________________________________________________________________

// async function showPosts() {

//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         const posts = await response.json(); // Wait for response body to load
//         console.log(posts);
 
//     }catch(error){
//         console.log("Faced Issue: " , error)

//     }
// }
  
//    showPosts();
  


//________________________________________________________________________________

// async function getUserData() {
//     try {
//       const res = await fetch("https://jsonplaceholder.typicode.com/users");
//       const data = await res.json();
//       console.log(data);
//     } catch (error) {
//       console.log("Something went wrong:", error);
//     }
//   }
//   getUserData();

//________________________________________________________________________________

function userLogin(username, password) {
    return new Promise((resolve, reject) => {
      if (username === "admin" && password === "1234") {
        setTimeout(() => 
            resolve("Login Success"), 1000);
      } else {
        reject("Login Failed");
      }
    });
  }
  
// //  userLogin("admin", "1234")
// //    .then(res => console.log(res))
// //    .catch(err => console.log(err));

async function userFlow (){
    try{
        const result = await userLogin("admin" , '1234');
        console.log("User Logged in ");

    }catch(error){
        console.log("Cridentials Wrong ", +error);
    }


}

userFlow();


//________________________________________________________________________________






//________________________________________________________________________________