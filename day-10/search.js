import { data } from "./products.js";

// const number = [2, 4, 13, 6, 2, 34, 7, 8, 12];
// const res = number.indexOf(2);

// const res = number.find(
//     function(num) {
//         return num > 10
//     }
// );
// const res = number.find(num => num > 10);

// const res = number.findIndex(num => num > 10);

// const res = number.includes(13);

// const res = number.filter(num => num > 20);

// console.log(res);


// ===== linear search :: cek 1 demi 1 dari tiap data =====
// let keySearch = "iPhone";
// const products = data.products;

// manual 
// for (let i = 0; i < products.length; i++) {
//   //   if (products[i].title.toLocaleLowerCase() == keySearch.toLocaleLowerCase()) {
//   //     // console.log(products[i].title);
//   //     console.log('datanya ada')
//   //   }

//   if (products[i].title.includes(keySearch)) {
//     console.log(products[i]);
//   }
// }

// js method
// const res = products.filter(num => num.title === keySearch);
// const res = products.filter(num => num.title.includes(keySearch));
// console.log(res.length);


// dari data products
// - searching product yang rating > 4.2 dan price > 80