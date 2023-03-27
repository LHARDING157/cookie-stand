function yourName() {
    let user = prompt("What's Your Name?")
    return document.write(user)
}

function timeOfDay() {
    let time = prompt("Hi " + user + " What time is it? (0 - 23)");

    let message;

    if (time < 12) {
        message = "Good Morning! " + user;
    } else if (time <= 18) {
        message = "Good Afternoon! " + user;
    } else if (time <= 18) {
        message = "Good Night! " + user;
    } else {
        message = "That hour doesn't exist! :D"
    }
    console.log(message);
    return(message);
}