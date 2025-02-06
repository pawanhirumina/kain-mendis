function openNav() {
  document.getElementById("mySidenav").classList.add("open-nav");
}
function closeNav() {
  document.getElementById("mySidenav").classList.remove("open-nav");
}
function navigate() {
  closeNav();
}


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