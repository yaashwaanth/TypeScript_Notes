// union is a combination of 2 or more data types 
// use union instead of any

let score:number | string = 33

score = "A"



type User = {
    name: string;
    id: number;
}

type Admin = {
    username: string;
    id: number;
}


let yash : User | Admin = {
       name:"yashwanth",
       id:334,
}

yash = {username:"yash",id:334};



// function getDbId(id:number | string){
//     // making some API calls
//     console.log(`DB id is : ${id}`);
    
// }
function getDbId(id:number | string){
    if(typeof id === "string"){
        id.toLowerCase()
    }else{
        id+2;
    }
    
}

getDbId(3);
getDbId("3");



// array

const data:number[]  = [1,2,3,4,5,6,7]
const data2: string[]  = ["1","2","3","4","5","6","7"];

let data3: number[] | string[] = [1,3,4,23];

data3=["12","14"];

let data4: (string|number|boolean)[] = [1,"3",true];


let pi:3.14 = 3.14;

// pi = 3.145 // gives error



let seatAllotment: "aisle" | "middle" | "window";
seatAllotment = "aisle"
// seatAllotment = "crew"


export{}