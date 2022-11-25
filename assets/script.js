let l = document.getElementById("l");
let lvl = true;

setInterval(function () {
  if (lvl) {
    l.innerHTML = "404 Page Not Found&nbsp;";
    lvl = false;
  } else {
    l.innerHTML = "404 Page Not Found_";
    lvl = true;
  }
}, 700);