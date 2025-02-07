document.addEventListener('DOMContentLoaded', (event) => {
    const checkbox = document.getElementById('privacyPolicy');
    const submitBtn = document.getElementById('contact__inputsend');
  
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            submitBtn.disabled = false;
            submitBtn.classList.remove('disabled-button');
        } else {
            submitBtn.disabled = true;
            submitBtn.classList.add('disabled-button');
        }
    });
  });