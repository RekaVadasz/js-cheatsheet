/* 
const, let és var kulcsszavakkal hozunk létre változókat
az egyenlőségjel baloldalán szerepel a változó neve, jobb oldalán az ehhez tartozó érték
*/


//PRIMITÍV ADATTÍPUSOK
//A primitívek a következők: string (szöveg), number, boolean (true/false), undefined, null. 

let aString = "this is a string"; // MINDIG idézőjelbe írjuk a stringet. Backtick-el (`) többsoros stringet tudunk létrehozni, időzőjelekkel (' ' ), (" ") egysorosat
let aNumber = 1; //nem szabad időzelejbe rakni a számot
let aBoolean = false; // nem szabad booleant idézőjelbe rakni
let anUndefined = undefined; // nem szabad idézőjelbe rakni az undefined-t. Típusa: undefined.Nincs meghatározva az értéke valaminek.
let aNull = null; // nem szabad időzőjelbe rakni a null-t. Típusa: object. Szándékosan hiányzó érték. 
let notANumber = NaN; // Not a Number - nincs idézőjelben. Típusa: number. Pl. helytelen matematikai művelet eredménye

console.log(typeof notANumber)  // typeof operator: visszadja egy változó típusát (itt: number lesz) 





//TÖMBÖK
//tömb felsorolás: ciklussal tudunk végigmenni rajta
const arr = [34, 15, 88, 2]  //ez egy tömb

for (let index = 0; index < arr.length; index++) { //adott kód végrehajtása újra és újra, amíg egy bizonyos feltétel fennáll (itt: index < arr.length)
    console.log(arr[index])    //ezt ismétli
}

for (const item of arr) { //végigiterál egy adott tömb összes elemén (item: tömb eleme, bárhogy elnevezhetjük)
    console.log(item)
}