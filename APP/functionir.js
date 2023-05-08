function login(){
var user, pass;

user = document.getElementById("usuario").value;
pass = document.getElementById("contraseña").value;
if(user == "admin" && pass == "rootb0car")
window.location= "captura.html";

else{    
    alert ("Porfavor ingresa, nombre y usuario correctos.");
    }
}