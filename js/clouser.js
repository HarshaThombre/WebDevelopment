function y() {
   
  var a = 10;
  var b = 15;
  var c = 20;
 return function x() {
    console.log(a);
    console.log(b);
    console.log(c);
  }
 
}
var z = y();

z();

