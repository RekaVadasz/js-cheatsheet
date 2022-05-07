const arr1 = [3,1,2];
const arr2 = [15,20,7,10,4,3];
const arr3 = [-102,-16,-1,-2,-367,-9];
const arr4 = [177,225,243,-169,-12,-5,2,92];




function nthSmallest(arr, pos){
  arr.sort(function (a, b) { //növekvő sorrendbe rendezi egy adott tömb elemeit
    return a - b
    });
  console.log(arr);
  return arr[pos-1];
}

console.log(nthSmallest(arr4, 5));
