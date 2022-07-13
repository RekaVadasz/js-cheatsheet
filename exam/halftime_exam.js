//1. 
const number = 7.2;
function simplifyNumber(number) {
    if (number < 0) {
        return 0;
    } else if (number > 10) {
        return "sok";
    } else if (number % 1 !== 0) {
        return Math.floor(number);
    } else {
        return number;
    }
    
}
console.log(simplifyNumber(number))



//2. 
const string = "Éld át az élményt";
function amplifyBs(sentence) {
    result = "";
    for (let i = 1; i <= 5; i++) {
       result += sentence + "!".repeat(i); 
    }
    return result;
}
console.log(amplifyBs(string))

//3. 
const user = {
    id: 1,
    username: "Kovacs Bela",
    mostRecentPurchase: {
      category: "shoes",
      color: "blue",
      price: 300
    }
}

const product = {
    category: "accessory",
    color: "red",
    price: 100
}

function isGoodRecommendation(user, product) {
    let recommend = undefined;

    if (product.category !== user.mostRecentPurchase.category 
        && product.color === user.mostRecentPurchase.color 
        && product.price < user.mostRecentPurchase.price) {
       
        recommend = true; 
    } else {
        recommend = false; 
    }

    let isGood = {
    customerName: user.username,
    isProductRecommended: recommend
    }
    return isGood;
}

console.log(isGoodRecommendation(user, product));

