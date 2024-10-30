let OX = ""; //namn på variabel är flummig, småbokstäver i början

for (let i = 0; i < 10; i++)  // ändra index till  i
    if (i === 4) //curlybracets ta bort semicolon
        OX += "Q"   //OX = OX + "Q"; samma += ökar
    else if (i % 2) 
        OX += "X"
    else 
        OX += "O"

//snackar om null
    
// index i context med arrayer

// index i template
/* for (let index = 0; index < array.length; index++) {
    const element = array[index];
} */

console.log(OX);