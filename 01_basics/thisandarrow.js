// const user={
//     userName:"Mohit",
//     price:999,
//     userId:"123Abc",
//     welcomeMessage: function(){
//         console.log(`welcome ${this.userName} to the website`)
//         console.log(this)
//     }
// } 
// // user.welcomeMessage()// curent context value will be print welcome mohit to the website
//  user.userName = "Amit" ; 
//  user.welcomeMessage() // here current context is changed value will print welcome Amit to the website
//  console.log(this) /// this will return empty {} because we are node environment ,and there is no global context


/// *** Arrow function

// const AddTwo =(num1, num2)=>{
   
//       return num1+num2;   // eplicit return 
// }
// console.log(AddTwo(10,20))

const AddTwo =(num1,num2) => ( num1+num2 )

console.log(AddTwo(10,20)) // implicit return in this there is no retrun required 


// object return 

const objecctreturn =() => ({username: "mohit"})

console.log(objecctreturn())  // return username {username: 'mohit'}
