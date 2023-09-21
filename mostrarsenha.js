let btn = document.querySelector('.lnr-eye');
btn.addEventListener('click', function() {
    let input = document.querySelector('#password');
    if(input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
    } else {
        input.setAttribute('type', 'password');
    }
});

// cadastro

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("login-form");
    const mensagem = document.getElementById("mensagem");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Simule a autenticação (substitua com lógica real)
        if (username === "usuario" && password === "senha") {
            mensagem.textContent = "Login bem-sucedido!";
        } else {
            mensagem.textContent = "Nome de usuário ou senha incorretos.";
        }
    });
});