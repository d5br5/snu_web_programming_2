function printStar(num) {
    a=num;
    while(num>0){
        i=1;
        star='';    
        while(i<=num){
            star+='*';
            i++;    
        }
        console.log(' '.repeat(a - num)+star);
        num=num-1;
    }
}

printStar(5);