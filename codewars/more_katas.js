// Maximum Multiple

2,7 //6
3,10 //9
10,50 //50
7,17 //14
7,100 //98

function maxMultiple(divisor, bound){ //egyszerűbb megoldás: return bound-bound%divisor
    let maxNumber;
    for (let i = 1; i * divisor <= bound ; i++) {
        maxNumber = i * divisor;
    }
    return maxNumber;
}

console.log(maxMultiple(7,100));




//Thinkful - List Drills: Longest word

const arr1 = ['simple', 'is', 'better', 'than', 'complex']; //7
const arr2 = ['explicit', 'is', 'better', 'than', 'implicit']; //8
const arr3 = ['beautiful', 'is', 'better', 'than', 'ugly']; //9

function longest(words) {
    function countChar(string){
       return string.length;
    }
    const wordLengths = words.map(countChar);
    return Math.max(...wordLengths); 
  }
 
  console.log(longest(arr3)); 




/* //Factorial 
function factorial(n){
    let number = 1;
    for (let i = 1; i <= n; i++) {
        number = number * (n-i-2) * n;

    } 
    return number;
  }

  console.log(factorial(2)) */




//Sum of positive
const arr11 = [1,-4,7,12]
const arr12 = [1,-2,3,4,5]
const arr13 = [0]
const arr14 = [-1,-2,-3,-4,-5]


function positiveSum(arr) { //arrow functions are used below
    let positive = [];
    positive = arr.filter((value) => value > 0); //.filter() method: creates a new array filled with elements that pass a test provided by a function.
    
    /*   function isPositive(value) {
        return value > 0;
    } */
    
    return positive.reduce((sum, current) => sum + current, 0); //.reduce() method: returns a single value based on some calculation executed on an array
    
    /* 
    function reducer(sum , currentNr) {
        return sum + currentNr
    } */

}

console.log(positiveSum(arr14))




//Return negative

function makeNegative(num) {
    if (num <= 0)  {
        return num;
    } else {
        return 0 - num;
    }    
}

function makeNegativeShort(num) { //same as above but with conditional (ternary) operator
    return (num <=0) ?  num : 0 - num; //same as if... else statement
}
console.log(makeNegativeShort(-2))


//Reverse a string: .reverse(), .join()
let newStr = "world";
function solution(str){
  const array = [];
  for (let i = 0; i < str.length; i++) {
      array.push(str.slice(i, i + 1));
  }
  const newArray = array.reverse(); //.reverse(): megfordítja egy tömb elemeinek sorrendjét
  console.log(newArray);
  return newArray.join(""); // .join(): egy tömb elemeit stringgé kapcsolja össze. Default: vesszőval van elválasztva, de bármi megadható. Pl. (" and ")

}

console.log(solution(newStr))



// Grasshopper - Summation

var summation = function (num) {
    let result = 0;
    for (i = 1; i <= num; i++ ) {
      result += i;
      
    }
    
    
    return result;
  }

console.log(summation(4))



// Counting sheep...
const sheep = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true];
function countSheeps(arrayOfSheep) {
    let sheepNr = 0;
    for (const sheep of arrayOfSheep) {
        if (sheep === true) {
            sheepNr += 1;
        }
    }
    return sheepNr;
  }

  console.log(countSheeps(sheep));

//Century From Year
const year = 1900;
function century(year) {
    if (year % 100 === 0) {
        return year / 100;
    }else{
        return (Math.floor (year / 100)) + 1 //Math.floor: lefelé kerekít egész számra (párja: Math.ceil(), sima kerekítés: Math.round)
    }
  }
// vagy: return Math.ceil(year/100);
console.log(century(year));

function abbrevName(name){
    const arr = name.split(" ");
    const first = arr[0][0].toUpperCase();
    const second = arr[1][0].toUpperCase();
    return `${first}.${second}`;
  
}
console.log(abbrevName("Sam Harris"))

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
console.log(animals[0][0])



//Is n divisible by x and y?
function isDivisible(n, x, y) {
    if (n % x === 0 && n % y === 0) {
        return true;
    }else{
      return false;
    }
  }



//Convert number to reversed array of digits
/* function digitize(n){
    const arrayx = [];
    for (let index = 0; index < n.length; index++) {
    }

    arrayx.push("hello")
    const newArr = arrayx.reverse();
    return newArr;
}

digitize(348597); */

function digitize(n){
    const arrOfDigits = Array.from(String(n), Number);
    const newArray = arrOfDigits.reverse(); //.reverse(): megfordítja egy tömb elemeinek sorrendjét
    console.log(newArray);
    return newArray;
}  

console.log(digitize(348597))



//Count of positives / sum of negatives
const input = [];
function countPositivesSumNegatives(input) {
    if (input === null) {
        return [];
    }else if (input.length === 0){ //to check is array is empty
        return [];
    } else {
        const newArr = [];
        let count = 0;
        let sum = 0;
        for (const nr of input) {   
            if (nr > 0) {
                count += 1;
            } else if (nr < 0){
                sum += nr;
            } else {
            }
        }
        newArr.push(count);
        newArr.push(sum);
        return newArr;     
    }
}
console.log(countPositivesSumNegatives(input))



//Who likes it?
const names = ["Alex", "Jacob", "Mark", "Max"];
function likes(names) {
    if (names.length === 0) {
        return `no one likes this`
    } else if (names.length === 1){
        return `${names[0]} likes this`
    } else if (names.length === 2){
        return `${names[0]} and ${names[1]} like this`

    }else if (names.length === 3){  
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }else{
        return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
    }
}
console.log(likes(names))



//Calculate average
const numbers = [];
function find_average(array) {
    if (array.length === 0) {
        return 0;
    } else {
        let result = 0;
        for (const iterator of array) {
            result += iterator;
        }
        return result / array.length;
    }
}
console.log(find_average(numbers))

//Vowel Count
function getCount(str) {
    let vowelsCount = 0;
    for (let i = 0; i <= str.length; i++) {
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u"){
            vowelsCount +=1;
        }
    }    
    return vowelsCount;
}
console.log(getCount("abracadabra"))

//Exes and Ohs
const blah = "xxOo"
function XO(str) {
    let charX = 0;
    let charO = 0;
    for (let i = 0; i <= str.length; i++) {
        if (str[i] === "x" || str[i] === "X") {
            charX += 1;
        } else if (str[i] === "o" || str[i] === "O"){
            charO += 1;
        }        
    }
    if (charX === charO) {  
        return true;
    } else {
        return false;
    }
}
console.log(XO(blah))



//Sentence Smash
const inputWords = ['hello', 'world', 'this', 'is', 'great'];
function smash (words) {
    let result = "";
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        result += word;
        if (i !== words.length-1){
            result += " ";
        }
    }
    return result;
}
console.log(smash(inputWords))

//Shortest Word
const someWords = "bitcoin take over the world maybe who knows perhaps"
function findShort(s){
    const array = s.split(" ");
    let shortestLength = array[0].length;
    for (const item of array) {
        if (item.length < shortestLength) {
            shortestLength = item.length;
        } 
    }
    return shortestLength;
    
    /* const newArray = [];
    for (const item of array) {
        newArray.push(item.length)
    }
    return Math.min(...newArray) */
}
console.log(findShort(someWords))


//Are the numbers in order?
const list = [1, 6, 10, 18, 2, 4, 20];
function inAscOrder(arr) {
    let sorted = [...arr].sort(function(a, b){return a-b}); // új tömböt hoz létre, és nem az eredetit mutálja így a sort method
    console.log(sorted)
    console.log(arr)
    let result = true;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== sorted[i]) {
            result = false;
        }
    }
    return result

    /*
    let list = arr.toString();
    let newList = arr.sort(function(a, b){return a-b}).toString();
    console.log(list)
    console.log(newList)
    if (list === newList) {
        return true;
    } else {
        return false;
    } 
    */

    /*
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
          return false
        }
      }
      return true
    } 
    */
}
console.log(inAscOrder(list))




// Whose bicycle?
let diary = {
    'algebra': 6,
    'history': 8,
    'physics': 9,
    'geography': 2,
    'chemistry': 9
  }
function whoseBicycle(diary1, diary2, diary3) {
    const firstStudRes = calculateResult(diary1);
    const secondStudRes = calculateResult(diary2);
    const thirdStudRes = calculateResult(diary3);
    let bestIndex;
    
    if (firstStudRes > secondStudRes) {
        bestIndex = 1;
        if (firstStudRes > thirdStudRes) {
            bestIndex = 3;
        }
    }

    function calculateResult(diary) {

    }
    
  }