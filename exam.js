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