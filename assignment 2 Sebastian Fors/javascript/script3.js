let citynames = ["kiruna", "uppsala", "malmo", "gothenburg", "stockholm"];
for (let index = 0; index < citynames.length; index++) {
    const element = capitalizeFirstLetter(citynames[index]);

    for (let inner = 0; inner < element.length; inner++) {
        console.log(element[inner]);
    }
}

for (let i = 0; i < citynames.length; i++) {
    const city = citynames[i]
    for (let j = 0; j < city.length; j++) {
       if(j==0)
        console.log(city.charAt(j).toUpperCase());
       else 
        console.log(city.charAt(j));
    }
} 

for (let i = 0; i < citynames.length; i++) {
    citynames[i].charAt(0).toUpperCase() + citynames[i].slice(1)
        for (let j = 0; j < citynames[i].length; j++) 
            console.log(citynames[i][j])
}

function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

//Rein ytterberg , kung fu
//Håkan .... 



// Object

let array = [ 1 , "hej" ,false , true]
array[3] = "alrik"
array.push("alrik") 
array.unshift("He")  
let antalDeletedElement = 0
array.splice(1,antalDeletedElement,"hejsan")


//         key: value
let obj = { 
    id:1,
    greeting:"hej",
    human:true,
    adress: "yxgatan 5b",
    log: function (x) {
        console.log(x)
    },
    getAdress: function () { 
        return this.adress 
    }
} 

function log(x) {
    console.log(x)
}
function getAdress() { 
     return this.adress 
}

alert()
console.log(obj.id);
document.write()
