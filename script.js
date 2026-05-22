function alternarModoEscuro() {
    document.body.classList.toggle('modo-escuro');
    if (document.body.classList.contains('modo-escuro')) {
        localStorage.setItem('modoEscuro', 'ativo');
    } else {
        localStorage.setItem('modoEscuro', 'inativo');
    }
}

document.getElementById('modo-escuro-btn').addEventListener('click', alternarModoEscuro);

if (localStorage.getItem('modoEscuro') === 'ativo') {
    document.body.classList.add('modo-escuro');
}

function aumentarFonte() {
    const body = document.body;
    if (body.classList.contains('fonte-muito-aumentada')) {
        body.classList.remove('fonte-aumentada', 'fonte-muito-aumentada');
        localStorage.setItem('tamanhoFonte', 'normal');
    } else if (body.classList.contains('fonte-aumentada')) {
        body.classList.add('fonte-muito-aumentada');
        localStorage.setItem('tamanhoFonte', 'muito-aumentada');
    } else {
        body.classList.add('fonte-aumentada');
        localStorage.setItem('tamanhoFonte', 'aumentada');
    }
}

function diminuirFonte() {
    const body = document.body;
    if (body.classList.contains('fonte-muito-aumentada')) {
        body.classList.remove('fonte-muito-aumentada');
        localStorage.setItem('tamanhoFonte', 'aumentada');
    } else if (body.classList.contains('fonte-aumentada')) {
        body.classList.remove('fonte-aumentada');
        localStorage.setItem('tamanhoFonte', 'normal');
    }
}

function voltarFonteNormal() {
    document.body.classList.remove('fonte-aumentada', 'fonte-muito-aumentada');
    localStorage.setItem('tamanhoFonte', 'normal');
}

document.getElementById('fonte-aumentar').addEventListener('click', aumentarFonte);
document.getElementById('fonte-diminuir').addEventListener('click', diminuirFonte);
document.getElementById('fonte-normal').addEventListener('click', voltarFonteNormal);

const tamanhoFonteSalvo = localStorage.getItem('tamanhoFonte');
if (tamanhoFonteSalvo === 'aumentada') {
    document.body.classList.add('fonte-aumentada');
} else if (tamanhoFonteSalvo === 'muito-aumentada') {
    document.body.classList.add('fonte-aumentada', 'fonte-muito-aumentada');
}

document.getElementById('resetar-btn').addEventListener('click', function() {
    document.body.classList.remove('modo-escuro');
    localStorage.setItem('modoEscuro', 'inativo');
    document.body.classList.remove('fonte-aumentada', 'fonte-muito-aumentada');
    localStorage.setItem('tamanhoFonte', 'normal');
    alert('✅ Configurações resetadas!');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Botão "Conheça Mais"
document.getElementById('btn-conheca-mais').addEventListener('click', function() {
    alert('Um familiar da agricultura é o modelo em que a própria família gerencia o negócio e realiza a maior parte do trabalho no campo. Responsável por mais de 70% da mão de obra agropecuária no Brasil, é a base da segurança alimentar do país, produzindo alimentos essenciais como mandioca, feijão e leite. Conheça mais conversando na minha companhia: yasmin.livia.santos@escola.pr.gov.br');
});

// Outros botões
document.querySelectorAll('.btn').forEach(button => {
    if (button.id !== 'btn-conheca-mais') {
        button.addEventListener('click', function() {
            alert('Apoiar a agricultura familiar fortalece a economia local, promove a sustentabilidade e garante alimentos frescos na mesa. Você pode fazer isso comprando diretamente de pequenos produtores (feiras livres, cooperativas), valorizando produtos com o Selo Nacional da Agricultura Familiar (SENAF) e cobrando políticas públicas de incentivo ao setor. 🌾 Obrigada por se interessar!');
        });
    }
});

console.log('✅ Site funcionando!');
