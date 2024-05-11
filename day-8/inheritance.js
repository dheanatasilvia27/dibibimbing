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
  constructor(name, spesies, ...val) {
    super(name);
    this.spesies = spesies;
    this.val1 = val[0];
  }

  bersuara(suara) {
    return `${this.name} bersuara dengan cara ${suara} berspesies ${this.val1}`;
  }
}

const ayam = new Ayam("joni", "unggas", 1, 2, 3, 4);
const suara = ayam.bersuara("kok kok");
console.log(suara);
