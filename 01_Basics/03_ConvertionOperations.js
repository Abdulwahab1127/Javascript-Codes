// NOTES

/**
 In JavaScript, type conversion refers to the process of converting one data type to another. There are two main types of conversion: implicit and explicit.

1. Implicit Type Conversion (Type Coercion):

This happens automatically when JavaScript tries to convert one data type to another, usually during operations between different types.

For example:

let result = '5' + 2;  // Result is '52', because 2 is coerced to a string and concatenated.

Here, the number 2 is automatically converted to a string, and the result is '52'.

2. Explicit Type Conversion (Type Casting):

This occurs when you manually convert one type to another using functions like Number(), String(), Boolean(), etc.

For example:

let num = '10';
let convertedNum = Number(num);  // Explicit conversion from string to number.
console.log(convertedNum);  // Outputs: 10

Common Type Conversion Functions:

String(): Converts a value to a string.

String(123);  // "123"

Number(): Converts a value to a number.

Number('123');  // 123
Number('abc');  // NaN (Not a Number)

Boolean(): Converts a value to a boolean.

Boolean(1);    // true
Boolean(0);    // false
Boolean('');   // false
Boolean('Hello');  // true


Special Case: Null and Undefined

null is automatically converted to 0 in numeric contexts.

undefined is converted to NaN when used in numeric contexts.


Example:

let a = null + 1;  // 1, because null is coerced to 0
let b = undefined + 1;  // NaN, because undefined is coerced to NaN




Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
 */
let score = "5";

console.log(typeof score);

let NumConvert = parseInt(score)
console.log(typeof NumConvert);

console.log(NumConvert);