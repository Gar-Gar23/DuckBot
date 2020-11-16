//    variables declared globally can be called  anywhere out side functions,
//   withing  the JS program 

var carName = 'Nissan'// the initial call


// carname here can use car name

function myfinction(//carName can NOT be called here)

// it can be called here as well

//       Function scope varibles declared locally ( inside functions)
//  function scope ,calls must be called withing the function { block of code}
function plop() {
    var Plop = 'splash'; // local calls are made here
}

// code can not be called here


/* JS block scope
 variables declared witht hte var keyword can NOT have Block Scope
 variables declared inside a block {} can be accsessed from outside the block
*/
        {
            var x= w
        }
    // x can be used here 

    /* variables declared with the ' let ' keyword  can have block scope 
        variables declared inside a block {}  can not be accsessed from out side
    */ 
   {
       let X = 4.22
   }
    // X can not be used here

   /* redeclareing the variables  
   using the var keyword  can cause problems outside the block since var can be 
   called out side the {}
   */ 
  var Y = 10; // here we are calling or assigning 10 to Y
  {
      var Y = 4 // here we are redeclaring the variable Y which Will cause problems
  }
  // here the redeclaring of Y is back to 10

  /* Using the let key word can fix this problem since it invokes a block only scope to the
     variable and will not redeclare the var outside the block
*/

var T = 15 // here we are declaring the variable outside the block has a value of 15
{
    let T = 7// here we  use let to variable wil not redeclare itself outside this block
}
// here we can reCall the variable value of 15

// using  a var loop 

var i = 5; // here we declare the value of 5 to i
for (var i = 0; i < 10; i++) {
    // here the variable is being redeclared to have value 10
}// here the value of i is 10
    


let w = 9 // here is the initial call ' value of 9 is assinged to var w
for (let i = 0; i < 10; i++){ // her we are attempeting tp redecalre the value of w to 10

}
/*here the w has the value of  9 sice the let key word makes 
the value outside the block invisible
/*


           variables out sde of the block have global  scope
*/
 
            var o = 4 // has global scpe
            
            let O = 4 // has global scope

            // In JS the ' Global Scope ' is the JS enviroment itself
            // In HTML the ' GLobal Scope ' is the HTML window


    /*      redeclaring variables , this can happen anywhere in a program 
        howerver redeclaring with let and  var in the same block or scope is not allowed
        */ 
        var h = 12 // h is 2
        // this is valid
        var h = 17 // h is now 17   



        var H = 7 
        let H = 10// this is not allowed 

    // usng let and let to redeclare is not allowed
         let l = 4 
         let l =13 // not allowed

    // using let and then var is not allowed
        let L = 6
        var L = 1 // not allowed

        // its all about scope , as long as they are in their own blocks
         let k = 2; // allowed
         {
             let k =16;   // just dont forget the ; to seperate the different blocks     
         }
         {
             let k = 14; // allowed 
         }
         