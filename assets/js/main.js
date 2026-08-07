const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mdopeqzg';

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

    fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, message })
    })
      .then(function (response) {
        if (!response.ok) {
          throw new Error('Submission failed');
        }

        formMessage.textContent = 'Thank you! Your message has been received. We will get back to you soon.';
        formMessage.className = 'form-message success';
        contactForm.reset();
      })
      .catch(function () {
        formMessage.textContent = 'Something went wrong. Please contact us directly at info@svsresidency.com.';
        formMessage.className = 'form-message error';
      });
  });
}
