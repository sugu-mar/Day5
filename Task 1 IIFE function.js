// programs in IIFE function
console.log(`programs in IIFE function`);




//(a) Print odd numbers in an array
console.log("\n ");console.log(`Print odd numbers in an array:`);





(function (array1) {
  console.log(array1.filter((element) => element % 2 != 0));
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);






// (b) Convert all the strings to title caps in a string array.
console.log("\n \n ");console.log(`(b) Convert all the strings to title caps in a string array:`);




(function (str1) {
  var array2 = [];

  var str1Split = str1.toLowerCase().split(" ");

  for (var i = 0; i < str1Split.length; i++) {
    array2.push(str1Split[i].charAt(0).toUpperCase() + str1Split[i].slice(1));
  }
  console.log(array2);
})("Convert all the strings to title caps in a string array");





// (c) sum of arrays in numbers in a array
console.log("\n \n ");console.log(`(c) sum of arrays in numbers in a array:`);




(function (array3) {
  var sum = array3.reduce((acc, cvalue) => {
    return acc + cvalue;
  });
  console.log(sum);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);





// (d) Return all the prime numbers in array
console.log("\n \n ");console.log(`(d) Return all the prime numbers in array:`);




(function (num) {
  array4 = [];
  for (var i = 2; i < num; i++) {
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
})(50);





// (e) Return all the palindromes in an array
console.log("\n \n");console.log(` (e) Return all the palindromes in an array:`);





(function (array5) {
  var pali = [];
  for (let i = 0; i < array5.length; i++) {
    var word = array5[i];

    var revword = word.split("").reverse().join("");

    if (word === revword) {
      pali.push(word);
    }
  }
  console.log(pali);
})([
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





// (f) Return median of two sorted arrays of the same size.
console.log("\n \n ");console.log(`(f) Return median of two sorted arrays of the same size:`);





(function (array01, array02) {
  for (var i = 0; i < array02.length; i++) {
    array01.push(array02[i]);
  }
  var dd = array01.sort((a, b) => a - b);
  middleValue = dd.length / 2;
  var medianValue = (dd[middleValue] + dd[middleValue] - 1) / 2;
  console.log(medianValue);
})([1, 2, 3, 4, 5, 11, 12, 13, 14, 15], [6, 7, 8, 9, 10, 16, 17, 18, 19, 20]);





// (g) Remove duplicates from an array
console.log("\n\n");console.log(`(g) Remove duplicates from an array: `);




(function (remDup) {
  array7 = [];
  for (var i = 0; i < remDup.length; i++) {
    if (!array7.includes(remDup[i])) {
      array7.push(remDup[i]);
    }
  }
  console.log(array7);
})([
  "apple",
  "orange",
  "banana",
  "orange",
  11,
  22,
  33,
  44,
  11,
  55,
  66,
  22,
  44,
  77,
  88,
  100,
]);




// (h) Rotate an array by k times
console.log("\n\n");console.log(`(h) Rotate an array by k times:`);




(function (array, k) {
  for (let i = 0; i < k; i++) {
    array.unshift(array.pop());
  }
  console.log(array);
})([1, 2, 3, 4, 5], 3);
