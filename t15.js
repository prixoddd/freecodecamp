let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
console.log(A4.match(multipleA));
// console.log(multipleA.match(A2));

let sampleWord = "astronaut";
let pwRegex =  /(?=\w{6})(?=\w*\d{2})/;
let result = pwRegex.test(sampleWord);