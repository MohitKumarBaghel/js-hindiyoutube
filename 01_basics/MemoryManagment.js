// let myName ="MohitKumar"
// let myAnotherName = myName;
// myAnotherName ="RohitKumar";
// //
// console.log(myAnotherName)
// console.log(myName)

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

console.log(userOne)//{email: "user@google.com, upi:"user@ybl"}}

let userTwo = userOne
userTwo.email = "userTwo@google.com"

console.log(userTwo) // {email: "userTwo@google.com, upi:"user@ybl"}
console.log(userOne) // {email: "userTwo@google.com, upi:"user@ybl"}

// primitive data type store value in stack ,
// array,object,function store value in Heap