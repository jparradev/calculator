$(document).ready(function () {

    var firstNumber = 0;
    var secondNumber = 0;
    var operator = "";
    var result = 0;
    var isOperatorChosen = false;
    var isCalculated = false;



    function initializeCalculator() {
        firstNumber = "";
        secondNumber = "";
        operator = "";
        isOperatorChosen = false;
        isCalculated = false;

        $("#first-number, #second-number, #operator, #result").empty();
    }

    $(".number").on("click", function () {

        if (isCalculated) {
            return false;
        }

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

        if (!firstNumber || isCalculated) {
            return false;
        }

        isOperatorChosen = true;

        operator = $(this).val();

        $("#operator").text($(this).text());

    });

    $(".pos").on("click", function () {

        if (isCalculated) {
            return false;
        }

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

        if (isCalculated) {
            return false;
        }

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


        if (isCalculated) {
            return false;
        }

        isCalculated = true;

        firstNumber = parseFloat(firstNumber);
        secondNumber = parseFloat(secondNumber);

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

        initializeCalculator();

    });
    initializeCalculator();
});