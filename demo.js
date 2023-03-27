document.getElementById("demo").innerHTML = message;


//for(initialization; CSSConditionRule; increment){
// statements
// }

// string - sentence "tim"
// number - 1
// boolean - true or false
// array - ["lou", "victor", "jeremy"]
// object - {name: "lou", age: 21,}

let myFavPets = ["dog", "cat", "goldfish"]

for(let i = 0; i < myFavPets.length; 1++ ){
    console.log("I love my pet " + myFavPets[i])
}


// while(condition){
// statement
//}

let n = 0
let x = 0

while(n < 3){
    n++
    x += n
    console.log(n)
    console.log(x)
}