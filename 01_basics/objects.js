  
//  const mySym = Symbol("key1");

// const JsUser ={
//    "name":"mohit",
//    "full name":"Mohit Kumar Baghel",
//    [mySym] :"mykey1" ,
//    age: 26,
//    email: "mohit@videalpha.com",
//    isLoggedIn: false ,
//    lastloginDay : ["Monday","Friday"]
// }
// console.log(JsUser.email) // return mohit@videalpha.com
// console.log(JsUser["email"]) // return mohit@videalpha.com

// // if user declare "full name" as like this than 
//  console.log(JsUser["name"])  
// //  console.log(JsUser."full name") // give error


// // symbol value access in objects 
  
// // console.log(JsUser.mySym) // retrun undefiend 
// console.log(JsUser[mySym]) /// return mySym value myKey1

//  // change object value, it will just override.

//  // objectname.keyname = "new value"
 
//      JsUser.email = "mohit@google.com" ;
     
//      console.log(JsUser.email)

//      //freeze  will freez the object and cant't cahnge anything in object 
    
//      console.log(JsUser)

//      Object.freeze(JsUser)

      /// singleton object 
      
      const userDetails = new Object()

      userDetails.name = "MohitKumar"
      userDetails.id = "abc123";
      userDetails.email= "some@google.com"

     // console.log(userDetails)

      // objects into objects  assign multiple objects into objects

      const regularUser = {
         userEmail: "user@gmail.com",
         fullName:{
            userfullname:{
               firstName:"Mohit",
               lastname:"Baghel"
            }
         }
      }

      // access objects data 

      // console.log(regularUser.fullName.userfullname.firstName); // Mohit
      // console.log(regularUser.userEmail); //  user@gmail.com
      // console.log(regularUser.fullName.userfullname.lastname);  // Baghel
   

         // combine multiple objects in a single objects

         const obj1 = { 1:"A",2:"B",3:"C"}
         const obj2 = { 4:"D",5:"E",6:"F"}

      //   const obj3 = Object.assign(obj1,obj2); // this will work
        ///   const obj3 = Object.assign({},obj1,obj2) // this will also work {}target , source1,source2
          
        const obj3 = {...obj1 , ...obj2} 

        // spread method.... this will gave same result .
         
    //    console.log(obj3);


     // array of objects 

     const users=[
      {
         email:"user1@gmail.com" ,
         id:"123abc"
      },
      {
         email: "user2@gmail.com",
         id: "124abc"
      },
      {
           email:"user3@gmail.com",
           id: "125abc"   
      }
     ]

   // /// here we can access the array of objects value
   //  console.log(users[0].email,users[0].id) //  user1@gmail.com 123abc
   //  console.log(users[1].email,users[1].id) //  user2@gmail.com 124abc

   //  console.log(Object.keys(userDetails)) // return [ 'name', 'id', 'email' ]

   //  console.log(Object.values(userDetails)) // [ 'MohitKumar', 'abc123', 'some@google.com' ]

    // Destructure of object

    const course={
      courseName:"Javascript",
      coursePrice: 999,
      courseId: "JS1"
    }
     // Destructure way of object
     const {courseId} = course
   console.log(courseId)  // this will gave JS1
   console.log(coursePrice)   // this will give error because it is not destructure yet
   
   const{coursePrice} = course
   console.log(coursePrice) // now return 999
   


