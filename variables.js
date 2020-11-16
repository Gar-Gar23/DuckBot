/*     variables
    defined using the keyword variable 
    although in older editions const  and let we used to define variables
    these are not supported on older browsers , most often we just use the var keyword

*/

var x = 5 // var is  uesed to defing and = is uesed to assign
var y = 6
var z = x +  // this is an expression a computable algorrithm
console.log(z)

var price1 = 10  // here our variables are holding the values  of 10 and 15 respectively
var price2 = 15 // remember that '=' is an assignment operator not 'equal to'
var total = price1 + price2 // the total can be clearly calculated just like in algebra0
console.log(total)

//      the assignment operator

g = 22 + g /* this does not make sense agebraically but it is valid code since = is just
            assigning the value g + 22 to g "equal to" is written as == in JS

    Variables must be identified ' v = 8 ' for example
    names must begin with letters, $, and _    NAmes are also case senseitive 
    var Y
    var y are different
            */
             
            // declaring /creating variables in js
    var ducket; // this is and unidentified variable sinsce nothing has been assigned to it
    var ducket = "money" // here we assigned a text tring  to the unid value

                        /* gooodPractices state that we should define all var at the top of 
                        script
            a variable can contain many values since var can hold text and numbers
            seperate values with , */
    var car = "corvette", 560, "silver"; 
     // declaration scan span many lines as well
    /* variables can be declared without a values. that value can be something that is 
    calculated, provided, later or wait on a user to make input
    */ 
   var space = "stars"; // re- declaring variables  will not change the variabble's value 
   var space;   // here the value of 'stars' will be added every time the variable is called

var h = 5 * 6 +3;    //    JS MATH 

var $$ = "cash" + ' ' + 'money'  // this adding of strings is called concatenated


 