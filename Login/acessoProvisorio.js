const enviar = document.getElementById('enviar');

enviar.addEventListener('click', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if(email === "admin@gmail.com" && senha === "1234") {
        location.href = "../loading.html";
    } else {
        alert("Acesso negado");
    }
});