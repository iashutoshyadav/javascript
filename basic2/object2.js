// const thinderUser = new Object()  singleton object

const thinderUser = {}   //non singleton user

 thinderUser.id = "123abc"
 thinderUser.name = "Vahu"
 thinderUser.isLoggedIn = false


console.log(thinderUser);

const regularUser = {
    email: "abc@gmail.com",
    fullname :{
        firstname: "ashutosh ",
        lastname:"Yadav"
    }
}
console.log(regularUser.fullname) 

const obj1 ={1 : "a" , 2 :"b"}
const obj2 = {3:"c",4:"d"}
//  const obj3 = Object.assign({},obj1,obj2)

 const obj3 = {...obj1,...obj2}
//  console.log(obj3)

const users = [
    {
        id : 1,
        email:"fgj@gmail.com"
    },
    {
        id : 1,
        email:"fgj@gmail.com"
    },
    {
        id : 1,
        email:"fgj@gmail.com"
    }
]

users[1].email
console.log(thinderUser);

console.log(Object.keys(thinderUser));
console.log(Object.values(thinderUser));
console.log(Object.entries(thinderUser));

console.log(thinderUser.hasOwnProperty('isLoggedIn'));

