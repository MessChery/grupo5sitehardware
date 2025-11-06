document.addEventListener("DOMContentLoaded", () => {
  fetch("navbar/navBar.html", {
    mode: 'no-cors'
  })
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar-container").innerHTML = data;
    });
});
