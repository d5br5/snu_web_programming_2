const { resolve } = require("path");

 const promise1=new Promise(function(resolve,reject){
     setTimeout(()=>{
        let randValue=Math.random();
        randValue>=0.5 ? resolve(true) : reject (false)
     }, 1000);
 });
 console.log(promise1);

 promise1
 .then(function(value){
     console.log(value);
 })
 .catch(err=>{
     console.log('error!');
     console.error(err);
 })