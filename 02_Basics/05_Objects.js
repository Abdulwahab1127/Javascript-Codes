// Using Singleton OR we can say using constructor 

const NewObject = new Object ();
NewObject.Name = "Abdul Wahab"
NewObject.Degree = "BSE"
NewObject.Class = "A"

// console.log(NewObject);

const RegularUser = {

    Name : "Ali Zain",
    Age : 24,
    
    // Nested Object
    NewStudent : {
        Name : "Usama Qamar",
        Age: 21,
    }
    ,
    fun : function (){

        console.log(`Name of Regular Student is , ${this.Name}`);
        console.log(`Name of Nested Regular Student is , ${this.NewStudent.Name}`);
                
    }

}

// console.log(RegularUser.Name);
// console.log(RegularUser.NewStudent.Name);
// console.log(RegularUser.fun());

// USE to add Objects Just like arrays 
// const ObjThree = Object.assign({},NewObject , RegularUser , RegularUser.fun())
// console.log(ObjThree);

//Use to Seperate all the keys in Seperate Array
// console.log(Object.keys(RegularUser));
// Use to Seperate all the Values in Seperate Array
// console.log(Object.values(RegularUser));
// Use to Seperate all the Entries in Seperate Array
// console.log(Object.entries(NewObject));


// Checks if the Value Exist in that Object or not
// console.log(NewObject.hasOwnProperty('Age'));

// Object DeStructure For Easy Excess of Object Values
const {Name : NewName} = RegularUser.NewStudent
const {Name : RegularName} = RegularUser

// console.log(RegularName);
// console.log(NewName);
