let buah = ["jeruk", "nanas", "pisang"];

// // menambahkan value
// buah.push('apel'); // index terakhir
// buah.unshift('pepaya'); // index 0 / pertama

// // menghapus value
// buah.shift(); // index 0 / pertama
// buah.pop(); // index terakhir

//

// console.log([buah[0], buah[2]]);
// console.log('hello');
// console.log([0][2]); // ['jeruk', 'pisang'];

// array multidimensi
// let matrix = ["string", [1, 2, 3], [4, 5, 6], [[7, 12, 13], [8], 9, 10]];

// console.log(matrix[1][2]); // 6
// console.log(matrix[3][0][1]); // 8

// chalenge
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 18, 9],
];

let hasil = 0;

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
    //   console.log(i, matrix[i][j]);
    hasil += matrix[i][j];
  }
}

console.log(hasil);