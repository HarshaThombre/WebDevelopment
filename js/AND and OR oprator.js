// && operator
// || oprator

var localScore=56;
var serverScore = 56;

var localName="prafful";
var serverName="prafful";

// if(localScore === serverScore)
//  {
//     if(localName===serverName)
//       {
//         console.log("same score same person");
//       }else {
//         console.log("same score but different person");
//       }
//  }else  if(localName===serverName)
//            {
//             console.log("different score same person");
//           }
//         else {
//           console.log("different score and  different  person");
//

// OR that is "||" in this case any one of them is also ture then statement 1
//will run
// for statement 2 to execute both of them has to be false
if((localScore === serverScore) || (localName===serverName)){
  console.log("any one condition is ture"); // statement 1
}else{
  console.log("both conditions are false ");// statement 2
}

// AND that is "&&" in this case any one of them is also false then statement 2
//will run
// for statement 2 to execute both of them has to be true
if((localScore === serverScore) && (localName===serverName)){
  console.log("both condition is ture");
}else{
  console.log("any one of them is  false ");
}