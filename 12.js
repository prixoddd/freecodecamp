// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
    for (let x = 0; x < contacts.length; x++) {
      if (contacts[x].firstName === name) {
        if (contacts[x].hasOwnProperty(prop)) {
          return contacts[x][prop];
        } else {
          return "No such property";
        }
      }
    }
    return "No such contact";
    // Only change code above this line
  }
  
  lookUpProfile("Akira", "likes");

  function randomFraction() {

    // Only change code below this line
  
  return Math.random();
  
    // Only change code above this line
  }
  
  console.log(Math.floor(Math.random() * 20));

  function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    // Only change code above this line
  }

  function convertToInteger(str) {
    return parseInt(str);
  }
  
  convertToInteger("56");

  function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
  }
  
  checkEqual(1, 2);

  function checkSign(num) {
    return (num > 0) ? "positive" : (num < 0) ? "negative" : "zero";
  }
  
  checkSign(10);


  function rangeOfNumbers(startNum, endNum) {
    if(endNum < startNum) {
      return [];
    } else {
      const arr = rangeOfNumbers(startNum, endNum - 1);
      arr.push(endNum);
      return arr;
    }
  };