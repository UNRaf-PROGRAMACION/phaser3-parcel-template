import Phaser from "phaser";

export default class Player extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, velocity) {
    super(scene, x, y, texture);
    this.setTexture("C4");
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.body.allowGravity = false;
    this.velocity = velocity;
    this.cursor = scene.input.keyboard.createCursorKeys();
  }

  update() {
    if (this.cursor.left.isDown) {
      this.body.setVelocityX(-this.velocity);
      this.anims.play("caminataIzquierda", true);
    } else if (this.cursor.right.isDown) {
      this.body.setVelocityX(this.velocity);
      this.anims.play("caminataDerecha", true);
    } else if (this.cursor.up.isDown) {
      this.body.setVelocityY(-this.velocity);
      this.anims.play("caminataArriba", true);
    } else if (this.cursor.down.isDown) {
      this.body.setVelocityY(this.velocity);
      this.anims.play("caminataAbajo", true);
    } else {
      this.body.setVelocity(0);
      this.anims.play("quietoAbajo");
    }
  }
}
//     if (this.cursor.left.isDown) {
//       this.body.setVelocityX(-this.velocity);
//       this.anims.play("caminataIzquierda");
//     } else {
//       this.body.setVelocityX(0);
//       this.anims.play("quietoIzquierda");
//     }
//     if(this.cursor.right.isDown){
//         this.body.setVelocityX(this.velocity)
//         this.anims.play("caminataDerecha")
//     }else{
//         this.body.setVelocityX(0);
//         this.anims.play("quietoDerecha");

//     }
//     if(this.cursor.down.isDown){
//         this.body.setVelocityY(this.velocity)
//         this.anims.play("caminataIzquierda")
//     }else{
//         this.body.setVelocityY(0)
//         this.anims.play("quietoAbajo")
//     }
//     if(this.cursor.up.isDown){
//         this.body.setVelocityY(-this.velocity);
//         this.anims.play("caminataArriba");
//     }else{
//         this.body.setVelocityY(0);
//         this.anims.play("quietoArriba");
//     }
//   }
