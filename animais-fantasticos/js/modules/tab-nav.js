export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = 'ativo';
  }

  // activate the tab by the index itself
  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass);
    });
    const direction = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activeClass, direction);
  }

  // add the event for the tabs
  addTabNavEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => this.activeTab(index));
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      // active first item
      this.activeTab(0);
      this.addTabNavEvent();
    }
  }
}
