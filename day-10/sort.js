// const fruits = ["Banana", "Orange", "Apple", "Mango", "Aaa", "Abc"];
// fruits.sort();
// console.log(fruits);

// fruits.toSorted();

// console.log(fruits);

// const num = [1000, 1, 11, 10, 111, 100];

// num.sort((a, b) => a - b);
// console.log(num);
// [ 1, 10, 100, 1000, 11, 111 ]

const siswa = [
  {
    name: "lala",
    nilai: 88,
  },
  {
    name: "budi",
    nilai: 90,
  },
  {
    name: "tono",
    nilai: 70,
  },
];

siswa.sort((a, b) => b.nilai - a.nilai);
console.log(siswa);
