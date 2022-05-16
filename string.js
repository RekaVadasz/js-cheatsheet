

//SLICE()
let str = "eloquent";
console.log(str.slice(1, -1))  //slice method: felvágja a megadott stringet, az 1. argumentum: amivel kezdődjön az új string, a 2. argumentum: amelyik kerakter utánI részt vágja le (ha mínusz: hátulról számol)


//console.log(myFunction(2, 4))
function removeChar(str){
    return str.slice(1,-1)
  
}
console.log(removeChar("eloquent"))

console.log("valami")

//String ismétlése n alkalommal
function repeatStr (n, s) {
    let output = "";
    for (let index = 0; index < n; index++) {
        output += s;
    }
    return output;
}

console.log(repeatStr(5, "Hello"))


let sN = "https://codecool.com";
function getSiteName(url) {
    let siteFirst = url.slice(8, 9) //c
    let siteFirstUpper = siteFirst.toUpperCase();
    let siteRest = url.slice(9, -4 ); //codecool
    return siteFirstUpper + siteRest;
}

console.log(getSiteName(sN))