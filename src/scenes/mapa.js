var musicamapa

// Clase MainMenu, donde se crean los botones, el logo y el fondo del menú principal
export class mapa extends Phaser.Scene {
    constructor() {
        // Se asigna una key para despues poder llamar a la escena
        super("mapa")
    }

    create() {
        // Fondo del menú principal
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'mapa').setScale();
        // Boton para ir al menu
        
        var botonre = this.add.image(70, 70, 'botonvolver').setScale(0.5)
      .setInteractive()
      .on('pointerover', () => this.add.image(70, 70, 'botonvolver2').setScale(0.5))
      .on('pointerout', () => this.add.image(70, 70, 'botonvolver').setScale(0.5))
      .on('pointerdown', () => this.botonreset())
      // boton para el mapa 1
      var botonmapa1 = this.add.image(350, 360, 'boton_mapa1').setScale(3.5)
      .setInteractive()
      .on('pointerover', () => this.add.image(350, 360, 'boton_mapa1_2').setScale(3.5))
      .on('pointerout', () => this.add.image(350, 360, 'boton_mapa1').setScale(3.5))
      .on('pointerdown', () => this.botonmapa1())
      // boton para el mapa 2
      var botonmapa2 = this.add.image(650, 360, 'boton_mapa2').setScale(3.5)
      .setInteractive()
      .on('pointerover', () => this.add.image(650, 360, 'boton_mapa2_2').setScale(3.5))
      .on('pointerout', () => this.add.image(650, 360, 'boton_mapa2').setScale(3.5))
      .on('pointerdown', () => this.botonmapa2())

      //musica
      musicamapa = this.sound.add("musicamapa");
      musicamapa.play({volume:1, loop:true})
        
    }

    botonreset(){
        this.scene.start('MainMenu');
        musicamapa.stop();
    }

    botonmapa1(){
        this.scene.start('Play1');
        musicamapa.stop();
        
    }

    botonmapa2(){
        this.scene.start('Play2');
        musicamapa.stop();
    }
}