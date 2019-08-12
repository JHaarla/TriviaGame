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








} //fin
