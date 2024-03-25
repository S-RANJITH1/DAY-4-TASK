// Question 1
// Do the below programs in anonymous function & IIFE
// a. Print odd numbers in an anonymous function

var result = [];
var a = function (arr) {
  for (var i = 0; i < arr.length; i = i + 1) {
    if (arr[i] % 2 !== 0) {
      result.push(arr[i]);
    }
  }
  return result;
};
console.log(a([11, 15, 26, 47, 39, 28, 56, 84]));

//  Print odd numbers in an IIFE function

var result = [];
(function (arr) {
  for (var i = 0; i < arr.length; i = i + 1) {
    if (arr[i] % 2 !== 0) {
      result.push(arr[i]);
    }
  }
  console.log(result);
})([11, 15, 26, 47, 39, 28, 56, 84]);

// b.Convert all the strings to title caps in  anonymous function
var stringArray = ["task four", "guvi geek", "website development", "mobile"];
var titleCaseArray = stringArray.map(function (str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
});

console.log(titleCaseArray);

// IIFE function

let titleCapsIIFE = (function (arr) {
  return arr.map(function (str) {
    return str
      .split(" ")
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  });
})(stringArray);

console.log(titleCapsIIFE);

// c. Sum of all numbers in an array anonymous function

var numberArray = [1, 2, 3, 4, 5, 6, 7, 8];
var sum = (function (arr) {
  var total = 0;
  arr.forEach(function (number) {
    total += number;
  });
  return total;
})(numberArray);
console.log(sum);

// IIFE function

var numberArray1 = [1, 2, 3, 4, 5, 6, 7, 8];
var sum1 = (function (arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
})(numberArray1);
console.log(sum1);

// d. Return all the prime numbers in an array  anonymous function

var numberArray2 = [5, 8, 9, 43, 15, 17, 53];
var primeNumbers = numberArray2.filter(function (num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (var i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
});
console.log(primeNumbers);

// IIFE function

var numberArray3 = [5, 8, 9, 43, 15, 17, 53];
var isPrime = function (num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (var i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
};

var primeNumbers3 = numberArray3.filter(isPrime);
console.log(primeNumbers3);

// e.Return all the palindromes in an array anonymous function

var stringArray4 = ["guvi", "hello", "appa"];
var isPalindrome = function (str) {
  str = str.toLowerCase();
  var reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
};
var palindromeStrings = stringArray4.filter(isPalindrome);
console.log(palindromeStrings);

// IIFE function

var stringArray5 = ["guvi", "amma"];
var palindromeStrings5 = (function (arr) {
  var isPalindrome5 = function (str) {
    str = str.toLowerCase();
    var reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
  };

  return arr.filter(isPalindrome5);
})(stringArray5);
console.log(palindromeStrings5);

// f.Return median of two sorted arrays of the same size anonymous function

var array1 = [4, 9, 6, 7, 3, 5];
var array2 = [2, 3, 9, 7, 5, 8];
var findMedian = function (arr1, arr2) {
  var mergedArray = arr1.concat(arr2);
  var sortedArray = mergedArray.sort(function (a, b) {
    return a - b;
  });
  var middle = Math.floor(sortedArray.length / 2);

  if (sortedArray.length % 2 === 0) {
    return (sortedArray[middle - 1] + sortedArray[middle]) / 2;
  } else {
    return sortedArray[middle];
  }
};
var median = findMedian(array1, array2);
console.log(median);

// IIFE function

var array3 = [4, 9, 6, 7, 3, 8];
var array4 = [13, 56, 77, 28, 99, 74];
var median1 = (function (arr3, arr4) {
  var mergedArray3 = arr3.concat(arr4);
  var sortedArray4 = mergedArray3.sort(function (a, b) {
    return a - b;
  });
  var middle2 = Math.floor(sortedArray4.length / 2);
  if (sortedArray4.length % 2 === 0) {
    return (sortedArray4[middle2 - 1] + sortedArray4[middle2]) / 2;
  } else {
    return sortedArray4[middle2];
  }
})(array3, array4);
console.log(median1);

// g. Remove duplicates from an array anonymous function

var originalArray = [1, 3, 3, 6, 7, 9, 5, 5, 8, 1, 1];
var uniqueArray = originalArray.filter(function (item, index, self) {
  return self.indexOf(item) === index;
});
console.log(uniqueArray);

// IIEF

var originalArray1 = [1, 3, 3, 6, 7, 9, 5, 5, 8, 1, 1];
var uniqueArray1 = (function (arr) {
  var seen = {};
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (!seen[arr[i]]) {
      seen[arr[i]] = true;
      result.push(arr[i]);
    }
  }
  return result;
})(originalArray1);
console.log(uniqueArray1);

// h. Rotate an array by k times anonymous function

var originalArray5 = [1, 2, 3, 4, 5];
var k = 4;
var rotatedArray5 = (function (arr, k) {
  k = k % arr.length;
  if (k < 0) k += arr.length;

  return arr.slice(-k).concat(arr.slice(0, arr.length - k));
})(originalArray5, k);
console.log(rotatedArray5);

// IIFE function

var originalArray6 = [1, 2, 3, 4, 5];
var k = 4;
var rotatedArray6 = (function (arr, k) {
  k = k % arr.length;
  if (k < 0) k += arr.length;
  return arr.slice(-k).concat(arr.slice(0, arr.length - k));
})(originalArray6, k);
console.log(rotatedArray6);

// Question 2
// Do the below programs in arrow functions

// a.Print odd numbers in an array

var numberArray7 = [11, 15, 26, 47, 39, 28, 56, 84];
numberArray7.forEach((num) => {
  if (num % 2 !== 0) {
    console.log(num);
  }
});

//b.Convert all the strings to title caps in a string array

var stringArray7 = ["task four", "guvi geek", "website development", "mobile"];
var toTitleCase1 = (str) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

var titleCaseArray7 = stringArray7.map(toTitleCase1);

console.log(titleCaseArray7);

//c.Sum of all numbers in an array

var numberArray8 = [1, 2, 3, 4, 5, 6, 7, 8];

var sum = numberArray8.reduce((total, num) => total + num, 0);

console.log(sum);

//d.Return all the prime numbers in an array

var numberArray9 = [5, 8, 9, 43, 15, 17, 53];
var isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
};

var primeNumbers2 = numberArray9.filter(isPrime);

console.log(primeNumbers2);

//e.Return all the palindromes in an array

var stringArray9 = [
  "love",
  "hunter",
  "amma",
  "guvi",
  "geek",
  "appa",
];

var Palindrome9 = (str) => {
  str = str.toLowerCase();
  var reversedStr9 = str.split("").reverse().join("");
  return str === reversedStr9;
};

var palindromeStrings9 = stringArray9.filter(Palindrome9);

console.log(palindromeStrings9);
