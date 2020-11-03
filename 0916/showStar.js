const showStar=(n)=>{
    if(n%2===0){
        console.log('even number');
        return;
    }

    for(i=1;i<=n;i=i+2){
        const space=' '.repeat((n-i)/2);
        let line=`${space}${'*'.repeat(i)}${space}`
        console.log(line);
    }
}

showStar(15);
