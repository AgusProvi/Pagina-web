let slideIndex = 1;
showSlides(slideIndex);

// Función para avanzar o retroceder las diapositivas
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Función para seleccionar una diapositiva específica
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Función para mostrar las diapositivas
function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Ocultar todas las diapositivas
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Quitar la clase activa de todos los puntos
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Mostrar la diapositiva activa y activar el punto correspondiente
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Iniciar el carrusel automáticamente al cargar la página
window.onload = function() {
    showSlides(slideIndex);
};
