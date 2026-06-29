// Seleciona o formulário de contato
const form = document.getElementById("contatoForm");

// Validação do formulário
form.addEventListener("submit", function(event) {

    // Impede o envio automático
    event.preventDefault();

    // Obtém os valores dos campos
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (nome === "" || email === "" || mensagem === "") {
        alert("Preencha todos os campos!");
        return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValido.test(email)) {
        alert("Digite um e-mail válido!");
        return;
    }

    alert("Mensagem enviada com sucesso!");

   
    form.reset();

});

// Seleciona o botão de troca de tema
const botaoTema = document.getElementById("tema");

// Alterna entre os temas claro e escuro
botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});