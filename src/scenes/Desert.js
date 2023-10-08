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
export default class Desert extends Phaser.Scene {
  constructor() {
    super("Desert");
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
    const map = this.make.tilemap({ key: "Desert" });
    this.tileWidth = map.tileWidth;
    this.tileHeight = map.tileHeight;

    const layerbackGround = map.addTilesetImage("desertTileset", "Mapdesert");
    const background = map.createLayer("Ground", layerbackGround, 0, 0);
    const layerObstacle = map.addTilesetImage("desertTileset", "Mapdesert");
    const obstacle = map.createLayer("Deco", layerObstacle, 0, 0);



    const objectsLayer = map.getObjectLayer("Objects");
    const top = map.createLayer("Top", layerbackGround, 0, 0);

    

    this.player = new Player(this, 300, 500, "C4", this.velocityPlayer);

    this.playersGroup = this.physics.add.group();
    this.hitbox = new Hitbox(this, this.player);
    this.cameras.main.startFollow(this.player);
    this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
  }

  update() {
    this.player.update();
    this.hitbox.update();
  }
}
