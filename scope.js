/* Scope determines the accessibility of variables, objects, and functions from different parts of the code. */


/* BLOCK SCOPE (e.g. if, for loop ...)
let , const: have block scope, var canNOT
variables declared inside a { } block cannot be accessed from outside the block:
*/

if (2 > 1 ){
  let x = 2;
  }
// console.log(x) - x can NOT be used here: x in not defined



/* FUNCTION SCOPE
JavaScript has function scope: Each function creates a new scope.
Variables declared within a JavaScript function, become LOCAL to the function.
var, let and const all CAN have function scope
*/

// code here can NOT use carName
function myFunction() {
  let carName = "Volvo";
  console.log(carName);
  // code here CAN use carName
}
// code here can NOT use carName
myFunction();



/* GLOBAL SCOPE
A variable declared outside a function, becomes GLOBAL.
Global variables can be accessed from anywhere in a JavaScript program.
It is nor recommended to use. 
*/

var number1 = 2;       // Global scope
let number2 = 2;       // Global scope
const number3 = 2;       // Global scope




/* HOISTING 
JavaScript declarations are hoisted: moving all declarations to the top of the current scope

var: már a kód 0. sorában elérhető (az adott scope-ban), deklarálódik és inicializálódik is "undefined" értékkel. A kód "tud" arról, hogy létezik, de az "undefined" értéket társítja hozzá
*/

console.log(animal)
var animal = "dog";

/*let, const: 
0. sorban a kód már hozzáfér a változó nevéhez, tehát tud róla, hogy létezik (csak deklarálódik), viszont az értéke nem hozzáférhető, nem fog "undefined"-ot hozzárendelni értékként, így hiba lesz ("Cannott access variable")
*/

//console.log(bird) // Reference error: Cannot access 'bird' before initialization
let bird = "swan";

let house;
console.log(house); //itt viszont "undefined" lesz a változó értéke. mivel már deklaráltuk de még nem inicializáltuk


//const tree; //ez szintaktikailag hibás, a const változót deklaráláskor egyből inicializálni is kell (mivel az értéke nem változtatható) - "Syntax Error"
const tree = "Oak tree";