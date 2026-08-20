let array = [12, 3, 18, 40, 14, 21];

// Sort the array in ascending order using bubble sort
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }
    }
}

console.log('Sorted array:', array);

let rev = array.sort((a,b)=>b-a);
console.log(rev);

let str = 'indratheja';
let count = {};

for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    count[ch] = (count[ch] || 0) + 1;
}
console.log('Character count:', count);
let sc = 0
for (let key in count) {
    if (count[key] === 1) {
        sc++;
        if (sc === 2) {
            console.log('Second non-repeating character:', key,count[key]);
            break;
        }
    }
}


let str1 = 'programming';
let count1 = [];

for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    count1[ch] = (count1[ch] || 0) + 1;
}
console.log('Character count:', count1);