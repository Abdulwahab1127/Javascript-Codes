const Marvel = ["Thor","IronMan","Captain America","SpiderMan"]
const Dc = ["Superman","Batman","Aquaman","Flash"]

// const all_heros = Dc.concat(Marvel)
// console.log(all_heros);

// Another method for concat(Merging two arrays) is SPREAD

// const new_heros = [...Marvel,...Dc]
// console.log(new_heros);

const nested_array = [1,2, [3,4, [5,6,7, [8,9,10] ] ] ]
// Will Fix only for 2 levels of nesting
// const fixed_nested_array = nested_array.flat(2)

// Will Fix only for All levels of nesting
// const fixed_nested_array = nested_array.flat(Infinity)

// console.log(fixed_nested_array);


let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400

//Creating array from existing Elements 
const scoreArray = Array.of(score1,score2,score3,score4)
console.log(scoreArray);
