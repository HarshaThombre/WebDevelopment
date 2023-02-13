let name1 = {
  fname: "prafful",
  lname: "patil",
};

// let name = {
//     fname:"prafful",
//     lname:"patil",
//      printFullName : function () {
//         console.log(this.fname+'  '+ this.lname)
//     }
// }

let name2 = {
  fname: "Harsha",
  lname: "thombre",
};

// let printFullName = function (homeTown, state) {
//   console.log(this.fname + "  " + this.lname + " " + homeTown + " state");
// };
  function printFullName () {
  console.log(this.fname + "  " + this.lname);
};

// let printFullName = function () {
//   console.log(this.fname + "  " + this.lname);
// };

printFullName.call(name1);
printFullName.call(name2);

// printFullName.apply(name2,['kolhapur','maharashtra']);

//  let finalName = printFullName.bind(name1, "kolhapur", "maharashtra");
// console.log(finalName)
