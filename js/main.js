var email = "admin@gmail.com"
var usuario = "admin"
var senha = "9999"

function login() {
    var tentativaemail = document.getElementById("email").value;
    var tentativausuario = document.getElementById("usuario").value;
    var tentativasenha = document.getElementById("senha").value;

    if (document.getElementById("email").value == "" || document.getElementById("usuario").value == "") {
        alert("Por favor, insira seu email/usuario");
        return false;
    }
    
    if (tentativaemail == email && tentativausuario == usuario && tentativasenha == senha) {
        alert("Senha correta, logando...");
    } else {
        alert("Senha incorreta, tente novamente.");
    }
}