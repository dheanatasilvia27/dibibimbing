const dataSiswa = [
    {
        name: 'lala',
        kelas: '12',
        nilai: 90
    },
    {
        name: 'dodi',
        kelas: '12',
        nilai: 70
    }
]

// nilai > 70
function filterNilaiSiswa() {
    let temp = [];
    for (let i = 0; i < dataSiswa.length; i++) {
        if(dataSiswa[i].nilai > 70) {
            temp.push(dataSiswa[i]);
        }
    }
    return temp;
}

const data = filterNilaiSiswa();
// console.log(data);


// let name;

// if(name) { //
//     let name = "tono";
//     console.log(name);
// } else {
//     let name = "budi";
//     console.log(name);
// }


let name;

if(name) { 
    let name = "tono";
    if(true){
        let name = "ana";
    }
} else {
    let name = "budi";
}

console.log(name);
// budi

