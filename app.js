

var activePlayer ;

var scores;

 var roundScore;
 var isGameOver;
var diceDom= document.querySelector(".dice");
initGame();
function initGame(){
    //togloom ehlehed tiim tolowt oruulna
    isGameOver=false;
    activePlayer = 0;
    scores=[0,0];
    roundScore=0;
    window.document.querySelector("#score-0").textContent="0";  
    window.document.querySelector("#score-1").textContent="0";
    window.document.querySelector("#current-0").textContent="0";
    window.document.querySelector("#current-1").textContent="0";
    diceDom.style.display="none";
    document.getElementById("name-0").textContent='Player 1';
    document.getElementById("name-1").textContent='Player 2';
    document.getElementById('name-0').classList.remove("winner");
    document.getElementById('name-1').classList.remove("winner");
    document.querySelector(".player-0-panel").classList.add("active");
}
window.document.querySelector(".btn-roll").addEventListener('click', function (){
    if(isGameOver===false){
    var diceNumber= Math.floor((Math.random()*6))+1;

    diceDom.style.display="block";
    document.querySelector(".dice").src="dice-"+diceNumber+".png";

    if (diceNumber!=1){
        // 1 ees ylgaatai too ywuulna.
        roundScore=roundScore+diceNumber;
        document.getElementById("current-"+activePlayer).textContent=roundScore;
    }
    else{
       eeljSolih();
    
    }
}
});
window.document.querySelector(".btn-hold").addEventListener('click', function (){
    if(isGameOver===false){
   scores[activePlayer]=scores[activePlayer]+roundScore;
   document.getElementById("score-"+activePlayer).textContent=scores[activePlayer];
   if(scores[activePlayer] >= 20){
    document.getElementById("name-"+activePlayer).textContent='Ялагч';
    document.getElementById("name-"+activePlayer).classList.add("winner");
    isGameOver=true;
   }
   else{
    eeljSolih();
   }
}
}
);
function eeljSolih(){
    roundScore=0;
    document.getElementById("current-"+activePlayer).textContent=0;
        //1 buuwal toglogchiim eeljig solino
    activePlayer ===0 ? (activePlayer=1) : (activePlayer=0);
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    diceDom.style.display="none";
}

document.querySelector(".btn-new").addEventListener('click',initGame);