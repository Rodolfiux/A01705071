console.log("Hola mundo")

const precio = 22;
console.info('el precio de los tacos es de $'+precio);


let cantidad_tacos = 6;

console.log('Te voy a mandar' + cantidad_tacos +'tacos');

let descuento = 0;

let persona = "Lalo";

if (cantidad_tacos >6 && persona === "Lalo"){
    descuento = 0.1 * (cantidad_tacos*precio);
console,info('se hizo un descuento de $'+ descuento);

}
const por_pagar = cantidad_tacos * precio - descuento;

console.info("por pagar:"+ por_pagar);


const clientes =[];
clientes.push('Lalo');
clientes.push('Javier');
clientes.push('Julio');


for(let cliente of clientes){

console.log(cliente);
}

const menu = [];
menu.push({nombre:'El paisa', precio:22})
menu.push({nombre:'El Tacoshino', precio:29})
console.log(menu)
window.alert('Bienvenido a tachoshino');
const ordenar = window.confirm('Desea ordenar?');
if(ordenar){
const tacos = window.prompt('Cuantos tacos vas a querer?');
const calcular_cuenta = (num_tacos)=> num_tacos *22;
console.log('La cuenta es de: $'+ calcular_cuenta(tacos))


}
