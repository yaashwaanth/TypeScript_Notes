

// functions

// function addTwo(num){
//     // num.toUpperCase() // as in this case num is any but it is also accepting string methods which is wrong
//     return num + 2
// }

// addTwo(5);

function addTwo(num:number){
    return num + 2
}


addTwo(5);

function getUpper(val:string){
    return val.toUpperCase();
}

getUpper("d");


function signUpUser(name:string,email:string,isPaid:boolean){

}

signUpUser("Yash","gys@gmail.com",false);



// default function
let loginUser = (name:string,email:string,isPaid:boolean=false) =>{

}

loginUser("yash","yashwanth2gmail.com");


// function return type

function adddTwo(num:number):number{
    // return "hello" // returns only number
    return num + 2;
}


let myValue = adddTwo(5);

// Multiple return types
// function getValue(myVal:number){
//     if(myVal>5){
//         return true;
//     }
//     return "200 OK"
// }


const getHello = (s:string):string => {
    return "";
}


const heros = ["thor","spiderman","ironman"];
// const hero =[1,2,3];

heros.map((hero):string =>{
    return `hero is ${hero}`
})


// void means is no value is returing
function consoleError(errmsg:string):void{
    console.log(errmsg);
    
}

function summ(a:number,b:number){
    let c = a+b
}

// never ->   A function returning 'never' cannot have a reachable end point.

// function fun3(num1:number,num2:number):never{  // not never , this is void
//     let c = num1+num2
// }

function raiseError(message:string){
    throw new Error(message);
    console.log('addflfs'); // not going to work
    
}

function handleError(errmsg:string):never{
   throw new Error(errmsg);
    // cannot reach end point of the function...
}

function forever():never{
    while(true){
        console.log('typescript');
        
    }
}



export{}