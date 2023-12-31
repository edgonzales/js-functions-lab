// defining a function
// declaring a function
// creating the reausable block of code
// to be used at a later time in the program 

// function sayHello(personsName) {
//     // write the code to say hello here
//     console.log(`Hello ${personsName}`)
// }

// // execute the function
// // invoke the function
// // call the function

// // write the functions name ()
// sayHello('Bob'); // runs the block of code defined by the sayHello func
// sayHello('Pinelli');

// function sayGoodbye(phrase, name){
//     console.log(`${phrase}, ${name}`);
// }

// sayGoodbye('Adios', 'Amy');
// sayGoodbye('Sayonara', 'Sam');
// sayGoodbye('Dobrou noc', 'Dan');


// function add(x, y){
//     //let sum = x + y;
//     return x + y;
// }
// console.log(add(2,2), "<_______ LOOK AT THIS");

// 1.
function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
    
    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
  }
  
  console.log(maxOfTwoNumbers(3, 9));
  
  // 2. Define a function, as a function expression, maxOfThree that 
  // takes three numbers as arguments and returns the largest of them. 
  // Again, the Math.max method is not allowed.
  
  function maxOfThree(num1, num2, num3){
    if(num1 >= num2 && num1 >= num3){
        return num1;
    } else if (num2 >= num1 && num2 >= num3){
        return num2
    } else if (num3 >= num1 && num3 >= num1){
        return num3;
    }
}
  
    console.log(maxOfThree(6,6,7));

// 3. Define a function, as a function declaration, isCharAVowel that 
// takes a character as an argument and returns true if it is a vowel, 
// false otherwise.

function isCharAVowel(character){
    if(character.includes('a') || character.includes('A')){
        return true;
    } else if(character.includes('e') || character.includes('E')) {
        return true;
    } else if(character.includes('i') || character.includes('I')) {
        return true;
    } else if(character.includes('o') || character.includes('O')) {
        return true;
    } else if(character.includes('u') || character.includes('U')) {
        return true;
    } else {
        return false;
    }
}

/* 4. Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]); would return 11.
*/
let sum = 0;
function sumArray(numArr){
    numArr.forEach(function(num) {
        sum += num;
    })
    return sum;
}

console.log(sumArray([1,3,2]));

/* 5. Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40. 
*/

let total = 1;
function multiplyArray(numArr){
    numArr.forEach(function(num) {
        total *= num;
    })
    return total;
}

console.log(multiplyArray([2,4,2]));

/* 6.
Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.
*/

let argSum = 0;
const numArgsExpression = function numArgs(...nums){
    return argSum = nums.length;
}

console.log(numArgsExpression('a', 'b', 'aaa'));

/* 7. Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar'); would return the string "ratskcor".
*/

function reverseString(text) {
    // separates the text parameter into an array, where each character is given a position in an array
    let splitString = text.split('');
    // reverses the individual characters in the split array
    let reverseArray = splitString.reverse();
    // combines the separated characters into one array with one position [0] and creates a single text
    let joinArray = reverseArray.join('');
    // returns the reversed text
    return joinArray;
}

console.log(reverseString('tom'));
// credit: https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
// comments are made in my own words

/* 8. Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.
*/

let longestStringInArray = function stringArray(stringArr) {
    let currentLongestString = 0;
    stringArr.forEach(
        function(stringElement) {
            if (currentLongestString < stringElement.length) {
                currentLongestString = stringElement.length;
            }
        }
    )
    return currentLongestString;
}

console.log(longestStringInArray(['Bob', 'Timo', 'Gordon']));

/* 9. Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
*/

function stringsLongerThan (strArray, number) {
        let longestStringArray = [];
        strArray.forEach(function(str) {
            if(str.length > number) {
                longestStringArray.push(str);
            }
        }
    )
    return longestStringArray;
}

console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning, outside'], 5));