const carrinho = [
  { nome: 'Caneta', qtde: 10, perco: 7.99, fragil: true },
  { nome: 'Impressora', qtde: 1, perco: 649.5, fragil: true },
  { nome: 'Caderno', qtde: 4, perco: 27.1, fragil: false },
  { nome: 'Lapis', qtde: 3, perco: 5.82, fragil: false },
  { nome: 'Tesoura', qtde: 1, perco: 19.2, fragil: true },
];

// 1 Retorne apenas os elementos frágeis

const arr = carrinho
  .filter((el) => el.fragil)
  .map((el) => el.qtde * el.perco)
  .reduce((acc, curr) => {
    return acc + curr / 3;
  }, 0);

console.log(arr);
