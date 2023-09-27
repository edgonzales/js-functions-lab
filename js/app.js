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
  
  // 2.
  