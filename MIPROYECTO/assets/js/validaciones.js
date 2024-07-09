// assets/js/validaciones.js

$(document).ready(function() {
    $('form').submit(function(event) {
        var formulario = $(this);
        var camposvacios = [];

        // Validar campos vacíos
        formulario.find('input[type="text"], input[type="number"], textarea, select').each(function() {
            if ($(this).val().trim() === '') {
                camposvacios.push($(this).attr('name'));
            }
        });

        // Mostrar alerta si hay campos vacíos
        if (emptyFields.length > 0) {
            var message = 'Los siguientes campos están vacíos:\n' + camposvacios.join('\n'); 
            message += '\n\nSebastian Retamal\n';
            alert(message);
            event.preventDefault(); // Evitar el envío del formulario
        }
    });
});
