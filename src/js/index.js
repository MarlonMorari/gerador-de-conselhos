const botaoConselho = document.querySelector('.advice-button');
const numeroConselho = document.getElementById('advice');
const conselho = document.getElementById('conselho');

async function buscarConselho() {
  try {
    const resposta = await fetch('https://api.adviceslip.com/advice');
    const dados = await resposta.json();
    return dados.slip;
  } catch (erro) {
    console.error('Erro ao buscar conselho:', erro);
    return null;
  }
}

botaoConselho.addEventListener('click', async function() {
  const novoConselho = await buscarConselho();
  if (novoConselho) {
    numeroConselho.textContent = `A D V I C E # ${novoConselho.id}`;
    conselho.textContent = `"${novoConselho.advice}"`;
  }
})