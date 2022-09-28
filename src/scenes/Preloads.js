import Phaser from "phaser";



export default class Preloads extends Phaser.Scene
{
	constructor()
	{
		super('Preloads')
	}

    preload(){
        //MENUS
        this.load.image('menuInicio', 'assets/images/menuInicio.png')
        this.load.image('elegirFaccion', 'assets/images/elegirFaccion.png')
        this.load.image('creditos', 'assets/images/creditos.png')

        // Interfaz
        this.load.image('botonMarco', 'assets/interfaz/botonMarco.png')



    }

    create(){
        this.scene.start('MainMenu');

    } 


}