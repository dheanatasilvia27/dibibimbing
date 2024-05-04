let siswa = {
  nama: "lili",
  kelas: "12",
  // umur: 16
};

// delete siswa.kelas;
// console.log(siswa.panggil(3, 4));

// illustrasi method yang ada didalam Array
// array = {
//     push: function(value) {}
//     pop: function(value) {}
//     unshift: function(value) {}
//     shift: function(value) {}
// }

// penjumlahan(2, 9);

siswa.umur = 16; // tambah properti
siswa.kelas = 11; // update properti
siswa.add = ""; // tambah properti

// // console.log('Nama saya adalah ' + siswa.nama + ', saya ada di kelas ' + siswa.kelas);
// // console.log(`Nama saya adalah ${siswa.nama}, saya ada di kelas ${siswa.kelas}`);

// siswa.panggil = function () {
//   console.log(`Nama saya adalah ${this.nama}, saya ada di kelas ${this.kelas}`);
// };

// siswa.panggil();

// latihan
let kalkulator = {
  hasil: 1000,

  // method
  tambah: function (var1, var2) {
    console.log(var1 + var2);
  },
  pengurangan: function (bebas1, bebas2) {
    console.log(bebas1 - bebas2);
  },
};

// kalkulator.tambah(4, 5);
// kalkulator.pengurangan(4, 5);


// dipisah / destructure
function perkalian(num1, num2) {
    console.log(num1 * num2);
}

function pembagian(num1, num2) {
    console.log(num1 / num2);
}

kalkulator.perkalian = perkalian;
kalkulator.pembagian = pembagian;

kalkulator.perkalian(4, 5);
kalkulator.pembagian(20, 5);


// cari nilai rata2
//  const data = [12, 45, 67, 23, 89, 34];
