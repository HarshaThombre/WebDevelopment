function greeting(name) {
  alert('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}

function printname(name){
  console.log('my name is '+name);
}

processUserInput(greeting);
processUserInput(printname);

