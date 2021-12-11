// numbers
// +=, -=, *=, /=, ++, --, %
// modulus (%) operator returns the remainder after integer division

let number = 40;

number += 5; // 45 -> it adds the 5
number -= 5; // 40
number *= 5; // 200
number /= 5; // 40

number++; // 41 -> adds 1
number--; //  40

console.log(number);

const slices = 10;
const children = 3;
const amount = slices / children; // 3.3333333333333335
const remainder = slices % children; // 1

console.log(amount);
console.log(remainder);

const random = 4 + 6 + 10 * 10; // 110 (pemdas)
const random2 = (4 + 6 + 10) * 10; // 200

console.log(random);
console.log(random2);
