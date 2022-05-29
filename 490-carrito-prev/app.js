//se crean las constantes y llamar el id 
//query selector es para seleccionar la etiqueta
const agregarCards = document.querySelector("main");
const selectPrices = document.getElementById('filtroprecio');
const selectProducts = document.getElementById("select-products");
const crearfor = document.getElementById("crear-for");
const close = document.getElementById("close_create");
const createproductper = document.getElementById('crearproducto');

const closeCarrito = document.getElementById('closeCompra');
closeCarrito.addEventListener('click', closeCompra);

function closeCompra() {
  compra.style.visibility = "hidden";
}

const carrito = document.getElementById('carrito');

carrito.addEventListener('click', modalCompras);

function modalCompras() {
  const compra = document.getElementById('compra');
  compra.style.visibility = "visible";
}

///variable ´para contar los productos
let idproducto = 0;
//esta variable toma la imagen
let select = " ";

//se crean las constantes
const nameproducto = document.getElementById('nameproducto');
const priceproducto = document.getElementById('priceproducto');
const imgproducto = document.getElementById('imgproducto');
const crearproducto = document.createElement('button');

window.addEventListener('load', listSelect);
selectProducts.addEventListener('change', renderCards);

selectPrices.addEventListener('change',listaprecio);

///constante para importar la imagen///
imgproducto.addEventListener('change',imporimg);
function imporimg(event) {
  //files es para caracteristicas del objeto
  const vaImg = event.target.files[0];

  const UrlImg = URL.createObjectURL(vaImg);
  select = UrlImg;
}

/// aqui creamos un nuvo producto por el cliente
crearproducto.addEventListener('click',createproduct);
function createproduct() {
  idproducto++;
  const titulo = nameproducto.value;
  const price = priceproducto.value;
  const idpro = idproducto;

  ///creamos un objeto nuevo
  //constantes
  const newmotos = {id: idpro , product : titulo , price : price, image: select}

  //aqui enviamos el nuevo objeto
  motos.push(newmotos);
  console.log(motos);

///aqui hacemos para que aparezca el nuevo producto en la lista
  listSelect();

  //aqui hacemos desaparecer el formulario
  const agregar = document.getElementById('agregar');
  agregar.style.display ="none";
}


//esta funcion es para crear el contenedor
function renderCards() {  
  motos.map(motoss => { motoss.product === selectProducts.value ? createCards(motoss) : null });
}

//en esta funcion muestra el menu de los elementos del arreglo
function listSelect() {
  selectProducts.innerHTML = '';
  const an = document.createElement('option');
  selectProducts.appendChild(an);
  an.textContent = "seleccione una moto"; 
  motos.map( motoss => {
    const option = document.createElement('option');
    option.value = motoss.product;
    option.textContent = motoss.product;    
    selectProducts.appendChild(option);
  })
}

//en esta funcion se muestran las opciones para escoger un producto

function listaprecio(event) {
 const menorA = event.target.value ==="menor a 9000000" ? motos.filter(motoss => motoss.price < 9000000)
 : event.target.value === "entre 9000000 y 20000000 " ? motos.filter(motoss => motoss.price >= 9000000 && motoss.price <= 20000000 )
 : event.target.value === "mayor a 20000000" ? motos.filter(motoss => motoss.price >20000000 )
 :null

 agregarCards.innerHTML = '';
 menorA.map(motoss => createCards(motoss));
}


/////////////////button////////////////////
crearfor.addEventListener('click', creardfor);
function creardfor(event) {
  const agregar = document.getElementById('agregar');
  agregar.style.display ="flex";
  console.log(event.target.value);
}

////////////////////button cerrar//////////////////////
close.addEventListener('click',close_create);
function close_create(){
  const closefor = document.getElementById('agregar');
  closefor.style.display = "none";
}

//en esta funcion es para crear todos los elementos y mostrarlos
function createCards(motos) {
  const {product, image,id,price} = motos; 

    const card = document.createElement('div');
    card.classList.add('card-product');
    
    const imgCard = document.createElement('img');
    imgCard.setAttribute('src',image);
    imgCard.setAttribute('alt',product);
    imgCard.classList.add('img-product');

    const nameCard = document.createElement('p');
    nameCard.textContent = product;
    nameCard.classList.add('name-product');

    const priceCard = document.createElement('p');
    priceCard.classList.add('price-product');
    priceCard.textContent = price;


    const forcreardforAdd = document.createElement('button');
    forcreardforAdd.setAttribute('id',id);
    forcreardforAdd.classList.add('forcreardfor-add');
    forcreardforAdd.textContent = 'comprar';

    forcreardforAdd.addEventListener('click', tiendaMoto);

    const btnremove =document.createElement('button');
    btnremove.classList.add('close_card');
    btnremove.textContent = 'X';
    btnremove.style.textAlign ='center';

    btnremove.addEventListener('click',quitarcarta);
    function quitarcarta() {
      card.remove();
    }

  
    card.appendChild(imgCard);
    card.appendChild(nameCard);
    card.appendChild(priceCard);
    card.appendChild(forcreardforAdd);
    card.appendChild(btnremove);


    //con este se agregan las cartas
    agregarCards.appendChild(card);
  } 

  /*   A G R E G A R   A L   C A R R I T O  */
  
const compra = document.getElementById('compra');


function tiendaMoto(event) {
  motos.map( element => {
    if (element.id === event.target.id) {
      shopingMoto(element);
    }
  })
}



function shopingMoto(motos) {
  const {id, product, price, image} = motos;

  

  const venta = document.createElement('div');
  venta.classList.add('vendido');

  let imgCompra = document.createElement('div');
  imgCompra.classList.add('imgCompra');
  const img = document.createElement('img');
  img.classList.add('imgC');
  img.setAttribute('src', image);


  let nombreProducto = document.createElement('div');
  nombreProducto.classList.add('nombreProducto');
  let nombreMoto = document.createElement('p');
  nombreMoto.textContent = "Nombre Moto";
  const producto = document.createElement('p');
  producto.textContent = product;
  producto.setAttribute('id', id);


  let precioMoto = document.createElement('div');
  precioMoto.classList.add('precioMoto');
    let Precio = document.createElement('p');
    Precio.textContent = "Precio";
    let precioM = document.createElement('p');
    precioM.textContent = price;


  let aumentarCant = document.createElement('div');
  aumentarCant.classList.add('aumentarCant');
    let cantidad = document.createElement('p');
    cantidad.textContent = "Cantidad";
    let btnMas = document.createElement('button');
    btnMas.textContent = "+";
    let btnMenos = document.createElement('button');
    btnMenos.textContent = "-";


  /*    AGREGO LOS ATRIBUTOS A LOS CONTENEDORES   */


  imgCompra.appendChild(img);
  nombreProducto.appendChild(nombreMoto);
  nombreProducto.appendChild(producto);
  precioMoto.appendChild(Precio);
  precioMoto.appendChild(precioM);
  aumentarCant.appendChild(cantidad);
  aumentarCant.appendChild(btnMas);
  aumentarCant.appendChild(btnMenos);

  venta.appendChild(imgCompra);
  venta.appendChild(nombreProducto);
  venta.appendChild(precioMoto);
  venta.appendChild(aumentarCant);


  compra.appendChild(venta);

}





