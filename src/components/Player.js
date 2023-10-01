import Phaser from "phaser";
import Enemies from "../components/Enemies";
import Hitbox from "../components/Hitbox";


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



  }

  update() {

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

    if (this.body.velocity.x === 0 && this.body.velocity.y === 0 && this.xKey.isDown === null) {
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
          break;
        case "right":
          this.anims.play("AttackRight");
          this.body.setVelocity(0);
          break;
        case "up":
          this.anims.play("AttackUp");
          this.body.setVelocity(0);
          break;
        case "down":
          this.anims.play("AttackDown");
          this.body.setVelocity(0);
          break;
        default: 
        this.anims.play("AttackDown");
          this.body.setVelocity(0);
      }
    }
    }
  }

