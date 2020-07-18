var randomVariable1 = Math.floor(Math.random() * 6) + 1;
var randomVariable2 = Math.floor(Math.random() * 6) + 1;


if (randomVariable1 > randomVariable2) {
    var x = document.querySelector("h1");
    x.innerHTML = "<h1>Player 1 wins</h1>";
} else if (randomVariable1 < randomVariable2) {
    var x = document.querySelector("h1");
    x.innerHTML = "<h1>Player 2 wins</h1>";
} else {
    var x = document.querySelector("h1");
    x.innerHTML = "<h1>Match draws</h1>";
}



var dicee = "images/dice" + randomVariable1 + ".png";
document.querySelector(".img1").setAttribute("src", dicee);


//var randomVariable2 = Math.floor(Math.random() * 6) + 1;

var dicee = "images/dice" + randomVariable2 + ".png";
document.querySelector(".img2").setAttribute("src", dicee);



// if (randomVariable1 > randomVariable2) {
//     document.querySelector("h1").setAttribute("h1", "Player 1 wins");
// } else {
//     document.querySelector("h1").setAttribute("h1", "Player 2 wins");
// }



// So, Two things to note here,

// 1) We can remove "" when using var ;
// 2) just tweak src file (for eg: here we have changed \ to / ) and then it worked fine.

// var randomNumber1 = Math.floor(Math.random() * 6) + 1;


// var diceImage = ("images/dice" + randomNumber1 + ".png");


// document.querySelector(".img1").setAttribute("src", diceImage);