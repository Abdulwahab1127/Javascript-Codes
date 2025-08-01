const newArray = [1,2,3,4,5,6,7,8,9]

let array = []
//Filter Method to find Numbers
array = newArray.filter( (num) => num  %2 == 0)
// console.log(array);


// +++++++++++++++++++++++++++++++++++

// FOR EACH TO FILTER NUMBERS

newArray.forEach((number) => {
    if(number > 5){
        array.push(number)
    }

})
// console.log(array);


// +++++++++++++++++++++++++++++++++++
// FILTER EXAMPLES

const books = [
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, genre: "Fantasy", rating: 4.8 },
    { title: "1984", author: "George Orwell", year: 1949, genre: "Dystopian", rating: 4.7 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, genre: "Classic", rating: 4.9 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, genre: "Classic", rating: 4.5 },
    { title: "Dune", author: "Frank Herbert", year: 1965, genre: "Science Fiction", rating: 4.6 },
    { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", year: 1997, genre: "Fantasy", rating: 4.9 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951, genre: "Classic", rating: 4.3 },
    { title: "Brave New World", author: "Aldous Huxley", year: 1932, genre: "Dystopian", rating: 4.6 },
    { title: "The Martian", author: "Andy Weir", year: 2011, genre: "Science Fiction", rating: 4.7 },
    { title: "The Road", author: "Cormac McCarthy", year: 2006, genre: "Dystopian", rating: 4.2 }
];

// let findBook = books.filter( (bk) => {

//     return bk.rating >= 4.5

// })

let findBook = books.filter( (bk) => {

    return bk.rating >= 4.7 && bk.year > 1947

})
console.log(findBook);
