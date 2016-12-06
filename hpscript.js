var home = document.getElementById("home");
var projects = document.getElementById("projects");
var contact = document.getElementById("contact");
var about = document.getElementById("about");
var coral = "#FCB0B3";
var crystal = "#b3daff";
/*
function sayHi(){
  alert('Hi!');
}
*/
/*
document.onclick = function coolShit (event) {
	alert("hello it works congrats")
}
*/

function colorshifthome() {
	document.getElementById("home").style.backgroundColor = '#b3daff';
};
function coloroffshifthome() {
	document.getElementById("home").style.backgroundColor = '#FCB0B3';
};
function colorshiftprojects() {
	document.getElementById("projects").style.backgroundColor = '#b3daff';
};
function coloroffshiftprojects() {
	document.getElementById("projects").style.backgroundColor = '#FCB0B3';
};
function colorshiftcontact() {
	document.getElementById("contact").style.backgroundColor = '#b3daff';
};
function coloroffshiftcontact() {
	document.getElementById("contact").style.backgroundColor = '#FCB0B3';
};
function colorshiftabout() {
	document.getElementById("about").style.backgroundColor = '#b3daff';
};
function coloroffshiftabout() {
	document.getElementById("about").style.backgroundColor = '#FCB0B3';
};

/*
home.onmouseover = function colorshift1 (event) {
  home.style.backgroundColor = '#b3daff';
};
home.onmouseout = function coloroffshift1 (event) {
  home.style.backgroundColor = '#FCB0B3';
};
projects.onmouseover= function colorshift1 (event) {
  projects.style.backgroundColor = '#b3daff';
};
projects.onmouseout = function coloroffshift1 (event){
  projects.style.backgroundColor = '#FCB0B3';
};
contact.onmouseover = function colorshift2 (event) {
  contact.style.backgroundColor = '#b3daff';
};
contact.onmouseout = function coloroffshift2 (event) {
  contact.style.backgroundColor = '#FCB0B3';
};
about.onmouseover = function colorshift3 (event) {
  about.style.backgroundColor = '#b3daff';
};
about.onmouseout = function coloroffshift35 (event) {
  about.style.backgroundColor = '#FCB0B3';
};
*/
//use arrow keys to move car maybe?