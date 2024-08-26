 const userloggedIn = true
 const debitcard = true 
 const userloggedGoogle = true 
 const userloggedEmail = true 

 if(userloggedIn == true && debitcard == false ){

    console.log("user logged in successfully...")
 }
else if (userloggedGoogle == false || userloggedEmail == false ){
    
    console.log("user logged from google account")
 }
 else{
    console.log("please enter correct information")
 }