// singleton//

// object literals//
const mySym = Symbol("key1")

const JsUser = {
name: "VAhu",
age:18,
location :"hdcdch",
[mySym] : "mykey1"

}

console.log(JsUser.age)
console.log(JsUser["name"])
console.log(JsUser[mySym])

JsUser.name = "ashu"
// Object.freeze(JsUser)
JsUser.name = "Yadav"
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello js user");
}
JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
