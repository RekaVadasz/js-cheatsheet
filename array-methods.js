//-----------------.pop()
// leveszi a tömb utolsó elemét 
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
console.log(fruits);


//-------------------.push()
//új elemet ad a tömbhöz (az ultosó helyre)
fruits.push("Kiwi");
console.log(fruits);


//-------------.shift
//leveszi a tömb legelső elemét, így minden elem eggyel alacsonyabb indexűvé válik
const otherFruits = ["Banana", "Orange", "Apple", "Mango"];
otherFruits.shift();
console.log(otherFruits);


//-----------.unshift
//új elemet ad a tömb elejére, minden meglévő elem indexe eggyel eltolódik
otherFruits.unshift("Lemon")
console.log(otherFruits)

//-------------.length (property)
const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
console.log(cars.length) //megszámolja, hány elemnből áll a tömb (6)


//------------------.forEach.(); 
// a tömb minden elemére lefuttat egy függvényt



//2 DIMENSIONAL ARRAYS
const arr1 = [
    [111,  4, -5, -9,  3 ],
    [ 6, -4, -7,  4, -5 ],
    [ 3,  5,  0, -9, -1 ],
    [ 1,  5, -7, -8, -9 ],
    [-3,  2,  1, -5,  6 ]
  ];

const arr2 = [
    [-1, 4, -5, -9, 3],
    [6, 8, -7, 4, -5],
    [3, 5, 1, -9, -1],
    [1, 5, -7, 15, -9],
    [-3, 2, 1, -5, -6]
];

function matrix(array) { //changes values on the diagonal of the array
    for (let i = 0; i < array.length; i++) {
        if (array[i][i] < 0) {
            array[i][i] = 0;
        } else {
            array[i][i] = 1;
        }
    }
    return array;
}
console.log(matrix(arr1));


//-----------------.filter()------------------
//creates a new array filled with elements that pass a test provided by a function.

const flock = [true,  true,  true,  false, // true means sheep is present, have to count them
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true];

function countSheeps(arrayOfSheeps) {
    let presentSheep = arrayOfSheeps.filter(checkIfPresent); // or: .filter(Boolean): null and undefined can be handled, if not "truthy", removed
    function checkIfPresent (sheep) {
        return sheep === true;
    }
    return presentSheep.length;
    }

console.log(countSheeps(flock));





//------------------.reduce()



//---------------- .reverse(), .join() ----------------
let newStr = "world"; //we want to reverse this string
function solution(str){
  const array = [];
  for (let i = 0; i < str.length; i++) {
      array.push(str.slice(i, i + 1));
  }
  const newArray = array.reverse(); //.reverse(): megfordítja egy tömb elemeinek sorrendjét
  console.log(newArray);
  return newArray.join(""); 

}



//-------------------.join() ----------------
//egy tömb elemeit stringgé kapcsolja össze. Default: vesszővel van elválasztva, de bármi megadható. Pl. (" and ")
const inputWords = ['hello', 'world', 'this', 'is', 'great'];
function smash (words) {
    return words.join(" ");
};



//------------ find() --------------
//the find() method returns the value of the first element that passes a test (executes a function for each array element.)
const ages = [3, 10, 18, 20];
console.log(ages.find(checkAge));
function checkAge(age) {
    return age > 18;
}


//-------------- .indexOf()--------------
//returns the first index (position) of a specified value.
const stack1 = ['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'];
function findNeedle1(haystack) {
    return `found the needle at position ${haystack.indexOf("needle")}`
}
console.log(findNeedle1(stack1))


//------------- .findIndex()------------------
//returns the index (position) of the first element that passes a test. executes a function for each array element. 

const stack2 = ['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'];
function findNeedle2(haystack) {
    let position = haystack.findIndex(findStuff);
    function findStuff(element){ // "element": item of the array, can have any name
        return element === "needle";
    }
    return `found the needle at position ${position}`
  }

  console.log(findNeedle2(stack2))


//---------- .map()------------------
// creates a new array from calling a function for every array element.

const numberArray = [1, 2, 3]
  function maps(x){
    const newArr = x.map( item => item * 2); //item: array item, can have any name, argument of the function passed to .map() method
    return newArr;
}
console.log(maps(numberArray))

//---------------- .sort ----------------
let sorted = [...arr].sort(function(a, b){return a-b}); // új tömböt hoz létre, és nem az eredetit mutálja így a sort method
