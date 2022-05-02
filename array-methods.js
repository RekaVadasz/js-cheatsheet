//.POP()
// leveszi a tömb utolsó elemét 
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
console.log(fruits);

//.PUSH()
//új elemet ad a tömbhöz (az ultosó helyre)
fruits.push("Kiwi");
console.log(fruits);

//.SHIFT
//leveszi a tömb legelső elemét, így minden elem eggyel alacsonyabb indexűvé válik
const otherFruits = ["Banana", "Orange", "Apple", "Mango"];
otherFruits.shift();
console.log(otherFruits);

//.UNSHIFT
//új elemet ad a tömb elejére, minden meglévő elem indexe eggyel eltolódik
otherFruits.unshift("Lemon")
console.log(otherFruits)

//Meerkat feladat
const meerkatParts = ["tail", "body", "head"];
function fixTheMeerkat(arr) { //ennek egyszerűbb megoldása: arr.reverse();
    let front = arr[0];
    let back = arr[2];
    arr.pop();
    arr.shift();
    arr.push(front);
    arr.unshift(back);
    return arr;
   }
console.log(fixTheMeerkat(meerkatParts))