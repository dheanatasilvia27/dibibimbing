// function olahData(val1, val2, val3, val4, val5) {
//     return `${val1} ${val2} ${val3}`;
// }

// const res = olahData('lala', 'doni', 'budi', 'akbar', 'ana');
// console.log(res);

function olahData(sekolah, val1, ...val) {
    console.log('sekolah', sekolah);
    console.log(val1)
    console.log(val)
}

olahData('ITB','lala', 'doni', 'budi', 100000, {name:'ana'});
