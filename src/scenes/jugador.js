class Jugador extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture , turno){
        super(scene, x, y, texture, turno)

        scene.add.existing(this);
        scene.physics.add.existing(this)

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

          this.setCircle(50, 40, 40);
          this.anims.play("run");

 
        }
// or en if ( == || ==)
    }

    update(scene, texture){

        this.setVelocityX(100);

        if ( scene.cursors.up.isDown && this.body.blocked.down && texture === 'dude') {
            this.setVelocityY(-520);
            this.setVelocityX(200);
            this.anims.play("jump");
            scene.isJumping = true;
            }else {
                if (scene.isJumping && this.body.blocked.down && texture === 'dude') {
                  this.anims.play("run");
                  this.setVelocityX(100);
                  scene.isJumping = false;
                }        
            }
    }

 /*     saltar(scene,texture){
        if (scene.cursors.up.isDown && this.body.blocked.down && texture === 'dude') {
        this.setVelocityY(-520);
        this.setVelocityX(200);
        this.anims.play("jump");
        scene.isJumping = true;
        }else {
            if (scene.isJumping && this.body.blocked.down && texture === 'dude') {
              this.anims.play("run");
              this.setVelocityX(100);
              scene.isJumping = false;
            }        
        } 
    }       */
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
