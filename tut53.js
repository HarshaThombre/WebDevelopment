// console.log("This is tutorial 53");

function greet(name, greetText="Greetings from Javascript"){
    let name1 = "Name1";
    console.log(name + " is a good captain")
    console.log(greetText + " have a nice day")
}   
function sum(a,b,c){
    let d = a + b + c ;
    return d;
    // This line will never execute (Unreachable code)
    // console.log("funstion is returned");
}


let name = "harsha";
let name1 = "alfa";
let name2 = "beta";
let name3 = "Gamma";
let name4 = "Ray";
let greetText = "goodmorning";

greet (name, greetText);
greet (name1, greetText);
greet (name2, greetText);
greet (name3);

let returnVal = sum(1000,500,1000)
console.log(returnVal)

// console.log(name1 + " is a good captain")
// console.log(name2 + " is a good captain")
// console.log(name3 + " is a good captain")
// console.log(name4 + " is a good captain")

