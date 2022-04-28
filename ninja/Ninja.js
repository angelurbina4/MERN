class Ninja {
    constructor(nombre, salud){
        this.velocidad = 3;
        this.fuerza = 3;
        this.nombre = nombre;
        this.salud = salud;
    }

    sayName(nombre){
        console.log(`El nombre del ninja es: ${this.nombre}`);
    }

    showStats(){
        console.log(`El nombre del ninja es: ${this.nombre}, la fuerza: ${this.fuerza}, velocidad: ${this.velocidad}, y la salud es: ${this.salud}`);
    }

    drinkSake () {
        this.salud += 10;
    }

}

const ninja1 = new Ninja("Lilo", 100);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();