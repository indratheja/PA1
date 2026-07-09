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






