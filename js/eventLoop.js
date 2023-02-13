console.log("i am prafful");

setTimeout(function () {
  console.log("i am god");
}, 0);

function printFullName() {
  console.log("i am gaikwad");
}

setTimeout(function () {
    printFullName();
}, 5000);

Promise.resolve("Promise").then((res) => console.log(res));

console.log("i am harsha");

// i am prafful

// i am harsha
// promise
// i am god
// i am gaikwad


function fullAdress(){
   console.log("Bhopal") 
}
fullAdress();