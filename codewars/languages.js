let group1 = {"Java": 10, "Ruby": 80, "Python": 65};
let group2 = {"Hindi": 60, "Dutch" : 93, "Greek": 71}; 
let group3 = {"C++": 50, "ASM": 10, "Haskell": 20};

function myLanguages(results) {
    let array = Object.entries(results); // egy objektum key-value párjait kilistázza egy 2 dimenziós tömb formájában 
    const goodResultsArray = []; //készítünk egy tömböt, amibe majd bele fogjuk rakni a min. 60 pontos párokat
    for (let pair of array) {
        if (pair[1] >= 60) {
            goodResultsArray.push(pair) //beteszi a goodResultsArray tömbbe azokat a tömböket, ahol elégséges az eredmény (min. 60)
        }
    }
    goodResultsArray.sort(function (a, b) { //sorba rendezi egy adott tömb elemeit, itt a tömbök 1-es indexű eleme alapján, csökkenő sorrendbe
        return b[1] - a[1];
    });

    const finalList =[]; //készítünk egy tömböt, ami majd csak a nyelvek nevei fognak bekerülni
    for (const item of goodResultsArray) {
        finalList.push(item[0]) //hozzáadja minden tömb 2. elemét vagyis a nyelvet
    }
     
    return finalList 
}

console.log(myLanguages(group3)); 

//group1.sort(function(a, b){return a - b});
//console.log(group1)
