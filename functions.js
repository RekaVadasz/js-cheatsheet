//FÜGGVÉNYEK LÉTERHOZÁSA
console.log(aFunction1()) //ez is működik, ha előtte íratom ki a függvényt, bár nem annyira logikus (hoisting of functions: a function már korábban elérhető, mint hogy létrehoztuk)
function aFunction1() {
    //ez a függvény belseje
    return "this is a function" //ez a függvény utolsó sora, ami ezután van, már nem fut le! For cikluson kívül érdemes elhelyezni
    // a függvény mindenképpen returnöl, ha lefuttatjuk. Ha nem adjuk meg returnt, akkor undefined-t ad vissza 
}
console.log(aFunction1()) // alapesetben inkább utána használjunk valamint, mint ahogy létrehoztuk

const aFunction2 = function() {
    // ez is egy függvény, egy változóba elmentve, majdnem ugyanúgy viselkedik, mintha a függvénynek neve lenne 
    return "this is another function saved in a variable"
}
console.log(aFunction2()) //minden változóba mentett dolog(függvény is lehet) értékéhez csak a változó létrehozása utáni sorokban férünk hozzá


function multiply(number1, number2) { // létrehozom a függvényt, 2 paramétere lesz 
    return number1 * number2;   // return: a 2 paraméter összeszorzott eredménye
  }
  
console.log(multiply(3,5)) //függvény meghívása, amikor adok neki 2 argumentumot

for (const item of arr) {
    console.log(item)
}



// IF/IF...ELSE/IF...ELSE IF...ELSE
const firstPerson = {
    name:"Peter",
    sex:"male" 
}

const secondPerson = {
    name:"Sarah",
    sex:"female"
}

function detectSex(person){
    console.log(person)
    if (person.sex === "female") { //ha az első feltétel teljesül, 
        return "This person is female." // az itt található utasítást hajtja végre
    } else if(person.sex === "male") { //itt bármennyi else if kritériumot megadhatunk
        return "This person is male."
    }else{ // ha egyik megadott feltétel sem teljesül, ez fog történni
        return "The person's sex is not female nor male."
    }
}

console.log(detectSex(firstPerson));

console.log(detectSex(secondPerson));

console.log(detectSex({
    name:"Penelope",
    sex:"female2"
}));