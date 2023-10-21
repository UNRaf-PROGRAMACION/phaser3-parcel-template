import Phaser from "phaser";
import events from "./EventCenter";
import Player from "../components/Player";
import Enemies from "../components/CobraEnemy";
import Hitbox from "../components/AttackHitbox";
import Npc from "../components/Npc";

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
    this.enemyCobraHp;
    this.velocityCobra;
    this.cobras = [];
  }

  init(data) {
    console.log("🚀 ~ file: Desert.js:26 ~ Desert ~ init ~ data:", data);

    this.lvl = data.lvl;
    this.hp = data.hp;
    this.experience = data.experience || 0;
    this.velocityPlayer = data.velocityPlayer;
    this.velocityCobra = data.velocityCobra || 350;
    this.enemyCobraHp = data.enemyCobrahp || 200;
    this.damageAmount = data.damageAmount;
    this.missionComplete = data.missionComplete;
    this.squirrelsKilled = data.squirrelsKilled;
    this.cobrasKilled = data.cobrasKilled || 0;
    this.initialX = 500;
    this.initialY = 900;
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

    this.collectible = this.physics.add.group();
    this.collectible.allowGravity = false;

    objectsLayer.objects.forEach((objData) => {
      const { x = 0, y = 0, name } = objData;

      switch (name) {
        case "recolectable": {
          let collectible1 = this.collectible
            .create(x, y, "Gear")
            .setScale(1)
            .setSize(200, 200);
          collectible1.anims.play("gear-anim", true);

          break;
        }
      }
    });
    this.player = new Player(this, 3548, 1700, "C4", this.velocityPlayer);
    const top = map.createLayer("Top", layerbackGround, 0, 0);
    obstacle.setCollisionByProperty({ colision: true });
    this.playersGroup = this.physics.add.group();
    this.hitbox = new Hitbox(this, this.player);
    this.cameras.main.startFollow(this.player);
    this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    this.physics.add.collider(this.player, obstacle);
    this.salidaDesierto = this.physics.add.group();
    this.salidaDesierto.allowGravity = false;
    objectsLayer.objects.forEach((objData) => {
      //console.log(objData.name, objData.type, objData.x, objData.y);
      const { x = 0, y = 0, name } = objData;

      switch (name) {
        case "ciudad": {
          // add star to scene
          // console.log("estrella agregada: ", x, y);
          let salida = this.salidaDesierto
            .create(x, y, "ArrowDown")
            .setScale(1)
            .setSize(200, 200)
            .setVisible(true);

          break;
        }
      }
    });

    this.fox = new Npc(this, 3548, 150, "Fox");
    this.physics.add.overlap(
      this.player,
      this.salidaDesierto,
      this.backCity,
      null,
      this
    );
    this.physics.add.overlap(this.player, this.fox, this.mision2, null, this);
    this.cobrasKilledText = this.add.text(1150, 60, "Cobras Killed", {
      fontSize: "50px",
      fontFamily: "Roboto Mono",
    });
    this.cobrasKilledText.setVisible(false);
    this.cobrasKilledText.setActive(false);
    this.cobrasKilledText.setScrollFactor(0);
    this.ObjectRecolectedText = this.add.text(1150, 160, "Objects collected", {
      fontSize: "50px",
      fontFamily: "Roboto Mono",
    });
    this.ObjectRecolectedText.setVisible(false);
    this.ObjectRecolectedText.setActive(false);
    this.ObjectRecolectedText.setScrollFactor(0);
    this.rectangle = this.add.image(900, 900, "rectangle");
    this.mision2Text = this.add
      .text(
        60,
        800,
        "Hola C4, matame a las cobras, recolectá sus partes y despues volvé",
        {
          fontSize: "40px",
          fontFamily: "Roboto Mono",
          color: "FFFF00",
        }
      )
      .setInteractive();
    this.rectangle.setScrollFactor(0);
    this.rectangle.setVisible(false);
    this.mision2Text.setVisible(false);
    this.mision2Text.setActive(false);
    this.mision2Text.setScrollFactor(0);
    this.input.keyboard.on("keydown-SPACE", () => {
      // This code will be executed when the spacebar is pressed
      this.mision2Text.setVisible(false);
      this.rectangle.setVisible(false);
    });

    for (let i = 0; i < 6; i++) {
      const cobra = new Enemies(
        this,
        this.initialX,
        this.initialY,
        "Cobra",
        this.velocityCobra
      );
      this.cobras.push(cobra);
    }
    this.cobraGroup = this.physics.add.group();
    this.physics.add.overlap(
      this.hitbox,
      this.cobras,
      this.playerHitEnemy,
      null,
      this
    );
  }

  update() {
    this.player.update();
    this.hitbox.update();
    for (let i = 0; i < this.cobras.length; i++) {
      const cobra = this.cobras[i];
      cobra.update();
      if (!cobra.active) continue;
      cobra.body.setSize(200, 200);
      const distanceToPlayer = Phaser.Math.Distance.Between(
        cobra.x,
        cobra.y,
        this.player.x,
        this.player.y
      );
      if (distanceToPlayer < 300) {
        if (cobra.timeToBite <= 0) {
          this.bite(this.player, cobra);
          cobra.timeToBite = 100;
        }
        cobra.timeToBite -= 1;

        this.cobras[i] = cobra;
      }
    }
  }

  bite(player, cobra) {
    const directionX = player.x - cobra.x;
    const directionY = player.y - cobra.y;
    const length = Math.sqrt(directionX * directionX + directionY * directionY);
    const velocityX = (directionX / length) * this.velocityCobra;
    const velocityY = (directionY / length) * this.velocityCobra;

    cobra.stopMovement();

    setTimeout(() => {
      cobra.resumeMovement();
    }, 500);

    if (Math.abs(velocityX) < Math.abs(velocityY)) {
      if (velocityY < 0) {
        cobra.anims.play("AttackUpCobra", true);
      } else {
        cobra.anims.play("AttackDownCobra", true);
      }
    } else {
      if (velocityX < 0) {
        cobra.anims.play("AttackLeftCobra", true);
      } else {
        cobra.anims.play("AttackRightCobra", true);
      }
    }
    this.hp = this.hp - 15;
    events.emit("UpdateHP", { hp: this.hp });
  }

  playerHitEnemy(hitbox, cobra) {
    if (cobra.active && hitbox.active) {
      cobra.takeDamage(this.hitbox.damageAmount);
      cobra.anims.play("Damage", true);
    }
  }
  takeDamage(damageAmount, cobra) {
    this.enemyCobraHp -= damageAmount;
    console.log("daño");
    if (this.enemyCobraHp <= 0) {
      cobra.setActive(false).setVisible(false);
      cobra.anims.stop();
    }
  }
  backCity() {
    const data = {
      lvl: this.lvl,
      hp: this.hp,
      damageAmount: this.damageAmount,
      velocityPlayer: this.velocityPlayer,
      x: 100,
      y: 100,
      missionComplete: this.missionComplete,
      squirrelsKilled: this.squirrelsKilled,
    };

    this.scene.start("City", data);
  }
  mision2(player, fox) {
    this.cobrasKilledText.setVisible(true);
    this.cobrasKilledText.setActive(true);
    this.ObjectRecolectedText.setVisible(true);
    this.ObjectRecolectedText.setActive(true);
    this.mision2Text.setVisible(true);
    this.rectangle.setVisible(true);
  }
}
