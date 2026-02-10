const toggleButtons = document.querySelectorAll('.toggle-btn');

toggleButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.card');
    const details = card.querySelector('.profile-details');

    details.classList.toggle('show');

    btn.textContent = details.classList.contains('show') ? 'Nascondi risultati' : 'Mostra risultati';
  });
});
