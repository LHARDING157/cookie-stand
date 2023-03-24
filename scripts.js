let user = prompt("Hi my name is Luke what's yours?");

console.log("Hi " + user);

let time = prompt("Hello " + user + " Whats the time for you now? (0 - 23)");

let message;

if (time < 12) {
    message = "Good morning " + user;
} else if (time <= 18) {
    message = "Good afternoon " + user;
} else if (time < 24) {
    message = "Good night " + user;
} else {
    message = "That hour does not exist " + user;
}

console.log(message);

let info = confirm("I am an egg wbu " + user + "?");

if(info === true) {
    console.log("Thats good" + user);
} else {
    console.log("Thats no good :/ " + user);
}