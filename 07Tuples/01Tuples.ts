// Tuple -> it is a special type of array with some restrictions


// const user: (string|number)[] = ["GYS",1]
let user: [string,number,boolean]
// user = [true,"GYS",232]; // error -> order should be maintained
user = ["GYS",232,true];


let rgb: [number,number,number] = [255,123,112]
// let rgb: [number,number,number] = [255,123,112,true]  // not allowed


type User = [number, string]
const newUser: User = [112,"example@google.com"]

newUser[1] = "gys@gmail.com"

newUser.push("raju") // not following the restiction we added , as we canot add more than 2 numbers in tuples.





export{}