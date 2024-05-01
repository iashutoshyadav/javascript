const name = "hitesh"
const repocount = 50
// console.log(name + repocount);

console.log(`Hello my name is ${name} and my repocount is ${repocount}`);

const gameName = new String('vahu')

// console.log(gameName[3]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(4));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,3)
console.log(newString);

// we not give the negative number//

const newStringOne = "  hitesh  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://vahu.com/vahu%20yadav"

console.log(url.replace('%20','-'));