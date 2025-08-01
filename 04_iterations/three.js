// WE USE FOR IN FOR OBJECTS
const myObject = {

    JS: "Javascript",
    CPP : "C++",
    SWIFT : "Swift for Apple"

}

for (const key in myObject) {

    // console.log(key + " Shortcut for " + myObject[key]);
  
}

// Now lets try to use it for Arrays too
// WORKS FINE
const newArray = ["Flash" , "Spiderman", "Superman", "Ironman"]

for (const key in newArray) {
   
    // console.log(newArray[key]);
   
}

// Now Lets try on Maps
// We Cant use (FOR IN) AND (FOR OF) on Maps 
const map = new Map ()
map.set('IN' , "INDIA")
map.set('PK' , "PAKISTAN")
map.set('NZ' , "NEW ZELAND")


//Using For of Loop Here
for (const element of map) {
    // console.log(element);
    
}
// Using For In Loop
for (const key in map) {
   
    console.log(key);
   
}
// +++++++++++++++++++++++++++++++++++++++++++++

