// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.
let stored_username = "rajat";
let stored_password = "dora@123";
let input_username = "rajat";
let input_password = "dora@123";

if (input_username === stored_username) {
  if (input_password === stored_password) {
    console.log("login seccussfull");
  }
  else {
    console.log("Wrong Password")
  }
}
else {
  console.log("Wrong user name")
}