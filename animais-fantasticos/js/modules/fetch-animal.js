import initAnimaNumeros from './anima-numeros.js';

export default function initFetchAnimal() {
  async function fetchAnimal(url) {
    try {
      const animailResponse = await fetch(url);
      const animalJSON = await animailResponse.json();
      const numberGrid = document.querySelector('.numeros-grid');
      animalJSON.forEach(animal => {
        const divAnimal = createAnimal(animal);
        numberGrid.appendChild(divAnimal);
      });
      initAnimaNumeros();
    } catch(erro) {
      console.log(erro);
    }
  }
  
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
  
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  } 
  
  fetchAnimal('./animal-api.json');
}

