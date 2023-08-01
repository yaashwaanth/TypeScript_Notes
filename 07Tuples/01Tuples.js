"use strict";
// Tuple -> it is a special type of array with some restrictions
Object.defineProperty(exports, "__esModule", { value: true });
// const user: (string|number)[] = ["GYS",1]
var user;
// user = [true,"GYS",232]; // error -> order should be maintained
user = ["GYS", 232, true];
var rgb = [255, 123, 112];
var newUser = [112, "example@google.com"];
newUser[1] = "gys@gmail.com";
newUser.push("raju");
console.log(newUser);
