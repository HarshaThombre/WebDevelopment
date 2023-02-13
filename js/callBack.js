console.log("i am a");

setTimeout(function harsha() {
  console.log("i am b");
}, 5000);

console.log("i am c");

// simple call back 
function x() {
    console.log('i am x');

}
function y(phalana) {

    console.log('i am y');
    
    phalana()
}

 y(x)