export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((r) => r.json())
    .then((bitcoin) => {
      const btcPrice = document.querySelector(target);
      btcPrice.innerText = (1000 / bitcoin.BRL.sell).toFixed(3);
    }).catch((erro) => { console.log(Error(erro)); });
}
