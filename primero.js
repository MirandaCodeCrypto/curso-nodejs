console.log("hello world")
//comentario

//VARIABLES

var nombre="Juan"; //stirng
var precio=12.4; //float
const PI=3.14 //float comstance
var isActive=true; //boolean
var estadoCivil="soltero"; //string
var fecha= new Date(2022, 0, 1); //date  los meses van del 0 al 11

console.log("nombre", nombre);
console.log("precio", precio);
console.log("is active", isActive);
console.log("estado civil", estadoCivil);
console.log("fecha", fecha);

//fecha

console.log(new Date());
console.log(new Date("December 11, 2001, 03:24:00"))

var moment = require("moment")
var ahora = moment.now();
var fechaDeHoy = moment(ahora)
console.log(ahora, fechaDeHoy.toString());

var texto = "0123456789"

console.log = (texto.substring(3))

//condiciones

var a = 1
var b = 2

if (a == b)
    {console.log("a == b")}
    else
    {console.log("a != b")}

if (a > b)
    {console.log("a > b")}
    else
    {console.log("a >= b")}

if (a >= b)
    {console.log("a == b")}
    else
    {console.log("a <= b")}

//bucles

for (var i = 0; i < 10; i += 2) {
    console.log(i)
}

//forma para hacer numeros pares
for (var i = 0; i <= 10; i ++) {
    if (i % 2 == 0)
    console.log(i)
}

//del 1 al 10 con while
var a = 1
while (a <= 10) {
    console.log(a);
    a ++;
}

//del 10 al 1 con while
var a = 10
while (a > 0) {
    console.log(a)
    a--;
}

//array
const numbers = [45, 4, 9, 16, 25];

for(let x in numbers) {
    console.log(x, numbers[x]);
}

for(let x of numbers) {
    console.log(x)
}

for (const [i, v] of ["a", "b", "c"].entries()) {
    console.log(i, v)
}

//funciones
function multiplicar (a, b) {
    var c = a * b
    return c;
}

const multi = (a, b) => a * b
console.log (multi(2, 5))

var r = multiplicar (4, 5)
console.log(r)

//filter
var lista = [1,2,3,4,5,6,7,8,9,10]

var nuevaLista = lista.filter(function(numero) {
    return numero % 2 == 0
});
console.log(nuevaLista)

var impares = lista.filter ((numero) => {
    return numero % 2 !== 0;
})
console.log(impares);

var a = [3, 4, 66, 89]

var listaMayor10 = a.filter ( (p) => p > 10)
console.log(listaMayor10)

//map
var lista = [77,5,44,36,84,69,42,69];
var cuadrado = lista.map ((numero) => {
    return numero * numero;
});
console.log(cuadrado)

var cuadradoPares = lista.filter ((numero) => numero % 2 == 0).map((numero) => {
    return numero * numero
});
console.log(cuadrado)

//reduce
var lista = [1,2,3,4,5,6,7,8,9,10]

var suma = lista.reduce((acumulador, numero) => {
    console.log(acumulador, numero);
        return acumulador + numero;
}, 0)
console.log(suma)

//todo junto
var lista = [ 1,2,3,4,5,6,7,8,9,10];

var sumaCuadradoPares = lista.filter ((numero)=> numero % 2 == 0)
    .map((numero) => {return numero * numero})
    .reduce((acumulador, numero) => {return acumulador + numero;}); 0
 
console.log (sumaCuadradoPares)

//objetos
var MyCar = {
    make: "Ford",
    model: "Mustang",
    year: "1969"
};

console.log(MyCar)
console.log(MyCar.make)
console.log(MyCar.model)
console.log(MyCar.year)

var yourCar = MyCar;
console.log(yourCar)

yourCar.cc = 2300

console.log(yourCar)
console.log(MyCar)


var cadena = '{ "make": "Ford", "model": "mustang", "year": "1969" }'
var objeto = JSON.parse(cadena)
console.log(objeto);

JSON.stringify(objeto)

console.log(JSON.stringify({fecha: new Date()}))


var factura = {
    numero: 123,
    fecha: new Date(2022,12,12),
    cliente: {
        nombre: "Juan",
        apellidos: "Pérez"
    },
    items: [
        {
            descripción: "Monitor 34 pulgadas",
            precio: 300
        },
        {
            descripción: "Teclado",
            precio: 30
        }
    ]
}

console.log(factura)

//funciones arrays y objetos
const edades = [10,20,30,40,50,];

function mediaEdades(edades) {
   var suma = 0;
   for (let edad of edades) {
       suma += edad;
   }
   var media = suma / edades.length;
   return media;
}
console.log(mediaEdades(edades))





var factura = {
    numero: 123,
    fecha: new Date(2022,12,12),
    cliente: {
        nombre: "Juan",
        apellidos: "Pérez"
    },
    items: [
        {
            descripción: "Monitor 34 pulgadas",
            precio: 300
        },
        {
            descripción: "Teclado",
            precio: 30
        }
    ]
}


function calcularTotal(factura) {
    var total = 0
    for (let item of factura.items) {
        total += item.precio;
    }
    return total
}

console.log(calcularTotal(factura))



const valores = [1,2,3,4,5,6,7,8,9,10]
const factura = {
    numero: 1,
    fecha: new Date(2022, 12 ,12),
    cliente: [
        datos =
        {
        nombre: "Francisco",
        apellido: "Fernández"
    }
],
    items: [
        {
            objeto: "Cafetera",
            importe: 35
        },
        {
            objeto: "Televisión",
            importe: 950
        },
        {
            objeto: "Altavoces",
            importe: 100
        }

    ]

}

console.log(factura.datos)

function calcularMedia(arreglo) {
    var suma = 0;
    for (ele of arreglo) {
        suma += ele
    }
    console.log(suma)
    console.log(arreglo.length)

    var media = suma / arreglo.length
    
    return media;
}

function sumaLineas(factura) {
    var suma = 0;
    for (linea of factura.items) {
        console.log(linea)
        suma += linea.importe
    };
    console.log(suma)
    return suma;
};

var m = calcularMedia(valores)
console.log(m)

var sumaFactura = sumaLineas(factura)




var clienteSevilla = customers.filter(i => i.country == "USA") //filtra todos los datos que sean de country USA

const nombres = customers.map(cliente => cliente.company_name) //te da el dato de todos los company_name

const nombres2 = customers

.filter (cliente => cliente.country == "USA")
.map(cliente => ({nombre:cliente.company_name, country:cliente.country}))
console.log(nombres2)


const array = [1,2,3,4,5,6,7,8,9]

const suma = array.reduce((acumulador, valor) => { return acumulador + valor})
console.log(suma)