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

    paragraph[0] = "<span class='firstSentence'>This is my first paragraph.</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a facilisis neque, a malesuada turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elementum bibendum mi ut imperdiet. Vivamus vitae odio posuere, pellentesque leo in, dapibus lacus. Phasellus dignissim tincidunt commodo. Nam ipsum justo, porttitor fermentum pulvinar a, mattis sit amet ex. Donec ut purus non lacus viverra viverra quis eu nisi. Praesent porta, ex nec tincidunt ornare, velit est pharetra nulla, a gravida felis enim at purus. Fusce volutpat pharetra dui sed egestas. Nunc at velit eu lacus accumsan consectetur. Fusce auctor sodales mollis. Phasellus feugiat enim eu ipsum interdum euismod ut sit amet justo. Quisque maximus odio nibh, varius scelerisque ante dictum vitae. Praesent blandit mollis mauris, eu sodales lectus egestas mattis. Nunc ut diam sagittis, elementum sapien sit amet, volutpat tellus. Proin consectetur diam vel tincidunt ullamcorper.";
    paragraph[1] = "<span class='firstSentence'>This is my second paragraph.</span> Vivamus ullamcorper erat at urna posuere, a porta tortor viverra. Nam suscipit dictum turpis et auctor. Aenean quis cursus dui. Mauris cursus, enim malesuada euismod tincidunt, tortor lacus vulputate diam, non sollicitudin odio ipsum maximus dui. Nam tincidunt ornare risus, sit amet porta metus semper quis. Mauris condimentum augue nibh, pharetra vestibulum lacus lobortis sit amet. Mauris vitae lacus sodales, faucibus libero sed, ornare risus. Sed ac enim ante. Ut sollicitudin malesuada pharetra. Aenean cursus eu leo eget interdum. Donec placerat ligula metus, et dapibus sem dapibus ac. In laoreet posuere erat, eget mattis ipsum rhoncus et. Quisque porttitor vel ante id cursus. Nullam congue vulputate lobortis. Proin ut lectus ut lorem sagittis convallis laoreet eu risus.";
    paragraph[2] = "<span class='firstSentence'>This is my third paragraph.</span> Duis ac magna condimentum, pretium justo sit amet, sollicitudin nisi. Donec vestibulum lorem at luctus sagittis. Morbi ac ullamcorper lacus, eget elementum nibh. Duis velit lorem, molestie vel nisi a, scelerisque faucibus lorem. Sed condimentum condimentum lacinia. Vestibulum eu vehicula nunc. Duis pharetra nulla vitae leo interdum, sed posuere felis dapibus. Aenean eget leo eget justo tincidunt efficitur. Cras semper metus nec rhoncus tempor. Vivamus finibus, arcu vitae fringilla suscipit, mi enim maximus sem, nec feugiat est ligula in urna. Donec id diam nec diam tristique rutrum. Morbi nec vehicula nibh. Vestibulum mattis augue mauris, at varius nisl mattis id. Ut ut odio sed neque varius accumsan non at augue. Ut nec fringilla magna, eget suscipit magna. In hac habitasse platea dictumst.";



    //check to see if paragraph exists +++++++++++++++++++++++++++++++++++++
    var paragraphElementsLength = paragraphElements.length - 1; 
    for (var index = paragraphElementsLength; index >= 0; index--) {
        console.log(index); 
        if (paragraphElements[index]) {
            paragraphElements[index].innerHTML = paragraph[index];
            console.log("#"+index + " App running");
        }

    }
})();