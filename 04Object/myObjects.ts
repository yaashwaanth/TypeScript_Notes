const User = {

    name:"yash",
    email:"yash@gmail.dev",
    inActive:true
}

function createUser({name:string,isPaid:boolean}){}

createUser({name:"yash",isPaid:true})
// here we are sending more data in parameters -> weird behaviour
let newUser = {name:"yash",isPaid:true,email:"y@gmail.com"}
createUser(newUser);

// function returning object

function createCourse():{name:string,isPaid:boolean}{
    return {name:"yash",isPaid:true};
}




export{}