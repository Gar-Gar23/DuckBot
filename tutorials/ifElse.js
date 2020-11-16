/* if is ues to sepecfify a block of code to be executed, 'if' specified cond. is true
    else is used to specify a block of code to be executed if the condiontion is false
    else if to specify a new condion to test if first condition is false
    switch to specify t many alternatives blocks of code to be executed 
*/
 /*     syntax
    if (condion) {// code being executed if true}
       '{}' are used to seperate the blocks of code/ contions being set seperated by ;
 */   

var greeting = "Hello friend"    // what is our initial statement
    if (new Date().getHours() < 15){  //condion that is being set for the loop to start
        greeting = "good day"  // what happens when condition is true
    }
    console.log(greeting) // tell it to print the result 

    /* the "else if" statement is used when the condtion could be false

*/
    var Hello = "Hello, my friend." // initial statement
    if ( new Date().getHours() < 12 ) { Hello = 'Good, morning'; }// block of code to be executed 
    else { Hello = 'Good evening'; // block of code to be executed if true
 } 
console.log(Hello) // print in the console


//  the ' else if ' statement if the first contion is false

var words = 'What time is it?' // what the statment is
 if (new Date ().getHours() < 10) {words = "It is morning" ; } //first contion can return true
 else if(new Date ().getHours() < 15) {words = 'It is afternoon'; }  // second cdn. return true
 else { words = 'It is evening'; }// if false then this contidion
 console.log(words)