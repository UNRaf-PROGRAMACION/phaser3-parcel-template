import Phaser from "phaser";
import Button from "../js/button";


export default class Creditos extends Phaser.Scene
{
	constructor()
	{
		super('Creditos')
	}



    create()
    {
        const fondoCreditos = this.add.image( this.cameras.main.centerX , this.cameras.main.centerY , 'creditos');
        const botonVolver = new Button(this, 70, 60, 'botonVolver', '', 0,  () => this.scene.start('MainMenu'), 0.64)




    }
}
