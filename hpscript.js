var home = document.getElementById("home");
var project = document.getElementById("projects");
var contact = document.getElementById("contact");
var about = document.getElementById("about");
var coral = "#FCB0B3";
var crystal = "#b3daff";

home.onmouseover = function colorshift1 (event) {
  home.style.backgroundColor = '#b3daff';
}
home.onmouseout = function coloroffshift1 (event) {
  home.style.backgroundColor = '#FCB0B3';
}
projects.onmouseover= function colorshift1 (event) {
  projects.style.backgroundColor = '#b3daff';
}
projects.onmouseout = function coloroffshift1 (event){
  projects.style.backgroundColor = '#FCB0B3';
}
contact.onmouseover = function colorshift2 (event) {
  contact.style.backgroundColor = '#b3daff';
} 
contact.onmouseout = function coloroffshift2 (event) {
  contact.style.backgroundColor = '#FCB0B3';
}
about.onmouseover = function colorshift3 (event) {
  about.style.backgroundColor = '#b3daff';
}
about.onmouseout = function coloroffshift35 (event) {
  about.style.backgroundColor = '#FCB0B3';
}
//use arrow keys to move car maybe?