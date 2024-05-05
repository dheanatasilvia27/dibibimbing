// let siswa1 = {
//     nama: 'lili',
//     kelas: '12',
//     alamat: 'Jakarta',
//     tempatLahir: 'Jakarta'
// }

// let siswa2 = {
//     nama: 'Tono',
//     kelas: '12',
//     alamat: 'Bandung',
//     tempatLahir: 'Jakarta'
// }


// function Siswa(nama, kelas, alamat) {
//     this.nama = nama,
//     this.kelas = kelas,
//     this.alamat = alamat
//     this.iniFunction = function(){}
// }

// const siswa1 = new Siswa('lili', '12', 'Jakarta');
// const siswa2 = new Siswa('tono', '12', 'Bandung');

// console.log(siswa1, siswa2);

// let tanggal = new Date();
// console.log(tanggal);



// Get & Set
// backend
let user = {
    // hidden
    asdjfalsjkdfb: 'lili',
    asdffaere: '1234',
    ajaosijdfi: 'lili@mail.com',

    //
    get username() {
        return this.asdjfalsjkdfb;
    },
    get password() {
        return this.asdffaere;
    },

    set username(name) {
        this.asdjfalsjkdfb = name;
    },
    set password(value) {
        this.asdffaere = value;
    },

    getName: function() {
        return this.asdjfalsjkdfb
    }
}


// frontend

// let user = {
//     username: '',
//     password: ''
// }
user.username = 'budi';
console.log(user.username);
