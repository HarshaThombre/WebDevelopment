

{/* // 1. Ways to print in JavaScript 
//   console.log("Hello World");

// alert("alert")
// document.write(" we can write with the help of document.write)

// 2. Javascript console API - Application programming Interface */}
     // console.warn("This is a warning")
     // console.error("This is a error")
{/* console.clear("huhdfskjf") */ }
     // console.log("Fabulous - 5");

// 3. JavaScript Variables 
// Variables - Containers to store data Values
// var number1 = 34;
// var number2 = 10;
// // console.log(number1 + number2);
 
// Multi 
// line 
// Comment 

// var und
// console.log(und);

// at  a very high level, there are two types of data types i javascript.
// 1. Primitive data types : undefined, null, number, string, boolean, symbol.
// 2. Reference data types : Arrays and objects 

// Arrays

// var arr = [9,5,7,8,3,"harsha"]
// console.log(arr);

// Boolean
// var a = true;
// var b = false;
// console.log(a);

// operators in javascript
// var a = 10;
// var b = 20;
// console.log("the value of a + b is ", a+b);
// console.log("the value of a - b is ", a-b);
// console.log("the value of a * b is ", a*b);
// console.log("the value of a / b is ", a/b);

// Assigment operators
// var c = b;
// c+= b;
// console.log(c);

// comparison operator
// var x= 30;
// var y = 10;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x < y);
// console.log(x > y);

// logical operators

// logical end
// console.log(true && true)
// console.log(false && true)
// console.log(false && false)

// logical or
// console.log(true || true)
// console.log(false || true)
// console.log(false || false)
// console.log(true || false)

// logical not (show opposite)
// console.log(!true);
// console.log(!false);

// functions in javascript
// Dry = do not repeat yourself
 function avg(a,b){
      return (a+b)/2;
 }

c1 = avg(4,6);
c2 = avg(10,10);
// console.log(c1,c2);

// blue in color = number, black in color = string

// conditionals in Javascript

//  single if statement
// var age = 10
// if (age > 15){
     // console.log('you are not a kid');
// }


// if - else statement
// var age = 10
// if (age > 15){
     // console.log('you are not a kid');
// }
// else{
//      // console.log('you are a kid')
// }

//  if - else ladder

// loop
// var arr = [1,2,3,4,5,6,7];
// console.log(arr);
// for(vari =0; i < arr.length;i++) {
//      console.log(arr[i])
// }

// arr.forEach(function(element) {
//      console.log(element);
// })

// let j=0;
// const a=0;
// a++

// let j = 0;
// while(j<arr.length) {
//      console.log(arr[j]);
//      j ++;
// }

// break & continue statement
// var arr = [1,2,3,4,5,6,7];
// // console.log(arr);
// for(var i =0; i < arr.length;i++) {
//      if (i == 2){
//           // break
//           continue;
//      }
//      console.log(arr[i])
// }

let myArr = ["fan", "camera", 50, null, true];
// Array methods
// myArr.pop(); - (aakhiri se ek element nikalnaho to pop ka use hota hain)
// myArr.push("harsha") - push se ek element add ho sakta hain
// myArr.shift() - first element hat jata hain
console.log(myArr);

// string Methods in Javascript
//  slice, replace - first occurance ko replace krta hain.


// Date
let myDate = new Date;
// getTime - time ko seconds  m deta h
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getMinutes());
console.log(myDate.getHours());

// DOM Manupulation - document object model 
// document.getElementById - DOM 
document.getElementById('click').style.border = '2px solid pink'