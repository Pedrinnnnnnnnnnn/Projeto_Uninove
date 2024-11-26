let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

// Função para mostrar o slide atual
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active'); // Remove a classe 'active' de todos os slides
        if (i === index) {
            slide.classList.add('active'); // Adiciona a classe 'active' ao slide atual
        }
    });
}

// Função para avançar para o próximo slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // Cicla para o próximo slide
    showSlide(currentSlide);
}

// Iniciar o carrossel a cada 3 segundos
setInterval(nextSlide, 5000); // Muda de slide a cada 3 segundos

// Exibir o primeiro slide ao carregar a página
showSlide(currentSlide);

// Validação do formulário de contato
document.getElementById('contactForm').addEventListener('submit', function(event) {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Verifica se os campos estão preenchidos
    if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos.');
        event.preventDefault(); 
    } else {
        // Se todos os campos estiverem preenchidos, redireciona para a página de agradecimento
        window.location.href = 'agradecimento.html'; // Ajuste o caminho conforme necessário
    }
});
