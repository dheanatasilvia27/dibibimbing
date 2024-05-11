class Binatang {
    constructor(name) {
        this.name = name;
    }

    bersuara() {
        return `${this.name} bersuara`
    }
}

class Kucing extends Binatang {
    constructor(name, jenis) {
        super(name);
        this.jenis = jenis;
    }

    bersuara() {
        return `${this.name} berjenis ${this.jenis} bersuara Meoww..`
    }
}


const kucing = new Kucing('pitty', 'anggora');

console.log(kucing.bersuara())