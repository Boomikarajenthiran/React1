
    let arr = [1,2,3,4,5,6,7,8,9,10];
let target = 9;
let left = 0;
let right = arr.length -1;

let found = false;
let foundIndex = -1;

while (left <= right){
  let mid = Math.floor((left+right)/2);
    if (arr[mid] < target){
      left = mid+1;
    } else if (arr[mid]> target){
      right = mid-1;
    } else {
      found = true;
      foundIndex = mid;
      break;
    }
}
console.log(found ? true : false);
console.log(foundIndex);
