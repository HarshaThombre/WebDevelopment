// var time;
// var count = 0;
// function debounce() {
//   clearTimeout(time);
//   time = setTimeout(function XYZ() {
//     count=count +1;
//     console.log("i made an API call = "+count);
//   }, 2000);
// }

var time;
var count = 0;  
function maxdebounce() {
  clearTimeout(time);
  time = setTimeout(()=> {
    count++;
    console.log("i made an API call = "+count);
  }, 1000);
}