// 1. Dapat disimpan dalam variable
// const siswa = () => {
//     return 'hello';
// }

// 2. Dapat digunakan sebagai argument
function tambah(val1, val2) {
  console.log(val1 + val2);
}

function kalkulator(val1, val2, fn) {
  fn(val1, val2);
}

// kalkulator(3, 5, tambah);


// 3. Dapat dikembalikan dari fungsi lain
function tambah(val1, val2) {
  console.log(val1 + val2);
}

function kalkulator(val1, val2) {
  tambah(val1, val2);
}

// kalkulator(3, 5);


// 4. Dapat disimpan sebagai data (array & object)
const obj = {
    kalkulator,
    tambah,
}

const array = {
    kalkulator, tambah
}

// console.log(obj);