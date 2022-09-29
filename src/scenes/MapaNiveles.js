import Phaser from 'phaser'




export default class MapaNiveles extends Phaser.Scene
{
    nivelActual = 0
    imagenes = ['imagenniv1', 'imagenniuv2']

    constructor(){
        super('MapaNiveles')
    }

	preload()
    {

    }

    create()
    {
        //crear imagen
        this.add.image(50, 50, this.imagenes[this.nivelActual])
        hacer interactiva{
            //onclik
            this.scene.start('juego', {nivel: this.nivelActual});
        }

            
    }

    update()
    {
    }

}