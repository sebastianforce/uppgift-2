let boba = "";
for (let index = 0; index < 20; index++) {
    boba = boba + "O";
    let max = Math.floor(Math.random() * 5);
    for (let inner = 0; inner <= max; inner++) {
        boba = boba + " ";
    }
}
console.log(boba);