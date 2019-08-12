window.onload = function () {

    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var notAnswered;
    // var startGame;


    // timer stuff
    var time = 100;
    var clockRunning = false;

    function startTimer() {
        if (!clockRunning) {
            clockRunning = true;
            myInterval = setInterval(count, 1000)
        }
    } 

    function count() {
        time -= 1;
        $("#timerDiv").text(time);
    }


    // this will run the startGame function (the meat of this project) when the start button is clicked. 
    $("#startBtn").on("click", startGame);

    function startGame() {

        console.log("start game");
        $("#mainContentDiv").html("");
        $("#instructionsBtnDiv").html("");
        $("#startBtnDiv").html("");
        $("#mainContentDiv").load("form.html");
        startTimer();
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
