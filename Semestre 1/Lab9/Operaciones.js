const arr =[15,20,90,40]

function promedio(arr){
    const r = arr.reduce((b,d)=> b + d ,0);
    return r / arr.length;
}
const pr = promedio(arr);
console.log(pr);

let string ="Que onda Raza"

const file_system=require('fs');
file_system.writeFileSync('Saludo.txt', string);


const http =require('http');

const server = http.createServer((request,response)=> {
    console.log(request.url);
    response.setHeader('Content-Type','text/html');
    response.write('<html lang="es"<html lang="en" xmlns="http://www.w3.org/1999/xhtml">');

    response.write('<head> <meta charset="utf-8" /> <title>Yo</title> </head>');
    response.write('<body> <header><h1>Rodolfo Renteria Medina</h1></header> <h2>Datos</h2> <ul> <li>Estudio ISC</li> <li>Matricula: A01705071</li> <li>A01705071@itesm.mx</li>');
    response.write('</ul> <footer>El editor es : <a href="https://visualstudio.microsoft.com/es/">visual estudio</a>. </footer> <script src="js/Lab4.js"></script> </body>');

    response.write('</html>');
    response.end()
});


server.listen(3000);