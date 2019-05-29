var total = 0;
var wins = 0;
var losses = 0;
var randNum = Math.floor(Math.random() * 102) + 19;
var diamondVal = Math.floor(Math.random() * 12) + 1;
var rubyVal = Math.floor(Math.random() * 12) + 1;
var sapphireVal = Math.floor(Math.random() * 12) + 1;
var emeraldVal = Math.floor(Math.random() * 12) + 1;

function restart() {

    total = 0;
    $("#total-score").html("<h2>" + total + "</h2>");
    randNum = Math.floor(Math.random() * 102) + 19;
    $("#random-number").html("<h1>" + randNum + "</h1>");
    diamondVal = Math.floor(Math.random() * 12) + 1;
    rubyVal = Math.floor(Math.random() * 12) + 1;
    sapphireVal = Math.floor(Math.random() * 12) + 1;
    emeraldVal = Math.floor(Math.random() * 12) + 1;

}

function checkNumbers() {

    if (total === randNum) {

        wins++;
        console.log(wins);
        $("#wins-loses").html("<h2>You won!</h2>");
        $("#wins").html("<h2>Wins: " + wins + "</h2>");
        restart();

    } else if (total > randNum) {

        losses++;
        console.log(losses);
        $("#wins-loses").html("<h2>You lost!</h2>");
        $("#losses").html("<h2>Losses: " + losses + "</h2>");
        restart();
    }

}

function result() {
    $("#total-score").html("<h2>" + total + "</h2>");
    checkNumbers();
}

$(document).ready(function () {


    $("#total-score").html("<h2>" + total + "</h2>");
    $("#random-number").html("<h1>" + randNum + "</h1>");

    $("#diamond").on("click", function () {

        total += diamondVal;
        result();

    });

    $("#ruby").on("click", function () {

        total += rubyVal;
        result();

    });

    $("#sapphire").on("click", function () {

        total += sapphireVal;
        result();

    });

    $("#emerald").on("click", function () {

        total += emeraldVal;
        result();

    });

    console.log("randNum: " + randNum)

});


