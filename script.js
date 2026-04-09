// Mensagem de boas-vindas
window.addEventListener('load', () => {
    alert("Bem-vindo à página de apresentação de Lucas Brugge!");
});

// Mostrar/ocultar experiências
const btn = document.getElementById('mostrar-exp');
const lista = document.getElementById('lista-exp');

btn.addEventListener('click', () => {
    if (lista.style.display === "none" || lista.style.display === "") {
        lista.style.display = "block";
        btn.textContent = "Ocultar Experiências";
    } else {
        lista.style.display = "none";
        btn.textContent = "Mostrar Experiências";
    }
});
