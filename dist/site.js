const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = document.body.classList.toggle('menu-open');
    menuButton.setAttribute('aria-expanded', String(open));
  });

  nav.addEventListener('click', event => {
    if (event.target.closest('a')) {
      document.body.classList.remove('menu-open');
      menuButton.setAttribute('aria-expanded', 'false');
    }
  });
}

const contactForm = document.querySelector('[data-contact-form]');
if (contactForm) {
  contactForm.addEventListener('submit', event => {
    event.preventDefault();
    const status = contactForm.querySelector('.form-status');
    status.textContent = 'Formulario validado. Falta conectar el correo corporativo para habilitar el envío.';
  });
}
