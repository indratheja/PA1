//reverse an Array

let arr1 = [10, 20, 50, 70, 100, 80]
let rev1 = []

for (let i = arr1.length - 1; i >= 0; i--) {
    rev1.push(arr1[i]);

}
console.log(rev1)

//reverse of a String
async function palindrome(str1) {
    let strreverse = "";
    for (let i = str1.length - 1; i >= 0; i--) {
        strreverse = strreverse + str1[i];

    }
    if (str1 === strreverse) {
        console.log(`${str1} :: IS A PALINDROME`);
    } else {
        console.log(`${str1} :: IS NOT PALINDROME`);
    }

}

palindrome("MADAM");
palindrome("Indra");

//duplicate numbers print on array
let arr2 = [10, 20, 50, 20, 10, 80]
for (let i = 0; i < arr2.length; i++) {
    for (let j = i + 1; j < arr2.length; j++) {
        if (arr2[i] == arr2[j]) {
            console.log(arr2[i]);
        }

    }
}

let alpha = [10, 20, 5, 20, 8];
let min = Infinity;
for (let i = 0; i < alpha.length; i++) {
    if (alpha[i] <min) 
        {
            min = alpha[i];    
        
    }    
}
console.log(min);

//max diff in adjacent elementes

 let arr3 = [10, 25, 50, 70, 100, 80];
 let maxdiff = 0;
 let pair = []; 

 for(let i=0;i<arr3.length;i++)
 {
    let diff = Math.abs(arr3[i]-arr3[i+1])
    if(diff>maxdiff)

        { 
             maxdiff = diff
             pair = [arr3[i], arr3[i + 1]]
  
             
 }
}
console.log(`Pair : ${pair}`)
 console.log(maxdiff)