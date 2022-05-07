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