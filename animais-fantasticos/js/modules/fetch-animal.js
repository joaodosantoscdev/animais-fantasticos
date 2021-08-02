import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {
  // create a div contening the total of animals
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  // fit every animal on DOM
  const numberGrid = document.querySelector(target);
  function eachAnimal(animal) {
    const divAnimal = createAnimal(animal);
    numberGrid.appendChild(divAnimal);
  }

  // animate the numbers of each animal
  function animaAnimalNumbers() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  // push the animal information in a json archive
  // and create each animal utilizing animalCreate
  async function animalCreate() {
    try {
      // fetch e await response, transforms in JSON
      const animailResponse = await fetch(url);
      const animalJSON = await animailResponse.json();

      // after the json transformation, activate the functions
      // to fill and animate the numbers
      animalJSON.forEach((animal) => eachAnimal(animal));
      animaAnimalNumbers();
    } catch (erro) {
      console.log(erro);
    }
  }
  return animalCreate();
}
