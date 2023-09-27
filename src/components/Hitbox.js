// import Phaser from "phaser";
// import Enemies from "../components/Enemies";
// import Player from "./Player";

// export default class Hitbox extends Phaser.GameObjects.Rectangle {
//     constructor(scene, x, y, w, h) {
//       super(scene, x, y, w, h);
//       scene.add.existing(this);
//       scene.physics.add.existing(this);
//       this.body.setImmovable(true);
//       this.body.allowGravity = false;

//       this.KeySave= null;
//       this.facingDirection = null;

//     }

//     attack(scene) {
//         let hitboxX = this.x;
//         let hitboxY = this.y;
//         let width, height;
        
//         switch (this.facingDirection) {
//           case "left":
//             width = 150
//             height = 200
//             hitboxX -= 180; // Adjust as needed
//             break;
//           case "right":
//             width = 150
//             height = 200
//             hitboxX += 180; // Adjust as needed
//             break;
//           case "up":
//             width = 212
//             height = 150
//             hitboxY -= 180; // Adjust as needed
//             break;
//           case "down":
//             width = 212
//             height = 150
//             hitboxY += 180; // Adjust as needed
//             break;
//       }
  
//       const hitbox = this.scene.add.rectangle(hitboxX, hitboxY, width, height);
//       this.scene.physics.add.existing(hitbox);
//       this.scene.physics.world.enable(hitbox);
  
//       setTimeout(() => {
//         hitbox.destroy();
//       }, 100);
  
//       // scene.physics.world.overlap(hitbox, scene.squirrelsGroup.getChildren(), (hitbox, enemy) => {
//       //   if (enemy instanceof Enemies) {
//       //     enemy.takeDamage(this.damageAmount);
//       //   }
//       // });
  
//     }
// }