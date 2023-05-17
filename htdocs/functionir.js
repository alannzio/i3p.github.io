function login(){
    var user = document.getElementById("usuario").value;
    var pass = document.getElementById("contraseña").value;

    if (user === "admin" && pass === "rootb0car") {
      window.location.href = "captura3.html";
    } else if (user === "usuario" && pass === "rootb0car") {
      window.location.href = "captura2.html";
    } else {
      alert("Por favor ingresa un nombre de usuario y contraseña válidos.");
    }      

}