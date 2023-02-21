// let myString = "Hello, World!";
// let myRegex = /Hello/;
// let result = myRegex.test(myString); // Change this line
// console.log(result);

// let twinkleStar = "Twinkle, twinkle, little star";
// let starRegex = /Twinkle/gi; // Change this line
// let result = twinkleStar.match(starRegex); // Change this line
// console.log(result);

// let humStr = "I'll hum a song";
// let hugStr = "Bear hug";
// let huRegex = /hu./;
// console.log(huRegex.test(humStr));
// console.log(huRegex.test(hugStr));


// let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /[aeiou]/ig; // Change this line
// let result = quoteSample.match(vowelRegex);
// console.log(result);

let phrase = "ba humbug";

let regexPlus = /bah+/;
let regexStar = /bah*/;

console.log(phrase.match(regexPlus)); // returns false
console.log(phrase.match(regexStar)); // returns true

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);
console.log(result);