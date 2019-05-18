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
    $("#random-number").html("<h2>" + randNum + "</h2>");
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
        $("#losses").html("<h3>Losses: " + losses + "</h3>");
        restart();
    }

}

$(document).ready(function () {


    $("#total-score").html("<h2>" + total + "</h2>");
    $("#random-number").html("<h2>" + randNum + "</h2>");

    $("#diamond").on("click", function () {

        total += diamondVal;
        $("#total-score").html("<h2>" + total + "</h2>");
        checkNumbers();
        console.log(total);

    });

    $("#ruby").on("click", function () {

        total += rubyVal;
        $("#total-score").html("<h2>" + total + "</h2>");
        checkNumbers();
        console.log(total);

    });

    $("#sapphire").on("click", function () {

        total += sapphireVal;
        $("#total-score").html("<h2>" + total + "</h2>");
        checkNumbers();
        console.log(total);

    });

    $("#emerald").on("click", function () {

        total += emeraldVal;
        $("#total-score").html("<h2>" + total + "</h2>");
        checkNumbers();
        console.log(total);

    });

    console.log("randNum: " + randNum)

});


