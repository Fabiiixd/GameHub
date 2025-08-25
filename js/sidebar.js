// Espera a que el documento HTML se cargue por completo
document.addEventListener('DOMContentLoaded', () => {

    const sidebarHtmlFile = '/css/Componentes/HTML/sidebar/sidebar.html';

    fetch(sidebarHtmlFile)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar la barra lateral.');
            }
            return response.text();
        })
        .then(html => {
            // Inserta el HTML de la barra lateral al inicio del cuerpo
            document.body.insertAdjacentHTML('afterbegin', html);

            // Carga el script de la barra lateral AHORA, después de que el HTML ha sido insertado
            const script = document.createElement('script');
            script.src = '/js/script-sidebar.js'; // Asegúrate de que esta sea la ruta correcta
            document.body.appendChild(script);

        })
        .catch(error => {
            console.error(error);
        });
});