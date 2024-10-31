const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.replace('dark-mode', 'light-mode');
        themeToggle.textContent = 'Modo Escuro';
    } else {
        body.classList.replace('light-mode', 'dark-mode');
        themeToggle.textContent = 'Modo Claro';
    }
});


    function validarFormulario() {
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const celular = document.getElementById('celular').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        if (!nome || !email || !celular || !mensagem) {
            alert('Por favor, preencha todos os campos.');
            return false;
        }

        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um e-mail válido.');
            return false;
        }

        const celularRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
        if (!celularRegex.test(celular)) {
            alert('Por favor, insira um número de celular válido no formato (XX) XXXXX-XXXX.');
            return false;
        }

        alert('Formulário enviado com sucesso!');
        return true;
    }

    document.getElementById('celular').addEventListener('input', function(e) {
        let celular = e.target.value.replace(/\D/g, ''); 
        if (celular.length > 11) celular = celular.slice(0, 11);

        if (celular.length >= 11) {
            celular = celular.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
        } else if (celular.length >= 6) {
            celular = celular.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3');
        } else if (celular.length >= 3) {
            celular = celular.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');
        } else if (celular.length > 0) {
            celular = celular.replace(/^(\d*)$/, '($1');
        }

        e.target.value = celular;
    });

