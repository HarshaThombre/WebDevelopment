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

example :-

function Alpha (a){
 
 return function beta (valv)
 {
   console.log(a*valv)
 }
}



var Gamma = Alpha(5);
Gamma(5);
Gamma(6);
Gamma(7);
Gamma(8);
Gamma(9);

var Gamma1 = Alpha(3);
Gamma1(5);
Gamma1(6);
Gamma1(7);
Gamma1(8);
Gamma1(9);



