const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/info@svsresidency.com';

if (contactForm && formMessage) {
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      formMessage.textContent = 'Please complete all fields before sending your message.';
      formMessage.className = 'form-message error';
      return;
    }

    formMessage.textContent = 'Sending your message...';
    formMessage.className = 'form-message';

    const formData = new FormData(contactForm);

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      body: formData
    })
      .then(function (response) {
        if (!response.ok) {
          throw new Error('Submission failed');
        }

        formMessage.textContent = 'Thank you! Your message has been received.';
        formMessage.className = 'form-message success';
        contactForm.reset();
      })
      .catch(function () {
        formMessage.textContent = 'Something went wrong. Please try again later or contact us directly at info@svsresidency.com.';
        formMessage.className = 'form-message error';
      });
  });
}
