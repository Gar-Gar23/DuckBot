// declarations are hoisted in JS a var can be declared after it has been used (assigned)
// also the var can be used after it has been used as well


x = 5; // here the var is being initialized 
console.log(x)  // here that var is being use 
var x; // here the var is being declared

var y; // here the variable is being declared
y = 15  // here  a values is being assigned\
console.log(y) // here the variable is uesed and displayed

/* what 'hoisting' is ; the moving of all declarations to the top of the scope  ( top of =
 current script or pr function

 var defined with let or const are hoisted to the top of the block but not , activated
 So, the block of code is aware of the var, but it cannot be used until it has been declared
 using let or const on undeclared var result in ' ReferenceError ' 
 the undeclared var sits in a "temporal dead zone" or 'limbo' until they are being declared
 */
            vegetable = 'celery';  // here the var is being assinged
            console.log(vegetable); // here the var is being initialized 
            let vegetable; // used but a var has still not been declared to the block
            // var " " = ' '  is the declaration that is missing

//  JS Initializations are not hoisted, but declarations are

var b = 3; // we initinalize x
var B = 7;  // we initialize y
console.log(b + ' ' + B) // here  the var are being displayed (called)
 

// or this example
var v = 10
console.log(y + ' ' + Y)
var Y = 7 // here the y is the only thing that it hoised due to the declaration of Y before 
// the initialization

var j = 5 // this is initialization
var k; // this is a declaration
console.log(j)  //displaying the element
k = 7;  // here var k is being assigned a value

//always declare varibles at the top, good practices