class Jugador extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture , turno){
        super(scene, x, y, texture, turno)

        scene.add.existing(this);

        if (texture === "dude") {

          scene.player.setCircle(50, 40, 40);
          
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

     saltar(scene,texture){
        if (scene.cursors.up.isDown && scene.player.body.blocked.down && texture === 'dude') {
        scene.player.setVelocityY(-520);
        scene.player.setVelocityX(200);
        scene.player.anims.play("jump");
        scene.isJumping = true;
        }
    }

    correr(scene,texture){
       if (scene.isJumping && scene.player.body.blocked.down && texture === 'dude') {
            scene.player.anims.play("run");
            scene.player.setVelocityX(100);
            scene.isJumping = false;
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
