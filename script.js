const toggleButtons = document.querySelectorAll('.toggle-btn');

toggleButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.card');
    const details = card.querySelector('.profile-details');

    if (details.classList.contains('show')) {
      details.style.maxHeight = '0';
      details.style.opacity = '0';
      card.style.boxShadow = '0 6px 20px rgba(0,0,0,0.08)';
    } else {
      details.style.maxHeight = details.scrollHeight + 'px';
      details.style.opacity = '1';
      card.style.boxShadow = '0 12px 32px rgba(107,123,75,0.3)';
      details.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    details.classList.toggle('show');
    btn.textContent = details.classList.contains('show') ? 'Nascondi risultati' : 'Mostra risultati';
  });
});
