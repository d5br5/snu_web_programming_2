//filter, append, map, reduce, any, select 알아두기!
//Array.reduce() -> 중간고사에 나옴
//모듈 중요

let func1=(arr)=>{
    let sum=0;
    for(i=0;i<arr.length;i++){sum+=arr[i]%3;}
    return sum;
}

const func1 =(arr)=> arr.reduce((prev,cur)=>prev+cur%3,0);

    /*
    {a: 'ab' b: 'bc'} => ['a', 'b']

    let a =[1,2,3];
    reducer=(prev,cur)=>prev+cur;

    a.reduce(reducer,0);
    => reducer(reducer(reducer(init,1),2),3)
    */

const func1=(arr)=>{
    let res=0;
    arr.forEach(elem=>res=res+elem%3);
    return res;
}


let func2=(json1,json2)=>{
    let result={};
    let key1=Object.keys(json1);
    let key2=Object.keys(json2);

    for(i=0;i<key1.length;i++){
        if(!key2.includes(key1[i])){
            result[key1[i]]=json1[key1[i]];
        }
    }
    return result;
}

const func2 = (obj1,obj2) => {
    const res={};
    Object.keys(obj1).forEach(key=>{
        if(!Object.keys(obj2).includes(key)) res[key]=obj1[key];
        //if(obj2[key]===undefined) res[key]=obj1[key];  -> 이렇게 짜면 문제 생김
        //obj1: {a: 'ab' b: 'bc'}
        //obj2: {a: undefined}
    });
    return res;
}


let func3=(arrJson)=>{
    let nameOver30=[];
    for(i=0;i<arrJson.length;i++){
        if(arrJson[i].age>=30){
            nameOver30.push(arrJson[i].name);
        }
    }
    return nameOver30;
}

const func3 = (arr) => arr.filter(elem=>elem.age>=30).map(elem=>elem.name);
    /* same <=>
    let arr2 = arr.filter(elem=>elem.age>=30);
    return arr2.map(elem=>elem.name);
    */

let func4=function(arrOfArr){
    let maxLength=0;
    for(i=0;i<arrOfArr.length;i++){  
        if(arrOfArr[i].length>maxLength){maxLength=arrOfArr[i].length;}
    }

    let filter=[];
    for(i=0;i<arrOfArr.length;i++){
        if(arrOfArr[i].length===maxLength){filter.push(arrOfArr[i])};
    }

    let arrayOfSum=[];
    for(i=0;i<maxLength;i++){
        let sum=0;
        for(j=0;j<filter.length;j++){
            sum+=filter[j][i];
        }
        arrayOfSum.push(sum);
    }
    
    return arrayOfSum;
}

const func4 = (arrOrArr) => {
    const maxLength = arrOrArr.reduce((prev,arr)=>Math.max(prev, arr.length),0);

    /*
    arrOrArr.filter(arr=>arr.length===maxLength)
        .redue((cur,prev)=>cur.map((e,i)=>e+prev[i]), new Array(maxLength).fill(0));
    */
    // new Array(maxLength).fill(0)-> 맥스랭스 길이의 배열을 만들어 0으로 채움

    const targets=arrOrArr.filter(arr=>arr.length===maxLength);
    const res=new Array(maxLength).fill(0);
    targets.forEach(elem=>{
        elem.forEach((e,i)=>res[i]+=e);
    })

    return res;
    //    return targets.reduce((prev,cur)=>cur.map((e,i)=>e+prev[i]),)
}



let func5=function(string){
    let array=[];
    array=string.split(" ");
    
    let longest='';
    for(i=0;i<array.length;i++){
        if(longest.length<array[i].length){
            longest=array[i];
        }
    }

    let thirdOfLongest=longest.slice(2,3);
    return thirdOfLongest;

}

const func5=(str)=>{
    //const word = str.split(' ').reduce((prev,cur)=>prev.length>=cur.length ? prev : cur, '');

    const words=str.split(' ');
    let maxLengthWord='';
    words.forEach(word=>{
        if(maxLengthWord.length<word.length)
        maxLengthWord=word;
    })

    return maxLengthWord[2];
}