/* 
const, let és var kulcsszavakkal hozunk létre változókat

az egyenlőségjel baloldalán szerepel a változó neve, jobb oldalán az ehhez tartozó érték

A primitívek a következők: string (szöveg), number, boolean (true/false), undefined, null. 
*/

let aString = "this is a string"; // MINDIG idézőjelbe írjuk a stringet. Backtick-el (`) többsoros stringet tudunk létrehozni, időzőjelekkel (' ' ), (" ") egysorosat

let aNumber = 1; //nem szabad időzelejbe rakni a számot

let aBoolean = false; // nem szabad booleant idézőjelbe rakni

let anUndefined = undefined; // nem szabad idézőjelbe rakni az undefined-t. Típusa: undefined

let aNull = null; // nem szabad időzőjelbe rakni a null-t. Típusa: object

let notANumber = NaN; // Not a Number - nincs idézőjelben. Típusa: number

console.log(typeof notANumber) 

console.log(aFunction1()) //ez is működik, ha előtte íratom ki a függvényt, bár nem annyira logikus

function aFunction1() {
    //ez a függvény belseje
    
    // a függvény mindenképpen returnöl, ha lefuttatjuk. Ha nem adjuk meg returnt, akkor undefined-t ad vissza 
    return "this is a function"
}

console.log(aFunction1()) // alapesetben inkább utána használjunk valamint, mint haogy létrehoztuk

const aFunction2 = function() {
    // ez is egy függvény, egy változóba elmentve, majdnem ugyanúgy viselkedik, mintha a függvénynek neve lenne 
    return "this is another function"
}

console.log(aFunction2()) //minden változóba mentett dolog értékéhez csak a változó létrehozása utáni sorokban férünk hozzá

console.log("0" == 0);

console.log("0" === 0);

//töm/ felsorolás: ciklussal tudunk végigmenni rajta

const arr = [34, 15, 88, 2]  //ez egy tömb

for (let index = 0; index < arr.length; index++) {
    console.log(arr[index])    
}

for (const item of arr) {
    console.log(item)
}