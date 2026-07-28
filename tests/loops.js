/* let n=137;
//console.log(n%10);
//console.log(Math.floor(n/10));
let reverse=0; 
while(n>0)
{
   reverse = reverse*10 + n%10;
   n=Math.floor(n/10)


}
console.log(reverse); */


let n1 = 153;
/* let digitCount = String(n1).length;
let sum1 =0;

while(n1 > 0)
{
    let digit = n1%10;
    sum1 = sum1 + Math.pow(digit,digitCount);
    n1=Math.floor(n1/10);
}
console.log(sum1) */

let sum2 =0;
while(n1 > 0)
{
    sum2 = sum2 + n1%10;
    n1 = Math.floor(n1/10);
}

console.log(sum2);



let a= {'i': 2, 'j':3, 'k':1,'n':3}

let key = Object.keys(a)

for(let i=0;i<key.length;i++)
{
    console.log(key[i], a[key[i]]);
    if(a[key[i]]===1)
    {
        console.log(key[i]);
        break;
    }
}



