// Ow, rapaz, eu sei que é óbvio, a gente sempre soube que arrays são objetos e tal, mas eu nunca tinha parado pra pensar que a gente consegue acessá-los exatamente como os objetos.
// 10:40
// Tipo, definindo novas chaves, arr['props'] = 1; OU arr.props2 = 'value2';
// 10:40
// mesmo o length, a gente pode acessar com colchetes, tipo arr[‘length’].

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
  const obj2 = {};
  const obj3 = {};
  const values = [];
  const keys = [];
  const occurrences = {};
  let allValues = [];

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

  // crio um objeto com cada cor
  for (const item of wrongData) {
    // [preto, pp]
    item.split('-').reduce((acc, curr, index) => {
      if (obj[acc]) {
        obj[acc] = { ...obj[acc], [curr]: 1 };
      } else {
        obj[acc] = { [curr]: 1 };
      }
    });
  }

  // for (const item of wrongData) {
  //   // [preto, pp]
  //   item.split('-').reduce((acc, curr, index) => {
  //     if (Object.keys(obj[acc]).includes(curr)) {
  //       Object.keys(obj[acc])[index] = +1;
  //     }
  //   });
  // }

  // for (const key in obj) {
  //   values.forEach((size) => {
  //     if (obj[key][size]) {
  //       obj[key][size] += 1;
  //     }
  //   });
  // }

  return obj;
};

console.log(convert(wrongData));
// for (const item of wrongData) {
//   // [preto, pp]
//   item.split('-').reduce((acc, curr) => {
//     obj[acc] = values.reduce((total, item, index) => {
//       if (!total[item]) {
//         total[item] = 1;
//       } else {
//         total[item] += 1;
//       }
//       return total;
//     }, {});
//   });
// }

// const black = values.slice(0, 5);
// const white = values.slice(5, 7);
// const red = values.slice(7, 8);
// const blue = values.slice(8);

// function splitArrayIntoChunksOfLen(arr, len) {
//   var chunks = [],
//     i = 0,
//     n = arr.length;
//   while (i < n) {
//     chunks.push(arr.slice(i, (i += len)));
//   }
//   return chunks;
// }
// var alphabet = ['a', 'b', 'c', 'd', 'e', 'f'];
// var alphabetPairs = splitArrayIntoChunksOfLen(alphabet, 2);

// console.log(alphabetPairs);
