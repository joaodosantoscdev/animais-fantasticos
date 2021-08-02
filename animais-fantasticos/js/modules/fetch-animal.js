import AnimaNumeros from './anima-numeros.js';

export default function initFetchAnimal() {
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  async function fetchAnimal(url) {
    try {
      const animailResponse = await fetch(url);
      const animalJSON = await animailResponse.json();
      const numberGrid = document.querySelector('.numeros-grid');
      animalJSON.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numberGrid.appendChild(divAnimal);
      });
      const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
      animaNumeros.init();
    } catch (erro) {
      console.log(erro);
    }
  }
  fetchAnimal('./animal-api.json');
}
