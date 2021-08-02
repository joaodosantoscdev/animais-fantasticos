export default function initModal() {
  const btnAbrir = document.querySelector('[data-modal="abrir"]');
  const btnFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle('ativo');
  }

  function clickOutModal(event) {
    if (event.target === this);
    toggleModal(event);
  }

  if (btnAbrir && btnFechar && containerModal) {
    btnAbrir.addEventListener('click', toggleModal);
    btnFechar.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', clickOutModal);
  }
}
