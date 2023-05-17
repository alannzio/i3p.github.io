var folioActual = 1;

function generarFolio() {
  var folio = "FOLIO-" + folioActual;
  document.getElementById("folio").textContent = folio;
  folioActual++;
}
