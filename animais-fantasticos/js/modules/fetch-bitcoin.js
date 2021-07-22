export default function initFetchBitcoin() {
  
}

fetch('https://blockchain.info/ticker')
.then( r => r.json())
.then(bitcoin => {
  const btcPrice = document.querySelector('.btc-preco');
  btcPrice.innerText = (100 / bitcoin.BRL.sell).toFixed(3);
}).catch(erro => {
  console.log(Error(erro))
});

