let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active'); 
        if (i === index) {
            slide.classList.add('active'); 
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; 
    showSlide(currentSlide);
}

setInterval(nextSlide, 5000); 

showSlide(currentSlide);

document.getElementById('contactForm').addEventListener('submit', function(event) {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos.');
        event.preventDefault(); 
    } else {
        
        window.location.href = 'agradecimento.html'; 
    }
});
