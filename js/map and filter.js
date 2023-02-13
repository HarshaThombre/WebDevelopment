

Map :-

The Map Function is one of the many Methods existing on the JavaScript Array prototype. the Array Map Method operates on an array to 
run a transformation on every element of the array. It does so through use of a callback function which is called for each item of the array. 
After running the callback function on each item, the Map Method returns the transformed array, leaving the original array unchanged.

The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.


const array1 = [1, 4, 9, 16];

const map1 = array1.map(x => x * 2);

console.log(map1);

---------------------------------------------------------------------------------------------------------------------------------
const array1 = [1,2,3,4,5];

const map1 = array1.map(element => element+1);

console.log(map1);


---------------------------------------------------------------------------------------------------------------------------------


const array1 = ['mum', 'dad', 'brother'];

// pass a function to map
const map1 = array1.map(element=>element.length);
//[undefined,undefined,undefined]
console.log(map1);

Ans on Frontend
 [3, 3, 7]

---------------------------------------------------------------------------------------------------------------------------------
//
const array1 = ['mum', 'dad', 'brother'];

// pass a function to map
const map1 =  array1.map(element => {  
                           
    let result ;                               
          if (element.length > 3) {
           result = array1[2]; 
          }
return result
    })                    
  console.log(map1);           

---------------------------------------------------------------------------------------------------------------------------------
//map and filter
const array1 = ['mum', 'dad', 'brother','avinash','tom'];
//[undefined,undefined,undefined,undefined,undefined]
//["", "", "brother", "avinash", ""]
// pass a function to map
const map1 = array1.map(element => {
 if(element.length>3){
 	return element;
 }
return "";
})   
// []
const map2 = array1.filter(ele => ele.length>3)
console.log(map2)
                                   
                                   
                                   
                                 

                                   
                                   
                                   
                                 
                  
                        
