window.onload = function () {
    // This will hide the questions section & play again btn until the Start button is clicked - this is up top because I want to run this as soon as it can (after jQuery loads...)
    $("#questionsDiv").hide();
    $("#playAgainBtnDiv").hide();


    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var notAnswered = 0;
    // var startGame;

    // user selections
    var q1Ans;
    var q2Ans;
    var q3Ans;
    var q4Ans;
    var q5Ans;
    var q6Ans;
    var q7Ans;
    var q8Ans;
    var q9Ans;
    var q10Ans;

    // timer stuff
    var time = 100;
    var clockRunning = false;
    var outOfTime = false;
    var myTimer;

    function startTimer() {
            clockRunning = true;
            myTimer = setInterval(count, 1000);
            console.log("clockRunning: " + clockRunning);
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
        console.log("clockRUnning: " + clockRunning);
    }

    function count() {
        time -= 1;
        $("#timerDiv").text(time);
        // console.log(time);
        if (time === 0) {
            outOfTime = true;
            clearInterval(myTimer);
            clockRunning = false;
            console.log("clockRunning: " + clockRunning);
            console.log("oot: " + outOfTime);
            // alert("You ran out of time...")
            getAnswers();
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


    // triggers fetch result function
    $("#submitBtn").on("click", getAnswers)

    
    // Fetches all the results
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

        // hide questions & timer
        $("#questionsDiv").hide();
        $("#timerDiv").text("");
        console.log("time left: " + time);

        if (q1Ans === "3") {
            correctAnswers += 1;
        } else if (q1Ans === undefined) {
            notAnswered += 1;
        } else {
            incorrectAnswers += 1;
        }

        if (q2Ans === "Laugh") {
            correctAnswers += 1;
        } else if (q2Ans === undefined) {
            notAnswered += 1;
        } else {
            incorrectAnswers += 1;
        }

        if (q3Ans === "Subway") {
            correctAnswers += 1;
        } else if (q3Ans === undefined) {
            notAnswered += 1;
        } else {
            incorrectAnswers += 1;
        }

        if (q4Ans === "6 million") {
            correctAnswers += 1;
        } else if (q4Ans === undefined) {
            notAnswered += 1;
        } else {
            incorrectAnswers += 1;
        }

        if (q5Ans === "Unicorn") {
            correctAnswers += 1;
        } else if (q5Ans === undefined) {
            notAnswered += 1;
        } else {
            incorrectAnswers += 1;
        }

        if (q6Ans === "Mob") {
            correctAnswers += 1;
        } else if (q6Ans === undefined) {
            notAnswered += 1;
        } else {
            incorrectAnswers += 1;
        }

        if (q7Ans === "United States") {
            correctAnswers += 1;
        } else if (q7Ans === undefined) {
            notAnswered += 1;
        } else {
            incorrectAnswers += 1;
        }

        if (q8Ans === "Thousands") {
            correctAnswers += 1;
        } else if (q8Ans === undefined) {
            notAnswered += 1;
        } else {
            incorrectAnswers += 1;
        }

        if (q9Ans === "Meerkats") {
            correctAnswers += 1;
        } else if (q9Ans === undefined) {
            notAnswered += 1;
        } else {
            incorrectAnswers += 1;
        }

        if (q10Ans === "A prison") {
            correctAnswers += 1;
        } else if (q10Ans === undefined) {
            notAnswered += 1;
        } else {
            incorrectAnswers += 1;
        }

        console.log("correct: " + correctAnswers);
        console.log("incorrect: " + incorrectAnswers);
        console.log("not answered: " + notAnswered);

        var correct = $("<div>");
        correct.addClass("correct").text("Correct Answers: " + correctAnswers);
        $("#mainContentDiv").append(correct);

        var incorrect = $("<div>");
        incorrect.addClass("incorrect").text("Incorrect Answers: " + incorrectAnswers);
        $("#mainContentDiv").append(incorrect);

        var unAns = $("<div>");
        unAns.addClass("incorrect").text("Unanswered: " + notAnswered);
        $("#mainContentDiv").append(unAns);

        var timeLeft = $("<div>");
        timeLeft.addClass("timeleft").text("You had " + time + " seconds left! Great job!");
        $("#mainContentDiv").append(timeLeft);

        $("#playAgainBtnDiv").show(2000);
        $("#playAgainBtn").on("click", reset);


    }


    // reset function
    function reset() {
        $("#mainContentDiv").html('<img src="assets/images/BattleBrainz.jpg" height="300" width="450">');

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
