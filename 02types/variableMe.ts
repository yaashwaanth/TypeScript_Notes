let greetings: string = "Hello, Yashwanth"

// greetings = 6; // type safety
console.log(greetings);


let mynum = 6;
// mynum.toUpperCase(); // type safety


// Note -> Javascript and typescript doesn't have int or float , everything is number.


//********  Number ***********

let userId: number = 433;

// this is better code
let userId2 = 433;


// boolean

let isLoggedIn: boolean = false


// any -> it is not a special type like string number , it simple turnoff type checking.

let hero;
// let hero:string;
function getHero(){
    return "thor"
}

hero = getHero();
console.log(hero);




export {}