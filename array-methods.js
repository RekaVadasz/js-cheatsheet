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

//.LENGTH (property)
const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
console.log(cars.length) //megszámolja, hány elemnből áll a tömb (6)

//.FOREACH(); 
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

//.filter()


//.reduce()




//exam task 
const user1 = {
    id: 3242342,
    username: "belakovacs12",
    email: "bela@gmail.com",
    phone: "701231231",
    isConfirmed: true
  }
  
const user2 = {
    id: 2136523,
    username: "lajosnagy",
    email: "lajos@gmail.com",
    phone: "303214321",
    isConfirmed: true
  }

const user3 = {
    id: 8743534,
    username: "akarki99",
    email: "kazmer@gmail.com",
    phone: "206546547",
    isConfirmed: false
}

const userList = [user1, user2, user3];

function getUserIdentifiers(users) {
    const userIds = [];
    for (let user of users) {
        let name = user.username;
        let id = user.id;
        userIds.push(name + "@" + id);
    }
    return userIds;    
  }

console.log(getUserIdentifiers(userList))