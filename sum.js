let n1=2;
let n2=5;
function sum(n1,n2)
{
    if(n1>n2)
    {
        return n1;
    }
    else
    {
        return n2;
        
    }
}
function us(n1,n2)
{
    return(n1+n2);
}
const result = sum(n1,n2);
console.log(`The grestest number is ${result}`);
const res = us(n1,n2);
console.log(`The sum is ${res}`);