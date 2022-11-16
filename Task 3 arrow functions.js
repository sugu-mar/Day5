// programs in arrow function
console.log(`programs in arrow function`);




//(a) Print odd numbers in an array
console.log("\n ");console.log(`(a) Print odd numbers in an array:`);






const array = (str) => {
  const odd = str.filter((element) => element % 2);

  console.log(odd);
};
array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);



// (b) Convert all the strings to title caps in a string array.
console.log("\n \n ");console.log(`(b) Convert all the strings to title caps in a string array:`);




var titleCaps = (str) => {
  var arr = [];
  var strSplit = str.toLowerCase().split(" ");
  for (var i = 0; i < strSplit.length; i++) {
    arr.push(strSplit[i].charAt(0).toUpperCase() + strSplit[i].slice(1));
  }
  console.log(arr);
};
titleCaps("Convert all the strings to title caps in a string array");






// (c) sum of arrays in numbers in a array
console.log("\n \n ");console.log(`(c) sum of arrays in numbers in a array:`);





var sumOfArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = sumOfArray.reduce((acc, cvalue) => {
  return acc + cvalue;
});
console.log(sum);



// (d) Return all the prime numbers in array
console.log("\n \n ");console.log(`(d) Return all the prime numbers in array:`);





var prime = (element) => {
  array4 = [];
  for (var i = 2; i < element; i++) {
    var isPrime = true;

    for (var j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
      }
    }
    if (isPrime === true) {
      array4.push(i);
    }
  }
  console.log(array4);
};
prime(50);




// (e) Return all the palindromes in an array
console.log("\n \n");console.log(` (e) Return all the palindromes in an array:`);





var palindrome = (array5) => {
  var pali = [];
  for (let i = 0; i < array5.length; i++) {
    var word = array5[i];

    var revword = word.split("").reverse().join("");

    if (word === revword) {
      pali.push(word);
    }
  }
  console.log(pali);
};

palindrome([
  "happy",
  "dad",
  "mom",
  "level",
  "12321",
  "madam",
  "redivider",
  " radar",
  "kayak",
  "refer",
]);
