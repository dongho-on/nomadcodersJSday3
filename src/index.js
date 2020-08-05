// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const superEventHandler = title;
const title = document.querySelector("#title");

function OUT(event) {
  title.innerHTML = "Where r u going TT";
  title.style.color = "#f39c12";
}

function IN(event) {
  title.innerHTML = "I'm shy little bit";
  title.style.color = "#1abc9c";
}

function Resizing(event) {
  title.innerHTML = "Going on~";
  title.style.color = "#9b59b6";
}
function LClick(event) {
  var LClick = document.getElementById("title");
  LClick.innerHTML = "you clicked!";
  LClick.style.color = "#3498db";
  LClick.remove;
}

function RClicked(event) {
  var RClicked = document.getElementById("title");
  RClicked.innerHTML = "Thank you for teaching";
  RClicked.style.color = "#9b59b6";
  event.preventDefault();
}

window.addEventListener("resize", Resizing);
title.addEventListener("click", LClick);
title.addEventListener("contextmenu", RClicked);
document.oncontextmenu = function() {
  return false;
};
window.addEventListener("mouseover", OUT);
title.addEventListener("mouseenter", IN);
