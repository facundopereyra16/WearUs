document.addEventListener("DOMContentLoaded", function () {
  var select = document.getElementById("cat-pro");

  select.addEventListener("change", function () {
    var opcionSeleccionada = select.value;

    // Verifica que se haya seleccionado una opción antes de redirigir
    if (opcionSeleccionada) {
      window.location.href = opcionSeleccionada + ".html";
    }
  });
});
