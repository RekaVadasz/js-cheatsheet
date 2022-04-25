/* Scope determines the accessibility of variables, objects, and functions from different parts of the code. */


/* BLOCK SCOPE
let , const: have block scope
variables declared inside a { } block cannot be accessed from outside the block:

*/

{
    let x = 2;
  }
  // x can NOT be used here

/* LOCAL SCOPE
Variables declared within a JavaScript function, become LOCAL to the function.
*/

// code here can NOT use carName
function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
  }
  // code here can NOT use carName

/* FUNCTION SCOPE
JavaScript has function scope: Each function creates a new scope.
var, let and const all have function scope
*/

/* GLOBAL SCOPE
A variable declared outside a function, becomes GLOBAL.
Global variables can be accessed from anywhere in a JavaScript program.
*/

var x = 2;       // Global scope
let x = 2;       // Global scope
const x = 2;       // Global scope