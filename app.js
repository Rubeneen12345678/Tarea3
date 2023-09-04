document
  .getElementById("navbar-toggler")
  .addEventListener("click", function () {
    var navegacion = document.getElementById("navegacion");
    if (navegacion.style.display === "block") {
      navegacion.style.display = "none";
    } else {
      navegacion.style.display = "block";
    }
  });
