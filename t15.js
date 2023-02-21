let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
console.log(A4.match(multipleA));
// console.log(multipleA.match(A2));

// let sampleWord = "astronaut";
// let pwRegex =  /(?=\w{6})(?=\w*\d{2})/;
// let result = pwRegex.test(sampleWord);

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);