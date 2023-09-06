// Obtén una referencia al elemento con la clase ".elemento"
const elemento = document.querySelector('.elemento');

// Función para verificar si el elemento está en el viewport
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Función que activa la animación cuando el elemento está en el viewport
function activateAnimation() {
    if (isElementInViewport(elemento)) {
        elemento.style.animation = 'aparecer 1s ease forwards';
    }
}

// Escucha el evento scroll y activa la animación cuando sea necesario
window.addEventListener('scroll', activateAnimation);

// Obtén una referencia al elemento que deseas modificar
const navbar = document.getElementById('navbar');
console.log(navbar)

// Función para agregar una clase cuando se desplace 200 píxeles hacia abajo
function agregarClaseConScroll() {
    if (window.scrollY >= 200) {
        navbar.classList.add('bg-dark');
        navbar.classList.add('navbar-dark'); 
    } else {
        navbar.classList.remove('bg-dark'); 
        navbar.classList.remove('navbar-dark'); 
    }
}

// Escucha el evento scroll y llama a la función cuando el usuario se desplaza
window.addEventListener('scroll', agregarClaseConScroll);

