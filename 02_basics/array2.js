const marvel_heros=["thor","Ironman","spiderman"]
const dc_heros=["superman","flash","batman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
//  const allheros=marvel_heros.concat(dc_heros)
// console.log(allheros);


const all_new_heros=[...marvel_heros,...dc_heros]   // using spread operator.
console.log(all_new_heros); 

const another_Array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const new_another_array=another_Array.flat(Infinity)
console.log(new_another_array);

console.log(Array.isArray("musa"));
console.log(Array.from("musa"))
console.log(Array.from({name:"musa"})); //empty array intersting

let score1=100
let score2=200
let socre3=300
console.log(Array.of(score1,score2,socre3));
