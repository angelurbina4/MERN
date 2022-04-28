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

class Sensei extends Ninja {

    constructor(nombre){
        super(nombre, 200);
        this.velocidad = 10;
        this.fuerza = 10;
        this.sabiduria = 10;
    }

    speakWisdom () {
        super.drinkSake();
        console.log(`Ningun ser humano puede ser totalmente competente en todos los aspectos o en la mayor parte de ellos`);
    }

    drinkSake () {

    }

}

const ninja1 = new Ninja("Lilo", 100);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
console.log("-----------------------");
const sensei1 = new Sensei("Carmen");
sensei1.showStats();
sensei1.speakWisdom();
sensei1.showStats();
