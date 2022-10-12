// Clase Preloads, para separar los preloads y tener mejor orden
export class Preloads extends Phaser.Scene {
  // Se extiende de Phaser.Scene porque es una escena
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("Preloads");
  }

  preload() {
    this.load.image("menuinicio", "public/assets/images/inicio.png");
    this.load.image("creditosim", "public/assets/images/creditosim.png");
    this.load.image("controlesim", "public/assets/images/controlesim.png");
    this.load.image('INICIAR', 'public/assets/images/INICIAR.png');
    this.load.image('INICIAR2', 'public/assets/images/INICIAR_2.png');
    this.load.image('controles', 'public/assets/images/controles.png');
    this.load.image('controles2', 'public/assets/images/controles_2.png');
    this.load.image('creditos', 'public/assets/images/creditos.png');
    this.load.image('creditos2', 'public/assets/images/creditos_2.png');
    this.load.image('botonreset', 'public/assets/images/botonreset.png');
    this.load.image('botonreset2', 'public/assets/images/botonreset_2.png');
    this.load.image('botonvolver', 'public/assets/images/botonvolver.png');
    this.load.image('botonvolver2', 'public/assets/images/botonvolver_2.png');
    this.load.image('botonmapa', 'public/assets/images/botonmapa.png');
    this.load.image('botonmapa2', 'public/assets/images/botonmapa_2.png');
    this.load.image('boton_mapa1', 'public/assets/images/boton_mapa1.png');
    this.load.image('boton_mapa1_2', 'public/assets/images/boton_mapa1_2.png');
    this.load.image('boton_mapa2_2', 'public/assets/images/boton_mapa2_2.png');
    this.load.image('boton_mapa2', 'public/assets/images/boton_mapa2.png');
    this.load.image("mapa", "public/assets/images/mapa_de_niveles.png");
    this.load.image("derrota", "public/assets/images/derrota.png")
    this.load.image("victoriaim", "public/assets/images/Victoria.png")
    this.load.image("phaser_logo", "public/assets/images/phaser_logo.png");
    this.load.image("mainmenu_bg", "public/assets/images/inicio.png");
    this.load.image("sky", "public/assets/images/sky.png");
    this.load.image("ground", "public/assets/images/platform.png");
    this.load.image("star", "public/assets/images/star.png");
    this.load.image("bomb", "public/assets/images/bomb.png");
    this.load.spritesheet("dude", "public/assets/images/dude.png", {
      frameWidth: 62,
      frameHeight: 52,
    });
    this.load.audio("musicamenu", "public/assets/audio/musica_menu.mp3")
    this.load.audio("musicanivel1", "public/assets/audio/musica_nivel1.mp3")
    this.load.audio("musicanivel2", "public/assets/audio/musica_nivel2.mp3")
    this.load.audio("musicavictoria", "public/assets/audio/musica_victoria.mp3")
    this.load.audio("musicaderrota", "public/assets/audio/musica_derrota.mp3")
    this.load.audio("musicacontroles", "public/assets/audio/musica_controles.mp3")
    this.load.audio("musicacreditos", "public/assets/audio/musica_creditos.mp3")
    this.load.audio("musicamapa", "public/assets/audio/musica_mapa.mp3")



  }

  create() {
    //  Our player animations, turning, walking left and walking right.
    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("dude", { start: 16, end: 11 }),
      frameRate: 10,
      repeat: -1,
      
    });

    this.anims.create({
      key: "UP",
      frames: this.anims.generateFrameNumbers("dude", { start: 9, end: 12 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "turn",
      frames: [{ key: "dude", frame: 0 }],
      frameRate: 20,
    });

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("dude", { start: 1, end: 6  }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "UP",
      frames: this.anims.generateFrameNumbers("dude", { start: 9, end: 12 }),
      frameRate: 10,
      repeat: -1,
    });

    // Pasa directamente a la escena del menú principal
    this.scene.start("MainMenu");
  }
}
