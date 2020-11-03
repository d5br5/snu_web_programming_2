function showInformationOfUsers(arr){
    for(i=0;i<arr.length;i++){
        console.log(`${i+1}번째유저:이름은${arr[i].name}입니다. 나이는${arr[i].age}살 입니다.`);
    }
}

arr=[{name:'강민수',age:34},{name:'김도형',age:24}];
showInformationOfUsers(arr);

// function showInformationOfUsers(arr) {
//     console.log(arr.length);
//     arr.forEach(function(user, i){
//         console.log(`${i}번째 유저: 이름은 ${user.name}, 나이는 ${user.age}살입니다.`);
//     })

//     for(let i =0; i< arr.length; i++) {
//         let user = arr[i];
//         console.log(`${i}번째 유저: 이름은 ${user.name}, 나이는 ${user.age}살입니다.`);
//     }
// }
// showInformationOfUsers(users);