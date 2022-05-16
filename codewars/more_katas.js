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