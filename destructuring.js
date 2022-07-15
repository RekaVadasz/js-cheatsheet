//  - - - - - Arrays:  - - - - - 

const vehicles = ['mustang', 'f-150', 'expedition', 'opel', 'suzuki', 'audi'];
const [car, truck, suv] = vehicles; //will assign only the 1-3. items to the variables
console.log(car) //--> mustang

//if we just want to define 1st and 3rd, we leave the 2nd out but keep the comma: 
const [myCar,, otherCar] = vehicles;

//to add the rest items: 
const [car1,, car2, ...rest] = vehicles
console.log(rest) //results in an array

const alphabet = ['A', 'B', 'C', 'D']

//create a new array from 2 arrays: 
const newArray = [...alphabet, ...vehicles]
console.log(newArray)


// - - - - Functions: - - - -

// we can use it for functions which return an array:
function sumandmultiply(a, b) {
    return [a + b, a * b]
}

const [sumResult, multiplyResult, divisionResult = "No division"] = sumandmultiply(2, 3)
console.log(sumResult, multiplyResult)

//we can also set default value in case there is no incoming value: 
console.log(divisionResult)

// - - - - Objects: - - - - 

const person1 = {
    name: "Sally",
    age: 32, 
    pet: "dog", 
    address: {
        city: "London",
        street: "Oxford Str"
    },
    sport: "kickbox"
}   

const { name: firstName = "John", pet, food = "chocholate", ...otherData } = person1
console.log(pet)
console.log(firstName) //renamed name to firstName
console.log(food)
console.log(otherData)

const person2 = {
    name: "Rob",
    age: 35, 
    pet: "cat",
    car: "BMW",
    plant: "cactus"
}

// create new objects from 2 objects (later data will overwrite the earlier)
const person3 = {...person1, ...person2}
console.log(person3)

// use it in functions: 
function printUser({ name, age, hobby = "reading" }) {
    console.log(`Name is: ${name}, age is: ${age}. Favourite hobby is ${hobby}.`)
}

printUser(person1)