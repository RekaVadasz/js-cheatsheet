//-------substring()-------
// kivágja egy string megadott részeit, 1. arg: ahonnan kezdődjön, 2. arg.: ameddig tartson (már nincs benne). Mínusz érték: 0-nak kezeli
let text = "Hello world!";
let result = text.substring(1, 4);
console.log(result);



//-----------SLICE()-------------------
let str = "eloquent";
console.log(str.slice(1, -1))  //slice method: felvágja a megadott stringet, az 1. argumentum: amivel kezdődjön az új string, a 2. argumentum: amelyik kerakter utánI részt vágja le (ha mínusz: hátulról számol)

//console.log(myFunction(2, 4))
function removeChar(str){
    return str.slice(1,-1)
  
}
console.log(removeChar("eloquent"))

console.log("valami")


let sN = "https://codecool.com";
function getSiteName(url) {
    let siteFirst = url.slice(8, 9) //c
    let siteFirstUpper = siteFirst.toUpperCase();
    let siteRest = url.slice(9, -4 ); //codecool
    return siteFirstUpper + siteRest;
}

console.log(getSiteName(sN))

//String ismétlése n alkalommal
function repeatStr (n, s) {
    let output = "";
    for (let index = 0; index < n; index++) {
        output += s;
    }
    return output;
}

console.log(repeatStr(5, "Hello"))





//------.split()------
//splits a string into an array of substrings. If (" ") is used as separator, the string is split between words.
const someWords = "bitcoin take over the world maybe who knows perhaps"
function findShort(s){
    const array = s.split(" "); //létrehozunk egy új array-t, a stringet szóközönként elválasztva
    const newArray = [];
    for (const item of array) {
        newArray.push(item.length)
    }
    return Math.min(...newArray)
}
console.log(findShort(someWords))




//---------.toString()--------
//Convert a number to a string
//Every JavaScript object has a toString() method.(normally not used)
let num = 15;
let newText = num.toString();
console.log(newText);


//----------replace()---------
//searches a string for a value or a regular expression, returns a new string with the value(s) replaced. Only the first value will be replaced!
let text2 = "Visit Microsoft!";
let result2 = text2.replace("Microsoft", "W3Schools"); //arg 1: mit akaraunk helyettesíteni, arg.2: mire cseréljük
console.log(result2);

let x = "8 j 8   mBliB8g  imjB8B8  jl  B"
function noSpace(x){
    return x.replace(/\s/g, '');  //regular expression: is a pattern of characters. The pattern is used to do pattern-matching "search-and-replace" functions on text.
    // \s : space-t keres
    // g : minden eredményt megkeres 
}
console.log(noSpace(x))