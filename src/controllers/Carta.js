
class Carta {
    constructor (escena, x, y, tipo){
        this.imagen = escena.add.image(x,y, "reverso").setInteractive()
        this.imagen.tipo = tipo;  
        this.imagen.escena = escena        
    };
}

export {Carta}
