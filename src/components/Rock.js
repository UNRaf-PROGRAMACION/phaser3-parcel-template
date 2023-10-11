import Phaser from "phaser"
export default class Rock extends Phaser.GameObjects.Sprite {
    constructor(scene,x , y, texture,velocity) {
      super(scene,x, y,texture);
      scene.add.existing(this);
      scene.physics.add.existing(this);
      this.body.allowGravity = false;
      this.scene=scene 
      
      this.setScale(1); 
      this.velocity = 700;
      scene.physics.world.enable(this) // Velocidad de la piedra
      
    }
    setVelocity(x,y) {
        // Configura la velocidad de acuerdo a los valores proporcionados
        // Esto podría variar dependiendo de tu implementación y cómo manejas la física de la piedra en tu juego
        // Puedes usar this.body para acceder al cuerpo físico de la piedra y configurar su velocidad
        this.body.velocity.x = x;
        this.body.velocity.y = y;
      }
    
    
  
    
  }