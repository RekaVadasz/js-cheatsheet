/* 

ASYNC: 
- Functions running in parallel with other functions are called asynchronous
- A good example is JavaScript setTimeout()
- If you create a function to load an external resource (like a script or a file), you cannot use the content before it is fully loaded --> you have to create a callback
*/
setTimeout(myFunction, 3000); //3000 ms után futtatja le a függvényt

setInterval(myFunction, 1000); // 1000 ms-enként újra lefittatja a függvényt

function myFunction() {
  document.getElementById("demo").innerHTML = "I love You !!";
}

/* 
The keyword async before a function makes the function return a promise. Below two are the same:*/

async function myFunction() {
    return "Hello";
  }

function myFunction() {
return Promise.resolve("Hello");
}

/* The keyword await before a function makes the function wait for a promise. The await keyword can only be used inside an async function.*/
//let value = await promise;




/* 
PROMISE:

Egy speciális objektum, ami egy aszinkron művelet eredményét tartalmazza (legyen az sikeres vagy sikertelen)

A promise-t úgy kell elképzelnünk, mint egy igéret amire építenünk kell a weboldalunk és fel kell készítenünk ezt minden lehetséges forgatókönyvre. 

A Promise is a proxy for a value not necessarily known when the promise is created. It is az object.
It is good when you want to do sth that takes a long time in the background, e.g. download an image from a different server, and want to do sth once it's completed. 

Lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

A promise can be in  3 states: 
- pending: initial state, neither fulfilled nor rejected (e.g.waiting to get the data back from the API)
- fulfilled: operation was completed successfully (e.g.) I have the data from the API)
- rejected: some error has happened, the operation failed

A pending promise can either be fulfilled with a value or rejected with a reason (error). When either of these options happens, the associated handlers queued up by a promise's then method are called.


*/

let rendeles = new Promise((resolve, reject) => { // kap egy callback functiont, aminek 
    let a = 1 + 1;                                // 2 paramétere van: resolve és reject
    if (a == 2) {
        resolve("Resolve"); // ezek is függvények, ezekkel mondjuk meg a promise-nak, hogy mit 
    }else{                  // tegyen akkor amikor sikeres volt és, mit tegyen akkor, amikor     
        reject("Failed");   // sikertelen
    }
})

rendeles.then((message) => { // callback functiont kap
    console.log("This is in the then: " + message);
}).catch((message) => {
    console.log("This is in the catch: " + message);
})

// This is in the then: Resolve

/*
then(): a function that receives a function to be executed when it has been fulfiled
catch(): a function that receives a function to be executed when it has been rejected

 */




/*
FETCH API

request + response

Fetch is function built into JavaScript that allows you to query any URL/API to get back data. It supports promises.
A Fetch a Javascriptbe beépített funkció, ami segítségével lekérhetünk adatokat egy URL-ről  

fetch() method
- one mandatory argument: the path to the resource you want to fetch.
- returns a Promise that resolves to the Response to that request 
- Once a Response is retrieved, there are a number of methods available to define what the body content is and how it should be handled.


The most important part is that fetch is asynchronous so it will run in the background and let you know when it finishes using promises.

promise, async, await 
response object
convert into json data




*/