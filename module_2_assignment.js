/*
Task: 1
Write a function named destructureExample that takes in an object and an array as parameters.
The function should use destructuring to extract the values 'name' and 'age' from the object and the values
at index 0 and index 2 from the array. The function should then return an object with the extracted values
as properties with name and age.
 */
const destructureExample=(obj, arr)=> {
    const { name, age } = obj;
    const [value1, , value2] = arr;
    return { name, age };
}
const obj = { name: 'John', age: 30, city: 'New York' };
const arr = [10, 20, 30, 40];

const result = destructureExample(obj, arr);
// console.log(result);

/*
Task 2:
Write a function named sumNumbers that takes in multiple numbers as arguments using the rest operator.
The function should return the sum of all the numbers.
 */
const sumNumbers=(...numbers)=> {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

const resultSum = sumNumbers(1, 2, 3, 4, 5);
 // console.log(resultSum);
/*
Task: 3
 Write a function named createGreeting that takes in a name as a parameter and
 returns a greeting message using template literals.
 The message should be in the format: "Hello, [name]! Welcome to our website."
 */
const createGreeting = (name)=>{
   return  `"Hello, ${name}! Welcome to our website."`
}
// console.log(createGreeting('Alice'))

/*
Task: 4
Write a function named isEven that takes in a number as a parameter and returns the string
"Even" if the number is even, and "Odd" if the number is odd.
Use a ternary operator instead of an if/else statement.
 */
const isEven = (number)=>number%2==0?'Even':'Odd'

//console.log(isEven(22));
/*
Task: 5
Convert the following function to an arrow function:
function multiply(a, b) {
  return a * b;
}
 */

const multiply = (a,b)=>a*b

// console.log(multiply(5,8))
/*
Task: 6
Write a function named getLargestNumber that takes in two numbers as parameters.
The function should return the larger number using short-circuiting and logical operators (&&, ||, ??).
 */
const getlargestNumber= (a,b)=>a>b?a:b
// console.log(getlargestNumber(5,10))

/*
task 7:
Write a function named getAddressCity that takes in an object representing a person's address.
The address object has properties 'street', 'city', and 'country'. The function should return the value of the 'city' property if it exists,
or the string "Unknown" if it doesn't exist, using optional chaining.
*/

const getAddressCity =(address)=>address?.city??'Unknown'
const address = { street: '123 Main St', country: 'USA' };
// console.log(getAddressCity(address))

/*
task: 8:
Write a function named doubleNumbers that takes in an array of
numbers and returns a new array with each number doubled using the array map method.
*/

const doubleNumbers =(array)=>array.map((number)=>number*2)
// console.log(doubleNumbers([1, 2, 3, 4, 5]))

/*
task: 9:Write a function named filterEvenNumbers that takes in an array of numbers and returns a
new array with only the even numbers using the array filter method.
 */

const filterEvenNumbers = (array)=>array.filter(number=>number%2===0)

// console.log(filterEvenNumbers([1, 2, 3, 4, 5]))

/*
task: 10:
Write a function named sumArray
that takes in an array of numbers and returns the sum of all the numbers using the array reduce method.
 */

const sumArray=(array)=>array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sumArray([1, 2, 3, 4, 5]))
/*
task: 11:
Write a function named sortNumbers that takes in an array of numbers and returns a new array with the
numbers sorted in ascending order using the array sort method.
*/

const sortNumbers = (array)=>array.sort((a, b)=>a-b)

// console.log(sortNumbers([5, 2, 8, 1, 4]))
