let a;
{
    const a=3;
    let b=a*10;
    {
        a=a*3;
        {
            a+=b;
            {
                a+=b--;
            }
        }
    }
    //뭔짓을 해도 a=3;
}
//나오면서 사라짐;
console.log(a);