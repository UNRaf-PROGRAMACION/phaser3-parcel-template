import Phaser from "phaser";

export default class Preloads extends Phaser.Scene
{
	constructor()
	{
		super('Preloads')
	}

    preload(){
        //MENUS
        this.load.image('menuInicio', 'public/assets/images/menuInicio.png')
        this.load.image('elegirFaccion', 'public/assets/images/elegirFaccion.png')
        this.load.image('creditos', 'public/assets/images/creditos.png')




    }

    create() {
        this.scene.start('MainMenu')
    } 


}