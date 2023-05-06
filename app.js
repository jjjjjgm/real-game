var activePlayer = 0;

var scores=[0,0];

var roundScore=0;


window.document.querySelector("#score-0").textContent="0";
window.document.querySelector("#score-1").textContent="0";
window.document.querySelector("#current-0").textContent="0";
window.document.querySelector("#current-1").textContent="0";


var diceDom= document.querySelector(".dice");
diceDom.style.display="none";
window.document.querySelector(".btn-roll").addEventListener('click', function (){
    var diceNumber= Math.floor((Math.random()*6))+1;

    diceDom.style.display="block";
    document.querySelector(".dice").src="dice-"+diceNumber+".png";

    if (diceNumber!=1){
        // 1 ees ylgaatai too ywuulna.
        roundScore=roundScore+diceNumber;
        document.getElementById("current-"+activePlayer).textContent=roundScore;
    }
    else{
        roundScore=0;
        document.getElementById("current-"+activePlayer).textContent=0;
        //1 buuwal toglogchiim eeljig solino
        activePlayer ===0 ? (activePlayer=1) : (activePlayer=0);
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");
        diceDom.style.display="none";
    
    }
});

