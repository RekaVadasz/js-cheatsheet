//FOR LOOP 
const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

console.log(cars.length) //megszámolja, hány elemnből áll a tömb
console.log(cars[2]) //kiadja a tömb 2-es indexű (3.) elemét


const args = [34, 15, 88, 2] 

function findSmallestInt() {
    let min = Infinity;
    for(let i = 0; i < arguments.length; i++){ //végigmegy a tömb összes elemén 
      if (arguments[i] < min) { //megcizsgálja minden elemnél, hogy fennáll-e az adott feltétel
        min = arguments[i] // ha igen, akkor ezt végrehajtja (min változó értékét megváltoztatja az éppen aktuális tömb elemére)
      }
    }
    return min; //miután végigfutott a ciklus, returnöli a változó értékét
}

console.log(findSmallestInt(34,15,88,2));


function findMax() {
    let max = -Infinity;
    for(let i = 0; i < arguments.length; i++) {
      if (arguments[i] > max) {
        max = arguments[i];
      }
    }
    return max;
  } 

console.log(findMax(4,5,6))

//FOR... IN 
//tömbökön használatos
const loadEvent = function (){ //változóba mentett függvény, így használhatjuk argumentumként egy másik függvényben (callback függvény)
    const rootElement = document.getElementById("root"); //ennek a változónak az értéke nem fog változni, ezért const
    let beerDiv = "" // a változó értéke változni fog, mivel mindig hozzáadunk egy új div-et a következő sör adataival
    for (let beerType of beers.cards) {      // végigmegy a cards tömbön, és annyiszor csinálja a függvény utasításait, ahány eleme van a beer.cards-nak 
        beerDiv += beerCardComponent(beerType.title, beerType.sub, beerType.text) //hozzáadunk a beerDiv értékéhez mindig egy újabb div-et, kiegészítva az éppen aktuális tömb elem adataival (beerCardComponent: egy másik függvényben írtuk le)
    }
    rootElement.insertAdjacentHTML("beforeend", beerDiv) //argumentumok: (position, egy olyan string amit html-é tud konvertálni). Minden ciklus lefutásakor beilleszt egy újabb divet a html záró tag elé
}