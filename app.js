var activePlayer = 1;

var scores=[0,0];

var roundScore=0;


window.document.querySelector("#score-0").textContent="0";
window.document.querySelector("#score-1").textContent="0";
window.document.querySelector("#current-0").textContent="0";
window.document.querySelector("#current-1").textContent="0";


var diceDom= document.querySelector(".dice");

window.document.querySelector(".btn-roll").addEventListener('click', function (){
    var diceNumber= Math.floor((Math.random()*6))+1;

    window.document.querySelector(".dice").style.display="block";
    document.querySelector(".dice").src="dice-"+diceNumber+".png";
});

