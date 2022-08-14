function activateClass() {
  div.classList.add('active');
}
function deactivateClass() {
  div.classList.remove('active');
}

const div = document.getElementById('block');

div.addEventListener('mouseenter', activateClass);

div.addEventListener('mouseleave', deactivateClass);

