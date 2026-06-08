document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('form-contato');
    const mensagemSucesso = document.getElementById('mensagem-sucesso');

    formulario.addEventListener('submit', (evento) => {
        // Impede a página de recarregar ao enviar o formulário
        evento.preventDefault();

        // Captura os dados digitados (pode ser usado para enviar para uma API futuramente)
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        // Validação simples extra (HTML5 já faz a maior parte)
        if (nome && email && mensagem) {
            // Mostra a mensagem de sucesso verde
            mensagemSucesso.classList.remove('escondido');
            
            // Limpa os campos do formulário
            formulario.reset();

            // Esconde a mensagem de sucesso após 5 segundos
            setTimeout(() => {
                mensagemSucesso.classList.add('escondido');
            }, 5000);
        }
    });
});