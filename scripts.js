const modal = document.querySelector('.modal');
btn = document.querySelector('.btn');

// close = document.querySelector('.close');

btn.addEventListener('click', openModal);
// close.addEventListener('click', closeModal);
// modal.addEventListener('click', openModal);

modal.addEventListener('click', (e) => {
  const evt = e.target.classList;
  if (evt.contains('modal') || evt.contains('close')) {
    closeModal();
  }
});

// open modal
function openModal(e) {
  e.preventDefault();
  modal.style.display = 'block';
}
// close modal
function closeModal(e) {
  modal.style.display = 'none';
}
