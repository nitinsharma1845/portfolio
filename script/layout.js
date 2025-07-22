function loadLayout() {
  fetch("../components/Header.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;
    });

  fetch("../components/Footer.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    });
}


window.addEventListener("DOMContentLoaded" , loadLayout)