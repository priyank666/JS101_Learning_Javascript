// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

//username and password stored in the database while registering
let database_user = "priyankgautam670@gmail.com";
let database_pass = "123abc";

// for login
let user = "priyankgautam670@gmail.com";
let pass = "123abc";

if (database_user == user) {
  
   if (database_pass == pass) {
     
     console.log("Login Successfull");
     
   } else {
     console.log("incorrect password");
   } 
} else {
  console.log("Wrong Credentials");
}