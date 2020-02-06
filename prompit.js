var now = new Date();
var hour = now.getHours();
//read the name from the prompit box as a string
name = window.prompt("pleas enter your name");

//determine whether its morning

if (hour < 12)
    document.write(" <h1>Good Morning ");
//determine whether the time is PM

if (hour >= 12) { //covert to 12-hour clock
    hour = hour - 12;

    //determine whether it is before 6 PM

    if (hour < 6)
        document.write("<h1>good after noon");
    //determine wheter it is after 6 PM

    if (hour >= 6)
        document.write("<h1>good Evening");
} //end if 
document.write(name + " welcome javaScript programming!");


var age = window.prompt("enter your age");
var comment ;


for (var i=1; i< 15 ; i++) {
    <img src=""  alt = "this image not exist"></img>

}
var w =  Yage(age);

function Yage(age){
    if(age < 15 ){
        comment = "you are baby";
    }

    if(age => 15 || age < 25 ){
        comment = "you are young";
    }

    if(age >25  ){
        comment = "you are khtyaar";
    }
    return comment;

    document.write(w);
}