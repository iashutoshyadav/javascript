// stack(primitive), Heap (non-primitive)

let myYoutubename = "tedral gaming"
let anothername = myYoutubename
anothername = "short"

console.log(anothername)
console.log(myYoutubename)

let user1 = {
    email : "vahu@gmail.com",
    password : 12345
}

let user2 = user1
user2.email = "vahu@gmail.com"
console.log(user1.email)
console.log(user2.email)
