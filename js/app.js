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