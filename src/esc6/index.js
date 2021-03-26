
/*versiones anteriores de ecmascrip nos permitian ejecutar un codigo
de la siguiente manera, en la cual al hacer la signacion de valores 
podiamos asignarle un valor default a nuestrasw variables en caso de que no
enviaramos el valor inicial*/
function newFunction(name,age,country){
    var name = name || 'Oscar';
    var age = age || 25;
    var country = country || 'México';
    console.log(name,age,country)
}

/*
    ecmascript6 nos permite utilizar unaigualacion en los argumentos
    para poder aplicar este mismo funcionamiento pero de una manera
    mucho mas limpia
*/

function newFunction2(name='Oscar',age=25,country='México'){
    console.log(name,age,country)
}



newFunction()
newFunction('Ricardo',45,'Colombia')

newFunction2('Carlos',35,'España')

/*otra mejora importante para ecmascript 6 es el template literario que funciona
de la siguiente manera:

las variables que ahora quieras concatenas, pueden formar parte de un template 
utilizando los caracteres ${} como se ve en el siguiente ejemplo
*/

//var hello = "hello";
//var world = "world";

//console.log(`${hello} ${world}`)

/*
    las comillas fransesas tambien nos permiten hacer la escritura de textos
    de una manera mucho mas amigable, ya que nos permite escribir un string
    que, de manera literal, se escribe tal y como s elo msotramos
*/

var cadena = `Esta es una cadena epica.
Esta es otra cadena epica.`

console.log(cadena)

/*
    La desestructuracion de elementos

    Es una herramienta de ecmascript 6 que nos permite obtener de una manera
    mas simple los datos de un objeto en el cual nosotros tenemos los datos bien
    estructurados
*/

var persona = {
    'nombre' : 'Carlos',
    'apellido' : 'Basilio',
    'edad' : 35
}

console.log(persona)

let {nombre,apellido,edad} = persona;

console.log(nombre,apellido,edad)

/*
    operador de propagacion

    nos permite tomar elementos de otros objetos y unirlos a un tercero para
    generar un nuevo elemento con todos los elementos incluidos.
*/

var jefes = ['Carlos','Basilio', 'Torres'];
var empleados = ['Godinez','Armando','La fea'];

var empresa = ['director: Juan', ...jefes,...empleados];

console.log(empresa)

/*

    var vs let
    
    var tiene la propiedad de que donde sea que sea declarado, este 
    siempre tendra un scope global y la variable let unicamente en el bloque de codigo
    que lo ha escrito o mandado a llamar (scope local)
*/

{
    var name1 = 'Carlos'
}

{
    let name2 = 'Rodrigo'
    console.log(name2)
}

console.log(name1)
//console.log(name2)

/*
Valores constantes

usalos siempre que sepas que ese valor no debe cambiar por ningun motivo a lo largo de
tu programa
*/

const nombre3 = 'Graciela';
nombre3 = 'Calros';


/*
    Arrow functions

    forma contraida de escribir funciones de manera muy simple
*/

var square = data => data * data;
console.log(square(5))

/*En el ejemplo anterior obtuvimos una funcion bastante simple de implementar,
pero esto se puede implementar de la misma manera en cualquier parte donde necesitemos
implementar una function*/

var numeros = [1,2,3,4,5,6,7,8,9]
numeros.map((data,index) => console.log(`${index}: ${data}`))

/*
    Podemos trabajar incluso con objetos sin problema
*/

var familiares = [
    {'nombre':'Juan','Parentezco':'Tio'},{'nombre':'Juan','Parentezco':'Tio'},
    {'nombre':'Juan','Parentezco':'Tio'},{'nombre':'Juan','Parentezco':'Tio'},
    {'nombre':'Juan','Parentezco':'Tio'},{'nombre':'Juan','Parentezco':'Tio'},
]

familiares.map((data,index) => console.log(`${index} : ${data.nombre}`))

/*
    Promesas

    una funcion o metodo que garantiza que, tarde o temprano algo va a pasar,
    ya sea una aceptacion o un error, pero algo va a pasar
*/

const helloPromise = () =>{
    return new Promise((resolve,reject) => {
        if(true){
            resolve("todo listo");
        }else{
            reject("ups!!!")
        }
    })
}


helloPromise()
.then(response => console.log(response))
.catch(error => console.log(error));


const hello = require('./module');

hello();

function* helloGenerator(){
    if(true){
        yield "hello";
    }

    if(true){
        yield "what's up";
    }
}

const generator = helloGenerator();

console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)