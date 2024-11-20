// Validación simple del formulario de contacto
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Gracias, " + name + "! Su mensaje ha sido enviado.");
        document.getElementById("contactForm").reset();
    } else {
        alert("Por favor, complete todos los campos.");
    }
});


// Efecto de aparición para los elementos de la línea de tiempo
//TODO : Este se supone que es un código que permite crear un efecto de aparición de los elementos de la linea pero no lo he hecho funcionar por el momento


document.addEventListener("DOMContentLoaded", function() {
    const timelineItems = document.querySelectorAll(".timeline-item");

    const showItems = () => {
        timelineItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                item.classList.add("visible");
            }
        });
    };

    // Llama a showItems al hacer scroll
    window.addEventListener("scroll", showItems);
    // Llama a showItems en la carga de la página
    showItems();
});
