// 2. Password Generator
// [INSTRUCTIONS] Anda diminta untuk membuat sebuah function untuk mengenkripsi sebuah password dengan ketentuan sebagai berikut:
// - Mengubah hufuf besar menjadi kecil dan sebaliknya 
// - menghilangkan spasi dan menggantinya menjadi ‘&’
// - setiap bertemu huruf vocal harus diganti dengan huruf selanjutnya(+1) sesuai urutan alfabet
// - membalik urutan huruf

function passwordGenerator(string) {
    if(string.length < 5) {
        console.log('Minimal karakter yang diinputkan adalah 5 karakter');
    }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'


// 3. naikAngkot[INSTRUCTIONS]
// Anda diminta untuk membuat sebuah function untuk mengubah data dan menghitung ongkos penumpang angkot, berkut ketentuannya:
//  - Rute angkot, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu titik poin.

function naikAngkot(array) {

}

console.log(naikAngkot([['Melati', 'B', 'F'], ['Herman', 'C', 'D']]));
// [ { penumpang: 'Melati', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Herman', naikDari: 'C', tujuan: 'D', bayar: 2000 } ]
console.log(naikAngkot([['Lala', 'A', 'D'], ['Andre', 'A', 'F'], ['Saeful', 'B', 'F']]));
// [ { penumpang: 'Lala', naikDari: 'A', tujuan: 'D', bayar: 6000 },
//   { penumpang: 'Andre', naikDari: 'A', tujuan: 'F', bayar: 10000 },
//   { penumpang: 'Saeful', naikDari: 'B', tujuan: 'F', bayar: 8000 } ]
console.log(naikAngkot([])); //[]

let number = String(12);
