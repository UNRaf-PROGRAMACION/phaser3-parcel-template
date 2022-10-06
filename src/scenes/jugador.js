
class Jugador {
    constructor(nombre, posicionTablero, posicionEscenario, player){
        
        this.nombre=nombre;
        this.posicionTablero= posicionTablero;
        this.posicionEscenario=posicionEscenario;
        this.player= player;
    }

    animaciones(){

        this.load.spritesheet("dude", "public/assets/images/spritesheet (5).png", {
            frameWidth: 150,
            frameHeight: 155,
        });

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
    
    
    
    
    
    
    
    }


    saltar(){
        if (cursors.up.isDown && this.player.body.blocked.down) {
        this.player.setVelocityY(-520);
        this.player.setVelocityX(200);
        this.player.anims.play("jump");
        this.isJumping = true;
        }
    }

    correr(){
       if (this.isJumping && this.player.body.blocked.down) {
            this.player.anims.play("run");
            this.player.setVelocityX(100);
            this.isJumping = false;
        }
    }




    perderVida(){

    }

}
// hitSnake(player,snake) {
//  snake.destroy();
//  count = count + 1;
    
 //   this.physics.pause();

//    player.setTint(0xff0000);
  
//    player.anims.play("jump");
//}
export default Jugador;
