//ARITHMETIC OPERATORS

let z = 5 + 2; // összeadás

let nr = 3 * 5; //szorzás

let y = 10 / 2; // osztás

let number = 10 % 5; //modulus / maradékos osztás

z++; // increment operator: hozzáad z változó értékéhez +1 et
console.log(z);

nr--; //decrement operator: levon a változó értékéből -1-et
console.log(nr);


//ASSIGMENT OPERATORS
let kutya = "Róki" // = assignment operator: assigns a value to a variable

let x = 10;
x += 5; //addition assigment operator, hozzáad egy értéket a változó értékéhez, x új értéke 15 lesz
//ugyanígy működik: -=, *=, /=, %=, **=


//COMPARISION OPERATORS

console.log("0" == 0); // értéke egyenlő

console.log("0" === 0); //értéke és típusa is egyenlő

//STRING OPERATORS
let text1 = "John";
let text2 = "Doe";
let text3 = text1 + " " + text2; // concatenation operator: concatenate strings
console.log(text3) //"John Doe"

x = 5 + 5; //10
y = "5" + 5; //55
z = "Hello" + 5; //Hello5
let a = 5 + "Volvo" // 5Volvo
// DE: 
let b = 5 + 5 + "Volvo" // 10Volvo-t fog eredményezni, mivel a js először összeadja a 2 számot balról jobbra haladva
