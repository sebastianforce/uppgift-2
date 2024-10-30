let citynames = ["kiruna", "uppsala", "malmo", "gothenburg", "stockholm"];
for (let index = 0; index < citynames.length; index++) {
    const element = capitalizeFirstLetter(citynames[index]);

    for (let inner = 0; inner < element.length; inner++) {
        console.log(element[inner]);
    }
}
function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}