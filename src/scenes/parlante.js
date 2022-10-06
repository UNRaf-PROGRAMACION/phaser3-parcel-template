class Parlante extends Phaser.Sprite{
    constructor(estado, posicion, tema, scene, x, y, texture='music'){
        this.estado= estado;
        this.posicion= posicion;
        this.tema = tema;
        super(scene, x, y, texture)
    }

    animacion(){
        //imagen
    }

    boton(){


    }

    on()
}

export default Parlante;