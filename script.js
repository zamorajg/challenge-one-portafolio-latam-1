//La validación del formulário con javascript es considerada un desafío extra, no es obligatório realizar esta validación para realizar su entrega
const form = document.querySelector('.contacto__formulario');
const submitButton = document.querySelector('.contacto__boton');

form.addEventListener('submit', function(event) {
    const nombre = document.querySelector('input[type="text"]').value;
    const errorElement = document.createElement('div');
    errorElement.className = 'error';
    errorElement.style.color = 'red';

    // Remove any existing error messages
    const existingErrors = document.querySelectorAll('.error');
    existingErrors.forEach(error => error.remove());

    if (nombre.trim() === '' || nombre.length > 50) {
        event.preventDefault();
        errorElement.textContent = 'El nombre no debe estar vacío y debe contener un máximo de 50 caracteres.';
        document.querySelector('.contacto__formulario').prepend(errorElement);
    }

    const email = document.querySelector('input[type="email"]').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() === '' || !emailPattern.test(email)) {
        event.preventDefault();
        const emailErrorElement = document.createElement('div');
        emailErrorElement.className = 'error';
        emailErrorElement.style.color = 'red';
        emailErrorElement.textContent = 'El correo electrónico no debe estar vacío y debe estar en un formato válido (ejemplo: texto@texto.com).';
        document.querySelector('.contacto__formulario').prepend(emailErrorElement);
    }
    const mensaje = document.querySelector('textarea').value;

    if (mensaje.trim() === '' || mensaje.length > 300) {
        event.preventDefault();
        const mensajeErrorElement = document.createElement('div');
        mensajeErrorElement.className = 'error';
        mensajeErrorElement.style.color = 'red';
        mensajeErrorElement.textContent = 'El mensaje no debe estar vacío y debe contener un máximo de 300 caracteres.';
        document.querySelector('.contacto__formulario').prepend(mensajeErrorElement);
    }
});

