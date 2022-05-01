let flock1 = ["sheep", "sheep", "sheep", "wolf", "sheep"]
let flock2 =  ["sheep", "sheep", "wolf"]
let flock3 = ["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]


function warnTheSheep(queue) {
    let lastAnimal = queue[queue.length - 1];
    console.log(lastAnimal)
    if (lastAnimal == "wolf") {
        return "Pls go away and stop eating my sheep"
    } else {
        for (let index = 0; index < queue.length; index++) {
            if (queue[index-1] == "wolf") {
                return `Oi! Sheep number ${queue.length-index}! You are about to be eaten by a wolf!`
            } 
        }
    }
    
}

console.log(warnTheSheep(flock1))


