let OX = "";

for (let index = 0; index < 10; index++) {
    if (index === 4) {
        OX = OX + "Q";
    } else if (index % 2) {
        OX = OX + "X";
    } else {
        OX = OX + "O";
    }
}

console.log(OX);