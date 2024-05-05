import _ from "lodash";

let obj1 = {
  name: "lili",
};
let obj2 = {
  name: "lili",
};

let hasil = _.eq(obj1, obj1);
console.log(hasil);

let array = [12, 2, 3, 4, 5, 6];
let filter = _.filter(array, n => n % 3 === 0);

console.log(filter);


