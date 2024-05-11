class Shape {
    constructor(name, luas) {
        this.name = name;
        this.luas = luas;
    }

    area() {
        return `luas sebuah ${this.name} adalah ${this.luas}`
    }
}

class Persegi extends Shape {
    constructor(name, luas, color) {
        super(name, luas)
        // super()
        this.color = color
    }

    area() {
        // return `luas ${this.name} adalah ${this.luas} warna ${this.color}`
        return `warna ${this.color}`
    }
}
class Trapesium extends Shape {
    area() {
        // return `luas ${this.name} adalah ${this.luas} warna ${this.color}`
        return `Nama ${this.name}`
    }
}
class Segitiga extends Shape {
    area() {
        // return `luas ${this.name} adalah ${this.luas} warna ${this.color}`
        return `Nama ${this.name}`
    }
}
class Lingkaran extends Shape {
    area() {
        // return `luas ${this.name} adalah ${this.luas} warna ${this.color}`
        return `Nama ${this.name}`
    }
}
class Tabung extends Shape {
    area() {
        // return `luas ${this.name} adalah ${this.luas} warna ${this.color}`
        return `Nama ${this.name}`
    }
}
class Belahketupat extends Shape {
    area() {
        // return `luas ${this.name} adalah ${this.luas} warna ${this.color}`
        return `Nama ${this.name}`
    }
}

const persegi = new Persegi('', '', 'hijau');
console.log(persegi.area());
