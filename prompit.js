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