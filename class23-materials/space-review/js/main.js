//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arrOfNums = [1,4,2,4,12,35]
alert(arrOfNums.reduce((acc, c) => acc+c, 0))

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
let arrOfNums2 = [2,3,5,7,7,1,23]
let newArrOfNums2 = arrOfNums2.map( num => num**2 )

console.log(newArrOfNums2)

//Create a function that takes string
//Print the reverse of that string to the console
let unoReverse = str => console.log (str.split('').reverse().join(''))


//Create a function that takes in a string
//Alert if the string is a palindrome or not
let strFunction = str => alert(str === str.split('').reverse().join(''))

strFunction('boob')