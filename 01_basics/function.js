// function  MyFun(){  // function defenation 
 
//  console.log("Hi!, i am mohit...") // function declaration

// }

// MyFun() // function calling


// function with parameter

// function MyFun(str){
//     return ` ${str} just loggedin`
// }
 
// // console.log(MyFun("")) // just loggedin
//  console.log(MyFun()) // undefined just loggedin

//  console.log(MyFun("Mohit")) // Mohit just loggedin

// function MyFun(num1,num2){

//       return num1+num2
// }

//  const result = MyFun(10,20)

//  console.log(result)

//   ******** Rest parameter   ...parameter
//  function ShoppingCart(...items){

//      return items
//  }
// // this will accepet multiple argument and return as a array
//  console.log(ShoppingCart("Book","Butter","Bread","jam"))
 
//  // [ 'Book', 'Butter', 'Bread', 'jam' ]


// *******objects in function 

//  const User={
//     username: "mohitkumar" ,
//     userId:"123mohit",
//     userDesgnation:"SoftwareTrainee" 
//   }

//   function handleObject(anyobject){
 
//    console.log(`user name is ${anyobject.username} userid ${anyobject.userId} userdesignation ${anyobject.userDesgnation}`) 

//   }
//     handleObject(User)

// another way object into function

// function handleObject(anyobject){
 
//         console.log(`user name is ${anyobject.username} userid ${anyobject.userId} userdesignation ${anyobject.userDesgnation}`) 
    
//     }

//     // here we can object into function call like 

//     handleObject({
//         username:"mohit kumar",
//         userId:"125ABC",
//         userDesgnation:"Software Trainee"
//     }) 


//   ******* array into objects

//    const myArray=["mohit","sumit",200,100,"amit"]

//       function handleArray(anyArray){
//           return (anyArray[1])
//       }
//  // pass array name at the time of calling into function as argumnet
//       console.log(handleArray(myArray)) // sumit

//      ******* Nested Function

function FunOne(){

    const username ="mohit"
    function FunTwo(){
         const userCompaney ="Google"
         console.log(username + userCompaney)
    } 
      FunTwo()
      console.log(username)
}
    
 FunOne()

 // mohitGoogle   //mohit