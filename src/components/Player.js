import Phaser from "phaser";
import Enemies from "../components/Enemies";
// import Hitbox from "../components/Hitbox";


export default class Player extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, velocity) {
    super(scene, x, y, texture);
    this.setTexture("C4");



    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.scene = scene;
    this.body.allowGravity = false;
    this.velocity = velocity;
    this.cursor = scene.input.keyboard.createCursorKeys();

    this.xKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);

    this.KeySave= null;
    this.facingDirection = null;

    this.damageAmount = 100;

    this.attack(this.scene);

  }

  update() {
    this.hitbox.x = this.x;
    this.hitbox.y = this.y;
    this.body.setVelocity(0);

    if (this.cursor.left.isDown) {
      this.body.setVelocityX(-this.velocity);
      this.anims.play("walkingLeft", true);
      this.KeySave= "left";

    } else if (this.cursor.right.isDown) {
      this.body.setVelocityX(this.velocity);
      this.anims.play("walkingRight", true);
      this.KeySave= "right";

    } else if (this.cursor.space.isDown) {
      this.body.setVelocityY(-this.velocity);
      this.anims.play("walkingUp", true);
      this.KeySave= "up";

    } else if (this.cursor.down.isDown) {
      this.body.setVelocityY(this.velocity);
      this.anims.play("walkingDown", true);
      this.KeySave= "down";
    } 

    if (this.KeySave !== null) {
      this.facingDirection = this.KeySave;
    }

    if (this.body.velocity.x === 0 && this.body.velocity.y === 0) {
      switch (this.facingDirection) {
        case "left":
          this.anims.play("leftStop");
          break;
        case "right":
          this.anims.play("rightStop");
          break;
        case "up":
          this.anims.play("upStop");
          break;
        case "down":
          this.anims.play("downStop");
          break;
        default:
          this.anims.play("downStop");
      }
    }

    if (this.xKey.isDown) {
      switch (this.facingDirection) {
        case "left":
          this.anims.play("AttackLeft");
          this.body.setVelocity(0);
          this.attack();
          break;
        case "right":
          this.anims.play("AttackRight");
          this.body.setVelocity(0);
          this.attack();
          break;
        case "up":
          this.anims.play("AttackUp");
          this.body.setVelocity(0);
          this.attack();
          break;
        case "down":
          this.anims.play("AttackDown");
          this.body.setVelocity(0);
          this.attack();
          break;
        default: 
        this.anims.play("AttackDown");
          this.body.setVelocity(0);
          this.attack();
      }
    }
    }

    attack(scene) {
      let hitboxX = this.x;
      let hitboxY = this.y;
      let width, height;
      
      switch (this.facingDirection) {
        case "left":
          width = 150
          height = 200
          hitboxX -= 180; // Adjust as needed
          break;
        case "right":
          width = 150
          height = 200
          hitboxX += 180; // Adjust as needed
          break;
        case "up":
          width = 212
          height = 150
          hitboxY -= 180; // Adjust as needed
          break;
        case "down":
          width = 212
          height = 150
          hitboxY += 180; // Adjust as needed
          break;
    }
if(this.hitbox){ 
  this.hitbox.setVisible(true);
  // this.hitbox.setSize(width, height).updateDisplayOrigin().updateData();
  this.hitbox.x = hitboxX;
    this.hitbox.y = hitboxY;
    this.hitbox.width = width;
    this.hitbox.height = height;
}
    

    setTimeout(() => {
      this.hitbox.setVisible(false);
    }, 100);

    // scene.physics.world.overlap(hitbox, scene.squirrelsGroup.getChildren(), (hitbox, enemy) => {
    //   if (enemy instanceof Enemies) {
    //     enemy.takeDamage(this.damageAmount);
    //   }
    // });
  }
  }

