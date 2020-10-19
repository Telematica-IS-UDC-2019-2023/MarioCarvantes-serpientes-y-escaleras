class Dado{
    tirar(){
        return Math.ceil(Math.random()*6)
    }
}

class Jugador{
    constructor(nombre){
        this.nombre = nombre
        this.posicion = 0
        this.avance = 0
    }

    avanzar(final){
        this.avance = this.posicion + final
        return this.avance
    }
}

class Tablero{
    Ncasillas(casilla){
        switch(casilla){
            case 7 ://escalera
            return 14
        case 15 ://serpiente
            return 4
        case 25 ://escalera
            return 50
        case 60 ://serpiente
            return 45
        case  66 ://escalera
            return 78
        case 70://serpiente
            return 30
        case 73 ://escalera
            return 92
        case 77 ://serpiente
            return 55
        case 82  ://escalera
            return 100
        case 85 ://escalera
            return 98
        case 99 ://serpiente
            return 1
        case 40 ://escalera
            return 66
        case 73 ://serpiente
            return 19
        case 20 ://escalera
            return 33
        case 10 ://serpiente
            return 5
        case 90 ://serpiente
            return 2
        default:
            return casilla 
        }
    }
}

let dado = new Dado();
let J1 = new Jugador ('ALEX');
let J2 = new Jugador ('ASH');
let tablero = new Tablero();


while(J1.posicion <= 100 && J2.posicion <= 100){
    J1.posicion = tablero.Ncasillas(J1.avanzar(dado.tirar()));
    J2.posicion = tablero.Ncasillas(J2.avanzar(dado.tirar()));
    console.log(`${J1.nombre} se movio a la casilla ${J1.posicion} ||| ${J2.nombre} se movio a la casilla numero ${J2.posicion}`);
}

if (J1.posicion >= 100){
    console.log(`${J1.nombre} ah ganado`)
}else if (J2.posicion >= 100){
    console.log( `${J2.nombre} ah ganado`)
}