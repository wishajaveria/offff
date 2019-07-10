function check(){
var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var correct = 0;

if(question1 == "providence"){
    correct++;
}
if(question2 == "hartford"){
    correct++;
}
if(question3 == "albany"){
    correct++;
}

var messages = ["great job!", "thats just okey", "you really need to do better!"];
var pictures = ["images\jj.jpeg", "images/giphy.gif", "C:\Users\Dw\Desktop\manhoos\images\loser.gif"];

var range;
if(correct < 1){
    range = 2;
}
if(correct > 0 && correct < 3){
    range = 1;
}
if(correct > 2){
    range = 0;
}

    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("messages").innerHTML = messages[range];
    document.getElementById("pictures").src = pictures [range];
    document.getElementById("number_correct").innerHTML = "You got" + correct + "correct.";
}