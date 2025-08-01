//Arrays

const MyArray = [1,2,3,4,5,6]

const heros = ["Ali", "Zain", "Etc"]

// console.table(heros);

// console.table(MyArray)

// console.log(heros[2]);

// Arrays Methods

// MyArray.push(2)

// Remove Value from Start
//  MyArray.shift()
// Add Value in Start
//  MyArray.unshift(9)


// console.log(heros.includes("Ali"));
// console.log(heros.indexOf("Ali"));

// const newArray = MyArray.join()


// console.log(newArray);
// console.log(typeof newArray);
// console.log(typeof MyArray);

// console.log(MyArray);

const cities = ["Tokyo","Cairo","Los Angeles","Paris","Seattle"];

const newCity = cities.slice(0,3)
console.log(cities);
console.log(newCity);
console.log();

const newCity2 = cities.splice(2)

console.log(newCity2);
console.log(cities);