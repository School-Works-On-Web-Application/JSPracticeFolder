/* main JavaScript file */
// IIFE - Immediately Invoked Function Expression
(function () {
    "use strict";

    //Define array of html elements
    var paragraphElements = [];

    paragraphElements[0] = document.getElementById("paragraphOne");
    paragraphElements[1] = document.getElementById("paragraphTwo");
    paragraphElements[2] = document.getElementById("paragraphThree");

    //Define paragraph array 
    var paragraph = [];

    paragraph[0] = "This is my first paragraph and only visible in the first page. <br>This next sentence to prove it is actually work.";
    paragraph[1] = "This is my second paragraph and only visible in the second page. <br>This next sentence to prove paragraph two is actually work.";
    paragraph[2] = "This is my third paragraph and only visible in the third page. <br>This next sentence to prove paragraph three is actually work.";



    //check to see if paragraph exists +++++++++++++++++++++++++++++++++++++
    for (var index = 0; index < paragraphElements.length; index++) {
        if (paragraphElements[index]) {
            paragraphElements[index].innerHTML = paragraph[index];
            console.log("App running");
        }

    }
})();