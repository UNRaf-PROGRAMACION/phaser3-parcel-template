class Runner{
    constructor(jugador, tiempo, vida){

        jugador= jugador;
        this.tiempo= tiempo;
        this.vida=vida
    }

    tiempoDescuento(){

    }

    FinJuego(){

    }
}

class RunnerJungla extends Runner{
    constructor(obstaculosJungla, plataformasJungla, enemigosJungla){
        super();

        this.obstaculosJungla= obstaculosJungla;
        this.plataformasJungla= plataformasJungla;
        this.enemigosJungla= enemigosJungla;
    }

    //FinJuego(){}
}

class RunnerNoche extends Runner{
    constructor(obstaculosNoche, plataformasNoche, enemigosNoche){
        super();

        this.obstaculosNoche= obstaculosNoche;
        this.plataformasNoche= plataformasNoche;
        this.enemigosNoche= enemigosNoche;
   
    }

    //FinJuego(){}
}

export default {Runner, RunnerJungla, RunnerNoche};
