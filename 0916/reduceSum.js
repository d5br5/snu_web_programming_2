const reduceSum=function(arr){
    sum=0;
    i=0;
    while(i<arr.length){
        sum+=arr[i];
        i++;
    }
    console.log(sum);
}

let happy=[1,2,3,4,5,6,7];
reduceSum(happy);


// const reduceSum1 = function (arr) {
//     return array의 각 인자의 합.
//     let res = 0;
//     for(let i = 0; i<arr.length; i++) {
//         res += arr[i];
//     }

//     return res;
// }


// const reduceSum2 = function (arr) {
//     let res = 0;
//     arr.forEach(function(elem) {
//         res += elem;
//     })

//     return res;
// }

// const reduceSum3 = function (arr) {
//     return arr.reduce((acc, cur) => acc + cur);
// }