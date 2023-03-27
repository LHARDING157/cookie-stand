let user;

function yourName() {
    user = prompt("What is your name?");
    return document.write(user);
}

function guessANumber(){
    let answer;

    while(answer != 7){
        answer= prompt("Guess a number between 1 - 10")

        if(answer != 7){
            alert("Try Again!")
        } else {
            alert("Good Job! That's Correct!")
        }
    }
}

guessANumber();

function timeOfDay() {
    let time = prompt("Hi " + user + ", what hour is it? (0 - 23)");

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
    return message;
}

function displayRating() {
    let output = "";
    let rating = prompt("Rate our cookies on a of Scale of 1-5, how many stars?");
    for (let i = 0; i < rating; i++) {
        output += "<img class='star' src='images/star.jpg' alt='rating star'>";
    }
    return document.write(output, " You Input " + rating + " Stars");
}