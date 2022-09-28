class Jugador {
    constructor(nombre, posicionTablero, posicionEscenario){
        
        this.nombre=nombre;
        this.posicionTablero= posicionTablero;
        this.posicionEscenario=posicionEscenario;
    }

    animaciones(){
        //imagenes
        aa
    }


    saltar(){
   //     if (cursors.up.isDown && player.body.blocked.down) {
   //         player.setVelocityY(-520);
    //        player.setVelocityX(200);
   //         player.anims.play("jump");
   //         isJumping = true;
    }

    correr(){
 //       if (isJumping && player.body.blocked.down) {
 //           player.anims.play("run");
 //           player.setVelocityX(100);
 //           isJumping = false;
 //         }
    }

//    this.anims.create({
//        key: "run",
//        frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 2 }),
//        frameRate: 7,
//        repeat: -1,
//      });
//     
//      this.anims.create({
//        key: "jump",
//        frames: [{ key: "dude", frame: 1 }],
//        frameRate: 20,
//      });


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