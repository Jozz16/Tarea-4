class Equipofurvol{
    constructor(nombre, poblacion, capitan){
        this.nombre=nombre;//string
        this.poblacion=poblacion;//string
        this.capitan=capitan;//string
        this.jugadores=[];//array 
    }
}

class Jugador {
    constructor(nombre, apellido, rut, año_nacimiento){
        this.nombre=nombre;
        this.apellido=apellido;
        this.rut=rut;
        this.año_nacimiento=año_nacimiento;
    }
}

let equiposIncritos = []


function registrarEquipo (){
        let nombre = document.querySelector("#nombre")
        let poblacion = document.querySelector("#poblacion")
        let capitan = document.querySelector("#capitan")

        let equipo = new Equipofurvol(nombre.value, poblacion.value, capitan.value)
        equiposIncritos.push(equipo)
        
}
function registrarJugador() {
    let nombreJugador = document.querySelector("#nombreJugador")
    let apellido = document.querySelector("#apellido")
    let rut = document.querySelector("#rut")
    let fechaNacimiento = document.querySelector("#fechaNacimiento")
    let NombreEquipo = document.querySelector("#NombreEquipo")

    let jugador = new Jugador(nombreJugador.value, apellido.value, rut.value, fechaNacimiento.value )   
    let equipoEncontrado = equiposIncritos.filter(elemento=> elemento.nombre === NombreEquipo.value)
        if (equipoEncontrado === ""){
            alert("no existe ese equipo")
        } else {
            equipoEncontrado[0].jugadores.push(jugador)  
        } 
}
