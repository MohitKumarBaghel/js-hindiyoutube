  // create a date  
   
   let mydate = new Date()
//    console.log(mydate); // retrun date like 2024-08-21T06:42:55.911z
//    console.log(mydate.toString())
//   // wed Aug 21 2024  06:44:51 GMT+0000
    
//   console.log(mydate.toDateString())

//   // Wed Aug 21 2024

//   console.log(mydate.toISOString()) 
//   // 2024-08-21T06:48:11.554Z

//   console.log(mydate.toLocaleString())

//   // 8/21/2024, 6:49:21 AM

//   console.log(mydate.toJSON())

//   // 2024-08-21T06:50:35.289Z

 let myCreateddate = new Date(2024,6,9)

 console.log(myCreateddate)
 // 2024-07-09T00:00:00.000Z

 console.log(myCreateddate.toDateString()); 
// Tue Jul 09 2024

let  Newdate = new Date()
 
console.log(Newdate.getDay())  // return day number // 0 to 6
console.log(Newdate.getMonth())// return month number
