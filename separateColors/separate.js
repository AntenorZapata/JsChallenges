// // Ow, rapaz, eu sei que é óbvio, a gente sempre soube que arrays são objetos e tal, mas eu nunca tinha parado pra pensar que a gente consegue acessá-los exatamente como os objetos.
// // 10:40
// // Tipo, definindo novas chaves, arr['props'] = 1; OU arr.props2 = 'value2';
// // 10:40
// // mesmo o length, a gente pode acessar com colchetes, tipo arr[‘length’].

const wrongData = [
  'preto-PP',
  'preto-M',
  'preto-G',
  'preto-GG',
  'preto-GG',
  'branco-PP',
  'branco-G',
  'vermelho-M',
  'azul-XG',
  'azul-XG',
  'azul-XG',
  'azul-P',
];

const convert = (dataArr) => {
  const obj = {};
  const values = [];
  const keys = [];
  const occurrences = {};
  let count = 0;
  let count2 = 0;

  // crio arrays separados para keys and values
  wrongData.map((item) =>
    item.split('-').reduce((acc, curr) => {
      values.push(curr);
      keys.push(acc);
    })
  );

  // descubro o número de ocrrencias de cada cor
  for (var i = 0, j = keys.length; i < j; i++) {
    occurrences[keys[i]] = (occurrences[keys[i]] || 0) + 1;
  }

  // console.log(values);

  // crio um objeto com cada cor
  for (const item of wrongData) {
    // [preto, pp]
    item.split('-').reduce((acc, curr, index) => {
      if (obj[acc]) {
        obj[acc] = { ...obj[acc], [curr]: 0 };
      } else {
        obj[acc] = { [curr]: 0 };
      }
    });
  }

  for (const key in obj) {
    while (count < occurrences[key]) {
      obj[key][values[count2]] += 1;
      count += 1;
      count2 += 1;
    }
    count = 0;
  }

  return obj;
};

console.log(convert(wrongData));
