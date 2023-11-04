import Phaser from "phaser";
import events from "./EventCenter";
import Player from "../components/Player";
import Enemies from "../components/SquirrelEnemy";
import Hitbox from "../components/AttackHitbox";
import Npc from "../components/Npc";
import Rock from "../components/Rock";
import { FETCHED, FETCHING, READY, TODO } from "../enums/status";
import { getPhrase } from "../services/translations";
import keys from "../enums/keys";
import BearEnemy from "../components/BossEnemy";

export default class BossArena extends Phaser.Scene {
    #wasChangedLanguage = TODO;
    constructor() {
      super("BossArena");
      const { squirrelsKill } = keys.Enemy;
      this.lvl;
    this.hp;
    this.maxHp;
    this.exp, this.player;
    this.velocityPlayer;
    this.damageAmount;
   this.missionComplete;
    this.inAttackRange = false;
    this.Bossvelocity;
    }
    init(data){
        this.playerX = data.x || 200;
        this.playerY = data.y || 100;
        this.velocityPlayer = data.velocityPlayer;
        this.lvl = data.lvl;
        this.hp = data.hp;
        this.maxHp = data.maxHp;
        this.exp = data.exp || 0;
        this.missionComplete = data.missionComplete || false;
        this.damageAmount = data.damageAmount || 100;
        this.Bossvelocity=200
        this.initialX = 1500;
        this.initialY = 900;
        this.velocityBoulder = data.velocityBoulder || 900;
    }
 create(){
    const map = this.make.tilemap({ key: "BossArena" });

    const layerbackGround = map.addTilesetImage("BossAreaTileset", "BossAreaTileset");
    const background = map.createLayer("Ground", layerbackGround, 0, 0);
    const layerObstacle = map.addTilesetImage("BossAreaTileset", "BossAreaTileset");
    const obstacle = map.createLayer("Deco", layerObstacle, 0, 0);
    const objectsLayer = map.getObjectLayer("Objects");
    this.BackCity = this.physics.add.group();
    this.BackCity.allowGravity = false;
    objectsLayer.objects.forEach((objData) => {
        //console.log(objData.name, objData.type, objData.x, objData.y);
        const { x = 0, y = 0, name } = objData;
  
        switch (name) {
          case "backcity": {
            // add star to scene
            // console.log("estrella agregada: ", x, y);
            let BackCity = this.BackCity
              .create(x, y, "ArrowUp")
              .setScale(1)
              .setSize(200, 200)
              .setVisible(true);
  
            break;
          }
        }
      });
      this.player = new Player(this, 500, 500, "C4", this.velocityPlayer);
      this.playersGroup = this.physics.add.group();
      this.hitbox = new Hitbox(this, this.player);
      this.cameras.main.startFollow(this.player);
      this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
      this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
      obstacle.setCollisionByProperty({ colision: true });
      this.physics.add.collider(this.player, obstacle);
      this.boss=new BearEnemy(this, this.initialX,this.initialY, "Boss", this.Bossvelocity)
      this.createBoulder();
 }
 update(){
    this.player.update();
    this.hitbox.update();
    this.boss.update();
    const boss = this.boss
    const distanceToPlayer = Phaser.Math.Distance.Between(
        boss.x,
        boss.y,
        this.player.x,
        this.player.y
      );
      if (distanceToPlayer < 600) {
        if (boss.timeToThrowBoulder <= 0) {
          this.ThrowBoulder(this.player, boss);
          boss.timeToThrowBoulder = 80;
        }
        boss.timeToThrowBoulder -= 1;
        this.boss= boss

 }
}
createBoulder() {
    this.BoulderGroup = this.physics.add.group({
      inmovable: true,
      allowGravity: false,
    });

    this.BoulderGroup.createMultiple({
      classType: Phaser.Physics.Arcade.Sprite,
      key: "Boulder",
      frame: 0,
      visible: false,
      active: false,
      repeat: 50,
      setXY: {
        x: 0,
        y: 0,
      },
    });
    this.BoulderGroup.children.entries.forEach((bullet) => {
      bullet.setCollideWorldBounds(true);
      bullet.body.onWorldBounds = true;
      bullet.body.world.on(
        "worldbounds",
        function (body) {
          if (body.gameObject === this) {
            this.setActive(false);
            this.setVisible(false);
          }
        },
        bullet
      );
    });

  }
ThrowBoulder(player,boss){
    const directionX = player.x - boss.x;
    const directionY = player.y - boss.y;
    const length = Math.sqrt(directionX * directionX + directionY * directionY);
    const velocityX = (directionX / length) * this.velocityBoulder;
    const velocityY = (directionY / length) * this.velocityBoulder;

    boss.stopMovement();

    setTimeout(() => {
      boss.resumeMovement();
    }, 500);
    setTimeout(() => {
        Boulder.destroy(true);
      }, 2000);

    if (Math.abs(velocityX) < Math.abs(velocityY)) {
      if (velocityY < 0) {
        boss.anims.play("AttackUpBear", true);
      } else {
        boss.anims.play("AttackDownBear", true);
      }
    } else {
      if (velocityX < 0) {
        boss.anims.play("AttackLeftBear", true);
      } else {
        boss.anims.play("AttackRightBear", true);
      }
    }
    const Boulder = this.BoulderGroup.get(boss.x, boss.y);
    if (Boulder) {
      Boulder.setActive(true);
      Boulder.setVisible(true);
      console.log("vel piedra", velocityX);
      this.physics.moveTo(Boulder, player.x, player.y, Math.abs(velocityX), Math.abs(velocityY));
    }


}

}