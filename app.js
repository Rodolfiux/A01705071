console.log("Hola desde node");

const file_system = require("fs");

file_system.writeFileSync('carros.txt','Ferrari');
