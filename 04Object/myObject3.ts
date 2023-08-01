type User = {
    readonly _id: string
    name: string;
    email: string;
    isActive: boolean;
    creditCardDetails?: number  // optional
}

let myUser:User = {
    _id:"1234",
    name:"h",
    email:"y@gmail.com",
    isActive:false,

}

myUser.email = "gys@gmail.com"


type cardNumber = {
    cardnumber:String;

}

type cardDate = {
    cardDate:string
}

type cardDetails  = cardNumber & cardDate & {
    cvv:number;
}




export {}