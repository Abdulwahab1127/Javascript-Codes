// Notes


/*  

    Lecture  # 1:
    Variables and Data Types
    const = can't be re-assigned a value and can't be declared again  (block scope)
    let = can be re-assigned a value but can't be declared again (block scope)
    var = it can be re-assigned a value and it can also be declared again  (Global scope)

    => Never use var in your code instead of let because of block and functional scope issues.
    # console.table([group of variables you want to show in tabular form])


    // Cannot change The const Variable Like Let and Var Variables

    // Updating the Variables that are assigned earlier 
    
    Prefer Not to use Var
    Because it causes issues in Block Scope and Functional Scope

const a = {
    prop1: 10,
    prop2: 9
}

// It is allowed
a.prop1 = 3

// It is not allowed
a = {
    b: 10,
    prop2: 9
}

*/ 

const accountId = 12345;
let accountName = "Abdul Wahab";
var accountBalance = "1000.0";

accountCity = "Lahore";


accountName = "Ali Ammar Raza";

accountBalance = "5000.0"    


console.table([accountId,accountName,accountBalance,accountCity]);


