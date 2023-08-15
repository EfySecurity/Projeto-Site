// Adicione aqui qualquer código JavaScript que você queira executar no seu site

// Exemplo de código para exibir uma mensagem de confirmação ao enviar o formulário de contato
document.getElementById("form-contato").addEventListener("submit", function(event) {
    event.preventDefault();
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;
    
    var confirmacao = `Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}\n\nDeseja enviar a mensagem?`;
    
    if (confirm(confirmacao)) {
        document.getElementById("mensagem-sucesso").classList.remove("hidden");
    }
});
