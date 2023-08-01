// Difference b/w Type Aliases and interfaces
// Type aliases and interfaces are very similar , and in many cases you can choose b/w them freely.
// Almost all features of an intgerface are available in type , the key distinction is that a type cannot
// be re-opened to add new properties vs an interface which is always extendable.



interface User {
    readonly dbId:number,
    email:string,
    userId: number,
    googleId?:string,
    startTrial : () => string,
    startTrial2():string ,
    getCupon(cuponName:string):number

}

interface User{
    githubToken:string
}

interface Admin extends User{
    role:"admin" | "ta" | "learner",
}

// const yash:User = {
//     dbId:323213,
//     githubToken:"github",
//     email:"gys@gmail.com",
//     userId:2211,
//     startTrial:()=>{
//         return "Trial started"
//     },

//     startTrial2: ()=>{
//         return "trail2 started"
//     },

//     getCupon:(name:"gys10")=> {
//         return 10;
        
//     },
// }

const yash:Admin = {
    dbId:323213,
    githubToken:"github",
    email:"gys@gmail.com",
    role:"admin",
    userId:2211,
    startTrial:()=>{
        return "Trial started"
    },

    startTrial2: ()=>{
        return "trail2 started"
    },

    getCupon:(name:"gys10")=> {
        return 10;
        
    },
}

yash.email = "g@gmail.com"
// yash.dbId = 43 // error -> readonly

