const form = document.querySelector('#waitlist-form');
const emailInput = document.querySelector('#email');
const submitButton = form.querySelector('button');
const message = document.querySelector('#form-message');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  submitButton.disabled = true;
  submitButton.textContent = 'JOINING…';
  message.className = 'form-message';
  message.textContent = '';

  try {
    const response = await fetch('https://playdadline.jimtsip.chatgpt.site/api/waitlist', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email: emailInput.value }),
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.message || 'Something went wrong.');
    emailInput.value = '';
    message.className = 'form-message success';
    message.textContent = result.message || 'You are on the list. Mission accepted!';
  } catch (error) {
    message.className = 'form-message error';
    message.textContent = error instanceof Error ? error.message : 'Please try again.';
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = 'JOIN THE WAITLIST';
  }
});
