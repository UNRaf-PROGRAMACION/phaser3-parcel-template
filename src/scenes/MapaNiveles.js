// @ts-ignore
import Phaser from 'phaser'




export default class MapaNiveles extends Phaser.Scene
{
    nivelActual = 0
    imagenes = ['mapa']

    constructor(){
        super('MapaNiveles')
        this.scene = undefined
        this.add = undefined
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

        // comenzar a jugar
        let juego = this.add.image(350, 600, 'siguiente').setScale(0.26)
        juego.setInteractive()
        juego.on('pointerdown', () => this.scene.start('Juego'));
        this.clic.play();
            
    }

    update()
    {
    }

}