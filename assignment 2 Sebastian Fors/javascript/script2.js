let boba = "";
for (let i = 0; i < 20; i++) {
    //boba += "O";

    let amountOfspaces = Math.ceil(Math.random() * 5);
    boba += ("O"+" ".repeat(amountOfspaces))
    
    /*for (let j = 0; j <= amountOfspaces; j++) {
        boba += " ";
    } */

}

console.log(boba);