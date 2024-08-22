const myArray = [0,1,2,3,4,5];

// console.log(myArray)
// myArray.push(6)
//  console.log(myArray)
// myArray.pop()
//  console.log(myArray)
// myArray.unshift(10)
// console.log(myArray)
// console.log(myArray)
// myArray.shift()
// console.log(myArray)

//// includes and indexof 

// console.log(myArray.includes(3)) /// return true/false check value is present in aaray or not

// console.log(myArray.indexOf(3)) // return value's index position /or return -1 if value not present

///// slice and splice

// const mnarr1 = myArray.slice(1,3)
// console.log(myArray)// return[0,1,2,3,4,5]
// console.log(mnarr1)  // retrun [1,2] 

// console.log(myArray) // return [0,1,2,3,4,5]
// const mnarr2 = myArray.splice(1,3)
// console.log(mnarr2) // return [1,2,3]
// console.log(myArray) // return [0,4,5] this change into the original array


 /// concat and spread method in array

   const computer = ["Dell","lenovo","Sony","HP","MAC"];
   const Mobile =["Apple","MI","REALME","MOTO"];

//    const gadgets = computer.concat(Mobile);

//    console.log(gadgets);//concate both array in single array
// // [
//     'Dell', 'lenovo','Sony', 'HP','MAC','Apple','MI','REALME','MOTO'
//   ]

// const  spreadArray =[...computer, ...Mobile];
// console.log("this array is]..........")
// console.log(spreadArray);

/// spread will spread all values of arary like a broken glass it can accept multiple arrays 
/// ['Dell','lenovo','Sony','HP','MAC','Apple','MI','REALME', 'MOTO']

/// flat method in arrays 

// const arr1 = [1,2,3,[4,5,[6,7],8,9],10,11];
// console.log(arr1); //[ 1, 2, 3, [ 4, 5, [ 6, 7 ], 8, 9 ], 10, 11 ]
// const arra2 = arr1.flat(1)
// console.log(arra2);//[[ 1, 2, 3, 4, 5, [ 6, 7 ], 8, 9, 10, 11 ]]

// const arr3 =arr1.flat(2)
// console.log(arr3) // [ 1, 2, 3, 4,5, 6, 7, 8, 9, 10,11]

// console.log(Array.isArray("Mohit")) /// this will check the given item is array or not 
// const arrayfrom = (Array.from("Mohit")) // this will create the array with the "from"
// // from is used of convert string and object into array
// console.log(arrayfrom); 

// console.log(Array.from({name: "Mohit"}));
// this will create blank arary first clear that which type of array you want 'Keys' or 'values'


const score1 = 300;
const score2 = 400;
const score3 = 500;

// create the array with multiple variable by using 'of'

const scores = (Array.of(score1,score2,score3));
console.log(scores);

// [300,400,500]
