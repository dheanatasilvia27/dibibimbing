// common / standar
// function sayHello(num1, num2) {
//     // console.log(`Hallo nama saya ${nama}`);
//     let perkalian = num1 * num2;
//     // console.log(perkalian);
//     // return `Hallo nama saya ${nama}`;

//     return perkalian;
// };

// let hasil = sayHello(4, 5);
// console.log(hasil);

// type 1
// function setRupiah(value) {
//     // process
//     return 'Rp' + value;
// }

// type 2
// let setRupiah = function(value) {
//     return 'Rp' + value;
// }

// type 3
// let setRupiah = (value) => {
//     return 'Rp' + value;
// }

// let rupiah = setRupiah('1000'); // Rp1000
// console.log(rupiah);


// contoh implementasi function
// function penjumlahan(num1, num2) {
//     return num1 + num2;
// }
// function pengurangan(num1, num2) {
//     return num1 - num2;
// }

// function kalkulator(num1, num2, operator) {
//   const tambah = (num1, num2) => {
//     return num1 + num2;
//   };
//   const kurang = (num1, num2) => {
//     return num1 - num2;
//   };


//   if (operator == "+") {
//     return tambah(num1, num2);
//   }
//   if (operator == "-") {
//     return kurang(num1, num2);
//   }
// }

// let tambah = kalkulator(5, 10, "+");
// let kurang = kalkulator(5, 10, "-");

// console.log(tambah, kurang);



// IIFE
// function name() {
//     console.log('hello');
// }

// name();

// (function(nama){
//     console.log('hello', nama);
// })('lili');


// block scope
// let name = 'lala'; // global

// function sayHi() {
//     name = 'budi'; // scope
// }

// sayHi();

// console.log(name); // ini




let obj1 = {
    name: 'lili'
}
let obj2 = {
    name: 'lili'
}

let apakahSama1 = obj1.name === obj2.name;
let apakahSama2 = obj1 == obj2;

console.log(apakahSama1);
console.log(apakahSama2);
