// ===============================
// AÑO AUTOMÁTICO DEL FOOTER
// ===============================

const anio = document.getElementById("anio");

if (anio) {
    anio.textContent = new Date().getFullYear();
}


// ===============================
// ANIMACIÓN SUAVE AL HACER SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(enlace => {

    enlace.addEventListener("click", function (evento) {

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {

            evento.preventDefault();

            destino.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ===============================
// CERRAR MENÚ MÓVIL
// ===============================

const enlacesMenu = document.querySelectorAll(".nav-link");
const menu = document.getElementById("menuNavegacion");

enlacesMenu.forEach(enlace => {

    enlace.addEventListener("click", () => {

        if (menu.classList.contains("show")) {

            const boton = document.querySelector(".navbar-toggler");

            if (boton) {
                boton.click();
            }

        }

    });

});