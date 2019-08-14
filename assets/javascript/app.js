window.onload = function () {
    // This will hide the questions section until the Start button is clicked - this is up top because I want to run this as soon as it can (after jQuery loads...)
    $("#questionsDiv").hide();


    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var notAnswered;
    // var startGame;

    // user selections
    var q1Ans = "empty";
    var q2Ans = "empty";
    var q3Ans = "empty";
    var q4Ans = "empty";
    var q5Ans = "empty";
    var q6Ans = "empty";
    var q7Ans = "empty";
    var q8Ans = "empty";
    var q9Ans = "empty";
    var q10Ans = "empty";

    // timer stuff
    var time = 30;
    var clockRunning = false;
    var outOfTime = false;
    var myTimer;

    function startTimer() {
            clockRunning = true;
            myTimer = setInterval(count, 1000);
            console.log(clockRunning);
        } ;  
    

console.log("oot: " + outOfTime);
    // function startTimer() {
    //     if (!clockRunning) {
    //         clockRunning = true;
    //         myTimer = setInterval(count, 1000);
    //         console.log(clockRunning);
    //     }   
    // };
    

    function stopTimer() {
        clearInterval(myTimer);
        clockRunning = false;
    }

    function count() {
        time -= 1;
        $("#timerDiv").text(time);
        console.log(time);
        if (time === 0) {
            outOfTime = true;
            clearInterval(myTimer);
            clockRunning = false;
            console.log(clockRunning);
            console.log("oot: " + outOfTime);
            alert("You ran out of time...")
    }};


    // if (time === 0) {
    //     outOfTime = true;
    //     clearInterval(myTimer);
    //     clockRunning = false;
    //     console.log(clockRunning);
    //     // stopTimer();
    // }



    // this will run the startGame function when the start button is clicked. 
    $("#startBtn").on("click", startGame);

    function startGame() {

        console.log("start game");
        $("#mainContentDiv").html("");
        $("#instructionsBtnDiv").html("");
        $("#startBtnDiv").html("");
        // $("#mainContentDiv").load("form.html");
        $("#questionsDiv").show(1000);

        startTimer();
    }


    // test
    $("#submitBtn").on("click", getAnswers)

    

    function getAnswers() {
        stopTimer();
        // for (var i = 1; i < 11; i++) {
        //     q[i]Ans = $('input[name="q1"]:checked'). val();
        // }

        q1Ans = $('input[name="q1"]:checked').val();
        q2Ans = $('input[name="q2"]:checked').val();
        q3Ans = $('input[name="q3"]:checked').val();
        q4Ans = $('input[name="q4"]:checked').val();
        q5Ans = $('input[name="q5"]:checked').val();
        q6Ans = $('input[name="q6"]:checked').val();
        q7Ans = $('input[name="q7"]:checked').val();
        q8Ans = $('input[name="q8"]:checked').val();
        q9Ans = $('input[name="q9"]:checked').val();
        q10Ans = $('input[name="q10"]:checked').val();
        console.log("q1: " + q1Ans);
        console.log("q2: " + q2Ans);
        console.log("q3: " + q3Ans);
        console.log("q4: " + q4Ans);
        console.log("q5: " + q5Ans);
        console.log("q6: " + q6Ans);
        console.log("q7: " + q7Ans);
        console.log("q8: " + q8Ans);
        console.log("q9: " + q9Ans);
        console.log("q10: " + q10Ans);

    }

    // this function will determine which questions were answered, if they were answered correctly and display the results
    // $("")





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
