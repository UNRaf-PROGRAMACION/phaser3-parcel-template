class Jugador extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture , turno){
        super(scene, x, y, texture, turno)

        scene.add.existing(this);
/*
        if (turno===0) {
            this.cameras.main.startFollow(this.player, true, 0.08, 0.08);
            this.player.setScale(1.1);
          }
    
          if (turno===1) {
            this.cameras.main.startFollow(this.player2, true, 0.08, 0.08);
            this.player2.setScale(1.1);
          }
*/
        if (texture === "dude") {
            
            this.texture, {
                frameWidth: 150,
                frameHeight: 155,
            };
    
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
// or en if ( == || ==)

    }

    animaciones(){

        
    
    
    
    
    
    
    
    }


    /* saltar(){
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
    } */




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
