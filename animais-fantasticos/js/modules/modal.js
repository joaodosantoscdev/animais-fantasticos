export default class Modal {
  constructor(btnOpen, btnClose, containerModal) {
    this.btnOpen = document.querySelector(btnOpen);
    this.btnClose = document.querySelector(btnClose);
    this.containerModal = document.querySelector(containerModal);

    // bind this to the callback doing
    // reference to the object class
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickOutModal = this.clickOutModal.bind(this);
  }

  // open and close modal
  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }

  // add toggle to modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // close modal when clicking outside the container
  clickOutModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal(event);
    }
  }

  // add events to the modal elements
  addModalEvents() {
    this.btnOpen.addEventListener('click', this.eventToggleModal);
    this.btnClose.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.clickOutModal);
  }

  init() {
    if (this.btnOpen && this.btnClose && this.containerModal) {
      this.addModalEvents();
    }
    return this;
  }
}
