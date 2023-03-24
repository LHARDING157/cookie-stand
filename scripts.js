let user = prompt("Hi my name is Luke what's yours?");

console.log("Hi " + user);

let time = prompt("Hello " + user + " Whats the time for you now? (0 - 23)");

let message;

if (time < 12) {
    message = "Good morning! " + user + " Hope you have a good day!";
} else if (time <= 18) {
    message = "Good afternoon " + user + " You better be having a good day! -__-";
} else if (time < 24) {
    message = "Good night " + user + ", Now GO to Sleep I'm tired!";
} else {
    message = "That hour does not exist " + user;
}

console.log(message);

let info = confirm("I am an egg, Are you an egg " + user + "?");

if(info === true) {
    console.log("Thats good " + user);
} else {
    console.log("Thats no good :/ " + user);
}