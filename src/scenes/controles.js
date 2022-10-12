var musicacontroles
// Clase MainMenu, donde se crean los botones, el logo y el fondo del menú principal
export class controles extends Phaser.Scene {
    constructor() {
        // Se asigna una key para despues poder llamar a la escena
        super("controles")
    }

    create() {
        // Fondo del menú principal
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'controlesim').setScale();
        // Boton para ir al menu
        
        var botonre = this.add.image(70, 70, 'botonvolver').setScale(0.5)
      .setInteractive()
      .on('pointerover', () => this.add.image(70, 70, 'botonvolver2').setScale(0.5))
      .on('pointerout', () => this.add.image(70, 70, 'botonvolver').setScale(0.5))
      .on('pointerdown', () => this.botonvolver())

      //musica
      musicacontroles = this.sound.add("musicacontroles");
      musicacontroles.play({volume:1, loop:true})
        
    }

    botonvolver(){
        this.scene.start('MainMenu');
        musicacontroles.stop();
    }
}