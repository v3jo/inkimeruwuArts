const cards = document.querySelectorAll('.slider-card');

let currentIndex = 1;

function updateSlider(index) {
    cards.forEach((card, i) => {
        card.classList.remove('prev', 'active', 'next');

        if (i === index) {
            card.classList.add('active');
        } else if (i === index - 1 || (index === 0 && i === cards.length - 1)) {
            card.classList.add('prev');
        } else if (i === index + 1 || (index === cards.length - 1 && i === 0)) {
            card.classList.add('next');
        }
    });
}

cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        currentIndex = index;
        updateSlider(currentIndex);
    });
});

// Inicializa el slider
updateSlider(currentIndex);

// Asegúrate de que EmailJS esté correctamente inicializado
emailjs.init("lIkZer6-FBmbbQaz0");

const frmEmail = document.getElementById('frm-email');
frmEmail.addEventListener('submit', sendEmail);

const serviceId = 'service_qitdf63';
const templateId = 'template_pvvhtdk';
const apikey = 'lIkZer6-FBmbbQaz0';

function sendEmail(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    emailjs.sendForm(serviceId, templateId, frmEmail, apikey)
        .then((result) => {
            Swal.fire({
                title: 'Éxito!',
                text: 'Your message was successfully sent.',
                icon: 'success',
                confirmButtonText: 'Ok',
                 confirmButtonColor: '#855D78'
            });
            frmEmail.reset(); // Opcional: Resetea el formulario después del envío
        })
        .catch((error) => {
            Swal.fire({
                title: 'Error!',
                text: 'It has not been possible to send the message!',
                icon: 'error',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#855D78'
            });
        });
}


