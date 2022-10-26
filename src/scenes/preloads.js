
export class Preloads extends Phaser.Scene {
  constructor() {
 
    super("Preloads");
  }

  preload() {

    this.load.image("cueva", "assets/images/cueva1.png");
    this.load.image("cueva2", "assets/images/cueva22.png");
    this.load.image("inicio", "assets/images/Ruinas del tiempo.png");
    this.load.image("jugar", "assets/images/jugar.png");
    this.load.image("credito", "assets/images/credi.png");
    this.load.image("creditos", "assets/images/Creditos.png");
    this.load.image("music", "assets/images/sonido.png");
    this.load.image("mute", "assets/images/sin sonido.png");
    this.load.image("music2", "assets/images/sonido2.png");
    this.load.image("mute2", "assets/images/sin sonido2.png");
    this.load.image("volver", "assets/images/retroceso.png");
    this.load.image("dale", "assets/images/Intrucciones.png");
    this.load.image("intro", "assets/images/saltar intro.png");
    this.load.image("dado", "assets/images/dados.png");
    this.load.image("carta", "assets/images/carta.png");
    this.load.image("cartabuena", "assets/images/carta buena.png");
    this.load.image("cartacorrer", "assets/images/carta correr.png");
    this.load.image("completo", "assets/images/JUEGO COMPLETADO.png");
    this.load.image("victoria", "assets/images/vic.png");
    this.load.image("derrota", "assets/images/der.png");
    this.load.image("botone", "assets/images/Boton.png");
    this.load.image("banderaTablero", "assets/images/Victoria tablero.png");
    this.load.image("banderaEsc", "assets/images/Victoria jungla.png");
    this.load.image("roca", "assets/images/PIEDRAS2.png");
    this.load.image("roca2", "assets/images/PIEDRAS3.png");
    this.load.image("snake", "assets/images/snake.png");
    this.load.image("prota", "assets/images/prota.png");
    this.load.image("prota2", "assets/images/prota2.png");
    this.load.spritesheet("dude", "assets/images/spritesheet (5).png", {
      frameWidth: 150,
      frameHeight: 155,
    });

  
    //this.load.audio("theme", "public/assets/sounds/musica.mp3");
    //this.load.audio("theme2", "public/assets/sounds/tablero.mp3");
    //this.load.audio("theme3", "public/assets/sounds/jungla.mp3");

  }

  create() {
    
    this.anims.create({
      key: "run",
      frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 2 }),
      frameRate: 7,
      repeat: -1,
    });
   
    this.anims.create({
      key: "jump",
      frames: [{ key: "dude", frame: 1 }],
      frameRate: 20,
    });
    /*
    let audio = this.sound.add('theme', {loop: true});
    audio.play();
    */
    this.scene.start("Escenario2", {distancia:75, distancia2:75, turno:0, contar:0}
    );
    
  }
  
}
