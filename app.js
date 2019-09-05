$(document).ready(function () {

    // Makes variables global for runtime of app
    var firstNumber = 0;
    var secondNumber = 0;
    var operator = "";
    var result = 0;
    var isOperatorChosen = false;
    var isCalculated = false;



    // Function to reset app, or "clear". Also initializes upon loading app
    function initializeCalculator() {
        firstNumber = "";
        secondNumber = "";
        operator = "";
        isOperatorChosen = false;
        isCalculated = false;

        $("#first-number, #second-number, #operator, #result").empty();
    }

    //Function to handle click event for numbers
    $(".number").on("click", function () {

        // If app has already calculated
        if (isCalculated) {
            return false;
        }

        // If operator is chosen, we should be writing the secondNumber, otherwise, the firstNumber
        if (isOperatorChosen) {
            secondNumber += $(this).val();
            $("#result").text(secondNumber);

        }
        else {
            firstNumber += $(this).val();
            $("#result").text(firstNumber);
        }

    });

    $(".operator").on("click", function () {

        // Check if a first number has already been selected
        // Or we've already run a calculation, if so we just exit.
        if (!firstNumber || isCalculated) {
            return false;
        }

        // Set isOperatorChosen to true so we start writing to secondNumber
        isOperatorChosen = true;

        // Store off the operator
        operator = $(this).val();

        // Set the HTML of the #operator to the text of what was clicked
        $("#operator").text($(this).text());

    });

    $(".pos").on("click", function () {

        // Check if we've already run a calculation, if so... we'll just.
        if (isCalculated) {
            return false;
        }

        // If operator is chosen, we should be writing the secondNumber, otherwise, the firstNumber
        if (isOperatorChosen) {
            secondNumber = ~secondNumber + 1
            console.log(secondNumber);
            $("#result").text(secondNumber);

        }
        else {
            firstNumber = ~firstNumber + 1
            console.log(firstNumber);
            $("#result").text(firstNumber);
        }

    });

    $(".percent").on("click", function () {

        // Check if we've already run a calculation, if so... we'll just.
        if (isCalculated) {
            return false;
        }

        // If operator is chosen, we should be writing the secondNumber, otherwise, the firstNumber
        if (isOperatorChosen) {
            secondNumber = secondNumber * .01;
            console.log(secondNumber);
            $("#result").text(secondNumber);

        }
        else {
            firstNumber = firstNumber * .01;
            console.log(firstNumber);
            $("#result").text(firstNumber);
        }

    });

    $(".equal").on("click", function () {

        // If we already clicked equal, don't do the calculation again
        if (isCalculated) {
            return false;
        }

        // Set isCalculated to true so that we don't get in a weird UI state by clicking buttons again
        isCalculated = true;

        // Use 'parseFloat' to convert our string representation of numbers into actual integers
        firstNumber = parseFloat(firstNumber);
        secondNumber = parseFloat(secondNumber);
        // Based on the operator that was chosen.
        // Then run the operation and set the HTML of the result of that operation
        if (operator === "plus") {
            result = firstNumber + secondNumber;
        }

        else if (operator === "minus") {
            result = firstNumber - secondNumber;
        }

        else if (operator === "times") {
            result = firstNumber * secondNumber;
        }

        else if (operator === "divide") {
            result = firstNumber / secondNumber;
        }

        $("#result").text(result);

    });

    $(".clear").on("click", function () {

        // Call initializeCalculater so we can reset the state of our app
        initializeCalculator();

    });
    initializeCalculator();
});