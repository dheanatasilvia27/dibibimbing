const date = new Date(); // GMT 0 + 7

// // WIB = UTC + 7
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();

console.log(date);
console.log(year, month, day);

// // 2024-05-11T14:45:09.180Z

// parent
class Animal {
  constructor(name) {
    this.name = name;
  }

  bersuara(suara) {
    return `${this.name} bersuara ${suara}`;
  }
}

// child
class Ayam extends Animal {
  constructor(name, spesies) {
    super(name);
    this.spesies = spesies;
  }

  bersuara(suara) {
    return `${this.name} bersuara dengan cara ${suara}`;
  }
}

/// === doc ===
// name
// spesies
// bersuara

const ayam = new Ayam("joni", "unggas");

console.log(ayam.bersuara('kok kok'))