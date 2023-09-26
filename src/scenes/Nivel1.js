import Phaser from "phaser";

export default class Nivel1 extends Phaser.Scene {
  constructor() {
    super("Nivel1");
  }

  create() {
    // Agrega el fondo al juego
    this.add.image(0, 0, 'FondoJuego').setOrigin(0, 0);
  
    // Crea al personaje principal como un sprite utilizando la imagen 'PersonajePrincipal'
      // Crea al personaje principal como un sprite utilizando la imagen 'PersonajePrincipal'
  this.personaje = this.physics.add.sprite(400, 200, 'PersonajePrincipal').setScale(0.1);

  // Configura las colisiones con los bordes del mundo
  this.personaje.setCollideWorldBounds(true);

  // Obtiene las dimensiones originales del sprite

  // Define las nuevas dimensiones de la hitbox (la mitad del tamaño original

  // Ajusta la hitbox del personaje principal
  this.personaje.setSize(300,400);
  
    // Crea la figura geométrica que causará Game Over como un sprite utilizando la imagen 'Alien'
    this.figura = this.physics.add.sprite(400, 300, 'Alien').setScale(0.03);
  
    // Configura las colisiones con la figura geométrica
    this.physics.add.collider(this.personaje, this.figura, this.colisionConFigura, null, this);
  
    // Configura las teclas de flecha para mover al personaje
    this.cursors = this.input.keyboard.createCursorKeys();
  
    // Configura la cámara para seguir al personaje
    this.cameras.main.startFollow(this.personaje);
  
    // Aumenta el zoom al 300%
    this.cameras.main.setZoom(3); // 3 veces el tamaño original
  }

  update() {
    // Mueve al personaje con las teclas de flecha
    if (this.cursors.left.isDown) {
      this.personaje.setVelocityX(-200);
    } else if (this.cursors.right.isDown) {
      this.personaje.setVelocityX(200);
    } else {
      this.personaje.setVelocityX(0);
    }

    if (this.cursors.up.isDown) {
      this.personaje.setVelocityY(-200);
    } else if (this.cursors.down.isDown) {
      this.personaje.setVelocityY(200);
    } else {
      this.personaje.setVelocityY(0);
    }
  }

  colisionConFigura() {
    // Cambiar a la escena de Game Over
    this.scene.start('GameOver');
  }
}