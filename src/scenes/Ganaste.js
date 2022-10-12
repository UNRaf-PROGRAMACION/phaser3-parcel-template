import Phaser from 'phaser'




export default class Ganaste extends Phaser.Scene
{
     constructor() {
        // Se asigna una key para despues poder llamar a la escena
        super("Ganaste");
    }


    create()
    {
        let win = false;

        // Fondo del menú principal
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, "alicia").setScale(1.1);

        //clic
        //this.clic = this.sound.add('clic');

        //sonido ganador
        if (!win) {
            this.win = this.sound.add('win', { loop: false });
            //win.play();
        }

        // Boton para volver a Menu principal
        let menu = this.add.image(600, 1400, 'atras').setScale(0.26)
        menu.setInteractive()
        menu.on('pointerdown', () => this.scene.start('MapaNiveles'));
        //this.clic.play();

    }

    

}