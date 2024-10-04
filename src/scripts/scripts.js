/*Mi Json*/
const productosDeTienda = [
    {
    "precio" : 69840,
    "descripcion" : "Cubierta 175/65 R14",
    "img" : "p1.webp" ,
    "tienda" : "Maxisport"
    },
    {
        "precio" : 34950,
        "descripcion" : "Membrana No crack 40 kg",
        "img" : "p2.webp" ,
        "tienda" : "Megaflex"
    },
    {
        "precio" : 84900,
        "descripcion" : "Nivel Laser GII",
        "img" : "p3.webp" ,
        "tienda" : "boschk"
    },  
    {
        "precio" : 227.690,
        "descripcion" : "Parrilla XD",
        "img" : "p4.webp" ,
        "tienda" : "-"
    },   
    {
        "precio" : 14510,
        "descripcion" : "Porcellanato Beige",
        "img" : "p5.webp" ,
        "tienda" : "Allpa"
    },  
    {
        "precio" : 96600,
        "descripcion" : "Set Italiano",
        "img" : "p6.webp" ,
        "tienda" : "Capea"
    },  
    {
        "precio" : 535888,
        "descripcion" : "Lavarropas Blanco",
        "img" : "p7.webp" ,
        "tienda" : "BGH"
    },  
    {
        "precio" : 76125,
        "descripcion" : "Impermeabilizante",
        "img" : "p8.webp" ,
        "tienda" : "Sherwin Williams"
    },
    {
        "precio" : 167893,
        "descripcion" : "Ventana 150x110cm",
        "img" : "p10.webp" ,
        "tienda" : "Nexo"
        },
        {
            "precio" : 75896,
            "descripcion" : "Pileta Lona",
            "img" : "p9.webp" ,
            "tienda" : "Pelopincho"
        },
        {
            "precio" : 134999,
            "descripcion" : "Gabinete Marfil",
            "img" : "p11.webp" ,
            "tienda" : "Sc Metalurgica"
        },  
        {
            "precio" : 55990,
            "descripcion" : "Escritorio Mesita",
            "img" : "p12.webp" ,
            "tienda" : "Ricchezze"
        },   
        {
            "precio" : 9995,
            "descripcion" : "Led Plafón",
            "img" : "p13.webp" ,
            "tienda" : "Candela"
        },  
        {
            "precio" : 63990,
            "descripcion" : "Bordeadora",
            "img" : "p14.webp" ,
            "tienda" : "Einhell"
        },  
        {
            "precio" : 79388,
            "descripcion" : "Tanque 600 Litros",
            "img" : "p15.webp" ,
            "tienda" : "BGH"
        },  
        {
            "precio" : 20000,
            "descripcion" : "Arbol navidad 1.5m",
            "img" : "p16.webp" ,
            "tienda" : "M+Design"
        }
]
/*Agrego productos a mi pagina*/
let ultimaPosicion = 0
function mostrarProductos(productosDeTienda){
    let fin = ultimaPosicion + 8
    let codigoGenenerar = " "
    for (var i = ultimaPosicion; i < fin ; i++){
        codigoGenenerar += `
        <article class="product">
            <div class="icon-fav">
                <span class="material-symbols-outlined " id="icon-Favo">
                    favorite
                </span>
            </div>
            <div class="product-header">
                <div class="conteiner-img">
                    <img src="src/imgs/products/${productosDeTienda[i].img}" alt="${productosDeTienda[i].descripcion}">
                </div>
                <span class="precio-producto" id="precio-producto">$ ${productosDeTienda[i].precio}</span>
            </div>
            <div class="produc-body">
                <h2>${productosDeTienda[i].tienda}</h2>
                <p>${productosDeTienda[i].descripcion}</p>
            </div>
            <button class="btn-agregar-carrito">Agregar al carrito</button>
        </article>
        `
        actualizarContador(i)
    }
    actualizarContador(i++)
    document.getElementById("productos-recomendados").innerHTML += codigoGenenerar
}

//Funcion para agregar mas productos
document.getElementById("btn-agregarmas").addEventListener("click",()=>{
    mostrarProductos(productosDeTienda)

})
//Cargo los productos 
document.addEventListener("DOMContentLoaded",mostrarProductos(productosDeTienda))

//Funcion que actualiza contador para cargar mas elementos

function actualizarContador(num){
    return(ultimaPosicion = num)
}
/*Funcion de agregar a Carrito*/
let productosCarrito = 0;
const btnsCarrito = document.querySelectorAll(".btn-agregar-carrito");//Devuelve Arreglo de botones

btnsCarrito.forEach( btn =>{
    btn.addEventListener("click",()=>{
        document.getElementById("counter-trolley").style.display = "block"
        actualizarProductosDeCarritos();
        agregarACarrito();
        alert("El producto fue agregado correctamente")
    })
})

function agregarACarrito(){
    document.getElementById("counter-trolley").innerHTML = productosCarrito;
}

function actualizarProductosDeCarritos(){
    return(productosCarrito ++)
}
