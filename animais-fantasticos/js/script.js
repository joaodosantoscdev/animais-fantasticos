import ScrollSmooth from './modules/scroll-smooth.js';
import AnimationScroll from './modules/anime-scroll.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tab-nav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import DropdownMenu from './modules/dropdown.js';
import MenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import fetchAnimais from './modules/fetch-animal.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';

const scrollSmooth = new ScrollSmooth('[data-menu="smooth"] a[href^="#"]');
scrollSmooth.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();
modal.toggleModal();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

const animationScroll = new AnimationScroll('[data-anime="scroll"]');
animationScroll.init();

const dropdownMenu = new DropdownMenu('[data-dropdown]');
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"', '[data-menu="list"');
menuMobile.init();

initFuncionamento();

fetchAnimais('./animal-api.json', '.numeros-grid');
fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');
