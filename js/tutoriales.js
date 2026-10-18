document.addEventListener("DOMContentLoaded", () => {

    const filtros = document.querySelectorAll(".filtro-video");
    const videos = document.querySelectorAll(".tarjeta-video-contenedor");

    filtros.forEach(filtro => {

        filtro.addEventListener("click", () => {

            // Actualizar el botón seleccionado
            filtros.forEach(boton => {
                boton.classList.remove("activo");
            });

            filtro.classList.add("activo");

            const categoria = filtro.dataset.filtro;

            // Mostrar los videos correspondientes
            videos.forEach(video => {

                const coincide =
                    categoria === "todos" ||
                    video.dataset.categoria === categoria;

                video.classList.toggle("d-none", !coincide);

            });

        });

    });

    // Actualizar el año del pie de página
    const anio = document.getElementById("anio");

    if (anio) {
        anio.textContent = new Date().getFullYear();
    }

});