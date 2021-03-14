const numeroLimones = document.getElementById("limon");
const numeroNaranjas = document.getElementById("Naranjas");
const numeroMelones = document.getElementById("Melon");
const formato = document.getElementById("form");
const preciototal = document.getElementById("precioTotal");
const IVA = document.getElementById("iva");

formato.onsubmit = function(event){
    event.preventDefault();
    var precioTotal = (numeroLimones.value*25)+(numeroNaranjas.value*30)+(numeroMelones.value*15);
    var iva = precioTotal * 0.16;
    preciototal.innerHTML = "El precio es: " + precioTotal;
    IVA.innerHTML = "IVA: " + iva;
    formato.reset();
};