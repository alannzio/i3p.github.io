function actualizarFecha() {
    var fechaActual = new Date();
    var dia = fechaActual.getDate();
    var mes = fechaActual.getMonth() + 1;
    var anio = fechaActual.getFullYear();
    
    var fechaCompleta = dia + "/" + mes + "/" + anio;
    
    document.getElementById("fecha-actual").innerHTML = fechaCompleta;
  }
  
  // Llamar a la función actualizarFecha una vez para actualizar la fecha al cargar la página
  actualizarFecha();
  
  // Llamar a la función actualizarFecha cada día a la medianoche para actualizar la fecha
  setInterval(function() {
    var ahora = new Date();
    if (ahora.getHours() === 0 && ahora.getMinutes() === 0 && ahora.getSeconds() === 0) {
      actualizarFecha();
    }
  }, 1000);