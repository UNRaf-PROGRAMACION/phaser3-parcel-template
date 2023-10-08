// import Phaser from "phaser";
// // import events from "./EventCenter";
import Player from "../components/Player";
import Enemies from "../components/Enemies";
import Hitbox from "../components/AttackHitbox";
import Npc from "../components/Npc";
import EnemiesHitbox from "../components/EnemiesHitbox";

// //Second unlocked biome, after completing some tasks, unlocks forest
// //holds secret collectibles
// //has fast enemies
// //save station
export default class NothingHere extends Phaser.Scene {
  constructor() {
    super("NothingHere");
    this.lvl;
    this.hp;
    this.experience;
    this.player;
    this.velocityPlayer;
    this.damageAmount;
    this.enemyHp;
  }

  init(data) {
    this.lvl = data.lvl;
    this.hp = data.hp;
    this.experience = data.experience || 0;
    this.velocityPlayer = data.velocityPlayer || 400;
    this.enemyHp = data.enemyhp || 200;
    this.damageAmount = data.damageAmount;
  }

  create() {
    const canvasWidth = this.sys.game.config.width;
    const canvasHeight = this.sys.game.config.height;

    const bgImage = this.add.image(400, 300, "desertTemp");

    bgImage.setScale(
      canvasWidth / bgImage.width,
      canvasHeight / bgImage.height
    );
    bgImage.setPosition(canvasWidth / 2, canvasHeight / 2);

    this.add.text(400, 300, "Here be the desert", {
      fontSize: "128px",
      fontFamily: "impact",
    });

    this.player = new Player(this, 300, 500, "C4", this.velocityPlayer);

    this.playersGroup = this.physics.add.group();
    this.hitbox = new Hitbox(this, this.player);
  }

  update() {
    this.player.update();
    this.hitbox.update();
  }
}
