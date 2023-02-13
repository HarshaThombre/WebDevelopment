const array1 = [6, 33, 13, 2];

// // 0 + 1 + 2 + 3 + 4

// const sumWithInitial = array1.reduce((previousValue, currentValue) => previousValue + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);
// // expected output: 10
// //multiply = 1
// const initialValue = 1;
// const multiply = array1.reduce((

a,b,index,array)=> { console.log(index,'index'); console.log(array);
//                                                     console.log(a,'this is previous value'); 
//                                                     console.log(b,'this is current value');
//                                                     console.log(a*b);
                                                    
//   return a*b;},1)

//console.log(multiply)
// const initialValue = 0;
const addition = array1.reduce((a,b,index,array)=> { console.log(index,'index'); console.log(array);
                                                    console.log(a,'this is previous value'); 
                                                    console.log(b,'this is current value');
                                                    console.log(a+b);
                                                    
  return a+b;},0)

//console.log(multiply)


//reduce with array

let shoppingCart = [
  {
    product: 'phone',
    qty: 1,
    price: 500,
  },
  {
    product: 'Screen Protector',
    qty: 1,
    price: 10,
  },
  {
    product: 'Memory Card',
    qty: 2,
    price: 20,
  },
];


const number = [55,22,66,75]
// const inital=0;

// const add = number.reduce((preValue,currValue)=>{return preValue+initValue;},inital)


const ans = shoppingCart.reduce((preValue,currValue)=>{return preValue+ currValue.price;},0)

console.log(ans)


// string length 

let shoppingCart = [ 
  {
    product: 'phone',
    qty: 1,
    price: 500,
  },
  {
    product: 'Screen Protector',
    qty: 1,
    price: 10,
  },
  {
    product: 'Memory Card',
    qty: 6,
    price: 20,
  },
];

const add = shoppingCart.reduce((a,b)=>{return a+b.product.length;},0)
// const add = shoppingCart.reduce((previousValue, currentValue ) => 
//                                 {return previousValue+currentValue.qty ;},0)

console.log(add);


Answer : 32

//