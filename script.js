const form = document.getElementById('application-form');
const messageEl = document.getElementById('form-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const role = form.role.value.trim();
  const goals = form.goals.value.trim();

  if (!name || !email || !role || !goals) {
    messageEl.textContent = 'Please complete every field before submitting.';
    return;
  }

  messageEl.textContent = 'Thanks for applying! Your residency application has been received.';
  form.reset();
}
);
