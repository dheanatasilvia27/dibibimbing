console.log(1);

function loop() {
    for (let i = 0; i < 10000000000; i++) {
        //
    }
}

async function asyncAwait() {
    let hasil = await loop();
    console.log(2);
}

asyncAwait();

console.log(3);
console.log(4);
