document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username === 'usuario' && password === 'contraseña') {
        // Redireccionar a la página de compras o mostrar otra sección
        window.location.href = 'compras.html';
    } else {
        document.getElementById('message').textContent = 'Usuario o contraseña incorrectos.';
    }
});

