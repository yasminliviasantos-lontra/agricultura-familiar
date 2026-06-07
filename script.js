// MODO ESCURO
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

// AUMENTAR FONTE
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

// RESETAR
document.getElementById('resetar-btn').addEventListener('click', function() {
    document.body.classList.remove('modo-escuro');
    localStorage.setItem('modoEscuro', 'inativo');
    document.body.classList.remove('fonte-aumentada', 'fonte-muito-aumentada');
    localStorage.setItem('tamanhoFonte', 'normal');
    alert('✅ Configurações resetadas!');
});

// NAVEGAÇÃO
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// BOTÕES
document.querySelectorAll('.btn').forEach(button => {
    if (button.id !== 'btn-conheca-mais' && button.id !== 'btn-saiba-mais' && button.id !== 'btn-video') {
        button.addEventListener('click', function() {
            alert('🌾 Obrigado por se interessar!');
        });
    }
});

// ========== LER A PÁGINA EM VOZ ALTA ==========

function iniciarLeitura() {
    // Selecionar todo o texto do body, excluindo a barra de acessibilidade
    const acessibilidadeBar = document.querySelector('.acessibilidade-bar');
    const bodyClone = document.body.cloneNode(true);
    
    if (acessibilidadeBar) {
        const acessibilidadeBarClone = bodyClone.querySelector('.acessibilidade-bar');
        if (acessibilidadeBarClone) {
            acessibilidadeBarClone.remove();
        }
    }
    
    const textos = bodyClone.innerText;
    
    // Criar uma utterância
    const utterance = new SpeechSynthesisUtterance(textos);
    utterance.lang = 'pt-BR';
    utterance.rate = 0.9;
    
    // Falar
    window.speechSynthesis.speak(utterance);
}

function pararLeitura() {
    window.speechSynthesis.cancel();
}

// Adicionar botão de leitura no acessibilidade-bar
document.addEventListener('DOMContentLoaded', function() {
    const acessibilidadeContainer = document.querySelector('.acessibilidade-container');
    
    const btnLeitura = document.createElement('button');
    btnLeitura.id = 'btn-leitura';
    btnLeitura.className = 'btn-acessibilidade';
    btnLeitura.title = 'Ler página em voz alta';
    btnLeitura.innerHTML = '🔊 Ler Página';
    
    let lendo = false;
    
    btnLeitura.addEventListener('click', function() {
        if (!lendo) {
            iniciarLeitura();
            btnLeitura.innerHTML = '⏹️ Parar Leitura';
            lendo = true;
        } else {
            pararLeitura();
            btnLeitura.innerHTML = '🔊 Ler Página';
            lendo = false;
        }
    });
    
    acessibilidadeContainer.appendChild(btnLeitura);
});

// ========== FAQ - PERGUNTAS FREQUENTES ==========

function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const faqAnswer = faqItem.querySelector('.faq-answer');
    
    // Fechar todos os outros
    document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
            item.classList.remove('active');
            item.querySelector('.faq-answer').classList.remove('active');
        }
    });
    
    // Toggle o atual
    faqItem.classList.toggle('active');
    faqAnswer.classList.toggle('active');
}

// ========== MODAL SAIBA MAIS ==========

function abrirModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function fecharModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// Fechar modal ao clicar fora
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
    }
});

// Botão "Saiba Mais"
document.addEventListener('DOMContentLoaded', function() {
    const btnSaibaMais = document.getElementById('btn-saiba-mais');
    if (btnSaibaMais) {
        btnSaibaMais.addEventListener('click', function() {
            abrirModal('modal-saiba-mais');
        });
    }
});

// ========== BOTÃO ASSISTIR VÍDEO ==========

document.addEventListener('DOMContentLoaded', function() {
    const btnVideo = document.getElementById('btn-video');
    if (btnVideo) {
        btnVideo.addEventListener('click', function() {
            window.open('https://www.youtube.com/watch?v=pruJBdwht1M', '_blank');
        });
    }
});

// ========== BOTÃO CONHEÇA MAIS ==========

document.addEventListener('DOMContentLoaded', function() {
    const btnConhecaMais = document.getElementById('btn-conheca-mais');
    if (btnConhecaMais) {
        btnConhecaMais.addEventListener('click', function() {
            alert('Conheça mais conversando na minha companhia: yasmin.livia.santos@escola.pr.gov.br');
        });
    }
});

console.log('✅ Site funcionando com todas as funcionalidades!');
