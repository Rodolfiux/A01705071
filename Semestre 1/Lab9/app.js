console.log("Hola desde node");

const file_system = require("fs");

file_system.writeFileSync('carros.txt','Ferrari');

const arreglo = [3522 ,1998,2020,4500,5555,6666,34,20,2,134,10];

for (let item of arreglo){
    setTimeout( () => {
        console.log(item);
    },item);
}
