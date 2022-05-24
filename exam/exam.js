function getJavaScript(value) {
  let string = value.toString();
  return string;
}

console.log(getJavaScript(12));

function getTheBook() {
  
  let theBook = {}
  theBook.title = "Be the Worst You Can Be: Life's Too Long for Patience and Virtue";
  theBook.author = "Charles Saatchi";
  return theBook;
}

console.log(getTheBook());


function countToArray(firstNumber, lastNumber) {
  const array = [firstNumber];
  
  for (let index = 1; index <= (lastNumber-firstNumber)-1; index++) {
      array.push(firstNumber + index);
  }
  const stringArray = array.map(String);

  return stringArray;
}

console.log(countToArray(4, 7))


function addParamToArray(myArray, myItem) {
  const array = myArray;
  array.push(myItem);
  return array;
}




let siteName = "https://codecool.com";
function getSiteName(url) {
  // todo
}

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