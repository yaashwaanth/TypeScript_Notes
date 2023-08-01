"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hello, Yashwanth";
// greetings = 6; // type safety
console.log(greetings);
var mynum = 6;
// mynum.toUpperCase(); // type safety
// Note -> Javascript and typescript doesn't have int or float , everything is number.
//********  Number ***********
var userId = 433;
// this is better code
var userId2 = 433;
// boolean
var isLoggedIn = false;
// any -> it is not a special type like string number , it simple turnoff type checking.
var hero;
// let hero:string;
function getHero() {
    return "thor";
}
hero = getHero();
console.log(hero);
