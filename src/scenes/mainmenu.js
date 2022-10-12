
var musicamenu;

// Clase MainMenu, donde se crean los botones, el logo y el fondo del menú principal
export class MainMenu extends Phaser.Scene {
    constructor() {
        // Se asigna una key para despues poder llamar a la escena
        super("MainMenu")
    }

    create() {
        // Fondo del menú principal
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'mainmenu_bg').setScale();
        // Boton para comenzar a jugar
        var Inicar = this.add.image(350, 360, 'INICIAR').setScale(0.9)
      .setInteractive()
      .on('pointerover', () => this.add.image(350, 360, 'INICIAR2').setScale(0.9))
      .on('pointerout', () => this.add.image(350, 360, 'INICIAR').setScale(0.9))
      .on('pointerdown', () => this.INICIAR())

        // Boton para controles
        var Contr = this.add.image(350, 410, 'controles').setScale(0.9)
      .setInteractive()
      .on('pointerover', () => this.add.image(350, 410, 'controles2').setScale(0.9))
      .on('pointerout', () => this.add.image(350, 410, 'controles').setScale(0.9))
      .on('pointerdown', () => this.controles())
        
        // Boton para creditos
        var Credt = this.add.image(350, 460, 'creditos').setScale(0.9)
      .setInteractive()
      .on('pointerover', () => this.add.image(350, 460, 'creditos2').setScale(0.9))
      .on('pointerout', () => this.add.image(350, 460, 'creditos').setScale(0.9))
      .on('pointerdown', () => this.creditos())

      //musica
      musicamenu = this.sound.add("musicamenu");
      musicamenu.play({volume:0.1, loop:true})

    }

    INICIAR(){
      this.scene.start('mapa');
      musicamenu.stop();
    }

    controles(){
      this.scene.start('controles');
      musicamenu.stop();
      
    }

    creditos(){
      this.scene.start('creditos');
      musicamenu.stop();
    }
}