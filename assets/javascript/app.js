window.onload = function () {

    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var notAnswered;
    // var startGame;


    // timer stuff


    // instructions modal pop-up
    $("#instructions").on("click", instPop);

    function instPop () {


    }



    // this will run the startGame function (the meat of this project) when the start button is clicked. 
    $("#startBtn").on("click", startGame);

    function startGame() {

        console.log("start game");


    }



    // Modal functionality for the instructions button 
    var modal = document.getElementById("instModal");
    var modalBtn = document.getElementById("instructionsBtn");
    var span = document.getElementsByClassName("close")[0];
    modalBtn.onclick = function() {
        modal.style.display = "block";
    }
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
        }
    }




} //fin
