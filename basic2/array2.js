const marvel_heros = ["thor" , "ironman" ,"Spiderman"];

const dc_heros =["superman" ,"flash" ," batman"];

marvel_heros.push(dc_heros);
console.log(marvel_heros);
console.log(marvel_heros[3][1]);

 const allheros = marvel_heros.concat(dc_heros)
console.log(allheros)

const myheros = [...marvel_heros,...dc_heros]
console.log(myheros);

const anotherarray = [1,2,3, [4,5,6],7,8,[6,7,[5,8]]]
const real_another_array = anotherarray.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("vahu"))
console.log(Array.from("vahu"))
console.log(Array.from({name: "vahu"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 , score2, score3))