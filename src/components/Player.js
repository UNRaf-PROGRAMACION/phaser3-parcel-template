// import Phaser from "phaser";

// export default class Player extends Phaser.GameObjects.Sprite {
//   constructor(scene, x, y, texture, velocity) {
//     super(scene, x, y, texture);
//     this.setTexture("C4");
//     scene.add.existing(this);
//     scene.physics.add.existing(this);

//     this.body.allowGravity = false;
//     this.velocity = velocity;
//     this.cursor = scene.input.keyboard.createCursorKeys();

//     this.xKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);

//     this.KeySave= null;
//     this.facingDirection = null;
//   }

    

  

//   update() {
//     if (this.cursor.left.isDown) {
//       this.body.setVelocityX(-this.velocity);
//       this.anims.play("walkingLeft", true);
//       this.KeySave= "left";

//     } else if (this.cursor.right.isDown) {
//       this.body.setVelocityX(this.velocity);
//       this.anims.play("walkingRight", true);
//       this.KeySave= "right";

//     } else if (this.cursor.up.isDown) {
//       this.body.setVelocityY(-this.velocity);
//       this.anims.play("walkingUp", true);
//       this.KeySave= "up";

//     } else if (this.cursor.down.isDown) {
//       this.body.setVelocityY(this.velocity);
//       this.anims.play("walkingDown", true);
//       this.KeySave= "down";

//     } else {
//       this.body.setVelocity(0);
//       this.KeySave= null;
//     }

//     if (this.KeySave !== null) {
//       this.facingDirection = this.KeySave;
//     }

//     if (this.body.velocity.x === 0 && this.body.velocity.y === 0) {
//       switch (this.facingDirection) {
//         case "left":
//           this.anims.play("leftStop");
//           break;
//         case "right":
//           this.anims.play("rightStop");
//           break;
//         case "up":
//           this.anims.play("upStop");
//           break;
//         case "down":
//           this.anims.play("downStop");
//           break;
//         default:
//           this.anims.play("downStop");
//       }
//     }

//     if (this.xKey.isDown && this.facingDirection === "left") {
//       this.anims.play("AttackRight", true);
//     }

//     }

//     attack() {

//     }
//   }
