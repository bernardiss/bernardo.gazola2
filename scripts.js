var theme = document.getElementById("icon");

theme.onclick = function() {

  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")) {
    theme.scr = "images/sun.png";
  }
  else {
    theme.scr = "images/moon.png";
  }
}
