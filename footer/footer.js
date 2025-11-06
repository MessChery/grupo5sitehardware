document.addEventListener("DOMContentLoaded", () => {
  fetch("footer/footer.html", {
    mode: 'no-cors'
  })
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer-container").innerHTML = data;
    });
});
