document.query

//DOM js
var heading =document.firstElementChild.lastElementChild.firstElementChild

heading.style.color = "blue";
heading.style.fontSize = "50px";

//Selecting HTML Elements with Javascript
// getElementByTagName

document.getElementsByTagName("li")[2].style.color = "purple";

//getElementByClass

document.getElementsByClassName("btn")[0].style.backgroundColor = "greenyellow";

var li = document.getElementsByClassName("list")[0];
li.style.fontSize = "30px";
li.style.color ="red";

//getElementById

document.getElementById("heading").style.textDecoration = "underline";

var heading =document.getElementById("heading");
heading.style.textDecorationColor = "red";

//querySelector

document.querySelector("li a").style.textDecoration ="none";
document.querySelector("h1#heading").style.fontStyle = "italic";

//querySelectorAll 

document.querySelectorAll(".list")[1].style.color = "green";


document.querySelectorAll("li a")[0].style.color = "red";
































































