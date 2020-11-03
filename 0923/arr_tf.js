let arr=[1,2,3];
let arr2=[1,2,3];
let arr3=arr;

console.log(arr===arr2);
console.log(arr===arr3);

arr3.push(4);
console.log(arr===arr3);
console.log(arr);