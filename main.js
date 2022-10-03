alert("El js se está ejecutando.");

function tomarHora(){
    const d = new Date();
    let hour = d.getHours();

    document.documentElement.classList.remove('transitional');
	document.documentElement.classList.remove('night');


    if (hour > 19){
        document.documentElement.classList.add('night');
		return;
    }
}

tomarHora();

var users = {"admin": 123};

function nuevoUsuario(){

    alert("La función nuevoUsuario se está ejecutando.")

    var usuario=document.login.usuario.value;
    var contraseña=document.login.password.value;
    var confirmarContra=document.login.newPassword.value;

    if (contraseña == confirmarContra){
        alert("Usuario creado exitosamente")
        users[usuario] = contraseña;
    }
    else{
        alert("Las contraseñas no coindicen. Intente otra vez.")
    }
    alert(users[usuario])
}

function ingresar(){
    var usuario=document.login.usuario.value;
    var contraseña=document.login.password.value;

    if (users[usuario] = contraseña){
        //Inició sesión

    }
    else{
        //No inició sesión
        //mensaje de que intente otra vez
    }
}

class producto{
    constructor(precio, nombre, tipo){
        this.precio = precio;
        this.nombre = nombre;
        this.tipo = tipo;
    }
}

let carrito = [];

//Leches

let leche = producto(150, "leche base", "leche");
let descremada = producto(170, "leche descremada", "leche");
let almendra = producto(200, "leche de almendras", "leche");
let cabra = producto(180, "leche de cabra", "leche");
let coco = producto(250, "leche de coco", "leche");

//Galletas

let oreo = producto(180, "oreos", "galletas");
let surtidas = producto(140, "surtidas", "galletas");
let sonrisas = producto(150, "sonrisas", "galletas");
let chocolinas = producto(220, "chocolinas", "galletas");
let donSatur = producto(120, "don satur", "galletas");

//Bebidas

let agua = producto(120, "agua", "bebida");
let pepsi = producto(220, "pepsi", "bebida");
let coca = producto(260, "coacola", "bebida");
let fanta = producto(220, "fanta", "bebida");
let manaos = producto(130, "manaos", "bebida");

//Alcohol

let cerveza = producto(400, "stella artois", "alcohol");
let vino = producto(600, "vino malbec", "alcohol");
let vinoblanco = producto(850, "vino blanco", "alcohol");
let whisky = producto(3400, "jack daniels", "alcohol");
let ron = producto(1900, "havana club", "alcohol");

//Fideos

let spaghetti = producto(200, "spaghetti", "fideos");
let macarrones = producto(150, "macarrones", "fideos");
let coditos = producto(180, "fideos coditos", "fideos");
let moñitos = producto(170, "fideos moñitos", "fideos");
let capelettini = producto(225, "capalettini", "fideos");


function alCarro(elemento){
    carrito.push(elemento);
}

function fueraCarro(elemento){
    delete carrito[carrito.indexOf(elemento)];
}

function comprar(elemento){
    alert("Fondos insuficientes.");
}

/*
var adjustColorMode = function () {

	// Remove any existing classes
	document.documentElement.classList.remove('transitional');
	document.documentElement.classList.remove('night');


	// If it's nighttime, go dark mode
	if (now > 20) {
		document.documentElement.classList.add('night');
		return;
	}

	// If it's morning or evening, go transitional
	if (now > 17 || now < 11) {
		document.documentElement.classList.add('transitional');
	}

};
*/
