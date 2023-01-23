// Selector de elementos desde aquí
let titulo = document.querySelector("h1");
titulo.innerHTML = "Titulo seleccionado con querySelector";

const parrafo = document.getElementsByClassName('parrafo');
parrafo[0].innerHTML = "Párrafo editado con JS"

const segundoParrafo = document.getElementById("segundoParrafo")
segundoParrafo.textContent = "Párrafo editado con textContent"

const texto = document.querySelectorAll("p")
console.log(texto[2])
texto[2].textContent = "Párrafo creado con js"
// Selector de elementos hasta aquí

const listaDeCompras = document.querySelector("ul")

// Creando elementos desde aquí
let li = document.createElement("li");
li.textContent = "Carne";
listaDeCompras.appendChild(li);

//creando elementos a partir de un array desde aquí
let aseo = ["Confort","Cloro","Detergente","Lavalozas"];
for (let i=0; i<aseo.length; i++){
    let lili = document.createElement("li");
    lili.textContent = aseo[i];
    listaDeCompras.appendChild(lili);
}
// Bucle forEach 
let plantas = ["Sustrato","Fertilizante","Semillas"];
plantas.forEach((e) => {
    const lilili = document.createElement("li");
    lilili.textContent = e;
    listaDeCompras.appendChild(lilili);

})
//creando elementos hasta aquí

