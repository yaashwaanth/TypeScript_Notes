"use strict";
// functions
Object.defineProperty(exports, "__esModule", { value: true });
// function addTwo(num){
//     // num.toUpperCase() // as in this case num is any but it is also accepting string methods which is wrong
//     return num + 2
// }
// addTwo(5);
function addTwo(num) {
    return num + 2;
}
addTwo(5);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("d");
function signUpUser(name, email, isPaid) {
}
signUpUser("Yash", "gys@gmail.com", false);
// default function
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("yash", "yashwanth2gmail.com");
