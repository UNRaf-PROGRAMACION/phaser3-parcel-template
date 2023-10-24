import Phaser from "phaser";
import events from "./EventCenter";
import Player from "../components/Player";
import Enemies2 from "../components/CobraEnemy";
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
    this.maxHp;
    this.exp, this.player;
    this.velocityPlayer;
    this.damageAmount;
    this.enemyCobraHp;
    this.velocityCobra;
    this.objectCollected;
    this.cobras = [];
    this.missionComplete;
  }

  init(data) {

    this.lvl = data.lvl;
    this.hp = data.hp;
    this.maxHp = data.maxHp;
    this.exp = data.exp || 0;
    this.velocityPlayer = data.velocityPlayer;
    this.velocityCobra = data.velocityCobra || 350;
    this.enemyCobraHp = data.enemyCobrahp || 200;
    this.damageAmount = data.damageAmount;
    this.missionComplete = data.missionComplete;
    this.squirrelsKilled = data.squirrelsKilled;
    this.sceneCityActive=data.sceneCityActive;
    this.cobrasKilled = data.cobrasKilled || 0;
    this.initialX = 500;
    this.initialY = 900;
    this.objectCollected = data.objectCollected || 0;
    this.missionComplete=data.missionComplete|| false
    
  }

  create() {
    const map = this.make.tilemap({ key: "Desert" });
    const layerbackGround = map.addTilesetImage("desertTileset", "Mapdesert");
    const background = map.createLayer("Ground", layerbackGround, 0, 0);
    const layerObstacle = map.addTilesetImage("desertTileset", "Mapdesert");

    const obstacle = map.createLayer("Deco", layerObstacle, 0, 0);

    const objectsLayer = map.getObjectLayer("Objects");

    this.CollectibleMision = this.physics.add.group();
    this.CollectibleMision.allowGravity = false;

    objectsLayer.objects.forEach((objData) => {
      const { x = 0, y = 0, name } = objData;

      switch (name) {
        case "recolectable": {
          let CollectibleMision1 = this.CollectibleMision
            .create(x, y, "Gear")
            .setScale(1)
            .setSize(200, 200);
          CollectibleMision1.anims.play("gear-anim", true);

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
    this.objectCollectedText = this.add.text(1150, 160, "Objects collected", {
      fontSize: "50px",
      fontFamily: "Roboto Mono",
    });
    this.objectCollectedText.setVisible(false);
    this.objectCollectedText.setActive(false);
    this.objectCollectedText.setScrollFactor(0);
    this.rectangle = this.add.image(900, 900, "rectangle");
    this.mision2Text = this.add
      .text(
        60,
        800,
        "Hola C4, matame a las cobras, recolectá sus partes y despues volvé para ganar",
        {
          fontSize: "40px",
          fontFamily: "Roboto Mono",
          color: "FFFF00",
        }
      )
      .setInteractive();
    this.mision2Text.setWordWrapWidth(this.rectangle.width);
    this.mensajeAdicional = this.add.text(
      620,
      920,
      "Toca espacio para cerrar este mensaje",
      {
        fontSize: "35px",
        fontFamily: "Roboto Mono",
        color: "000000",
      }
    );
    this.mensajeAdicional.setScrollFactor(0);
    this.mensajeAdicional.setVisible(false);
    this.rectangle.setScrollFactor(0);
    this.rectangle.setVisible(false);
    this.mision2Text.setVisible(false);
    this.mision2Text.setActive(false);
    this.mision2Text.setScrollFactor(0);
    this.mensajeAdicional.setScrollFactor(0);
    this.input.keyboard.on("keydown-SPACE", () => {
      // This code will be executed when the spacebar is pressed
      this.mision2Text.setVisible(false);
      this.rectangle.setVisible(false);
      this.mensajeAdicional.setVisible(false);
    });
    this.cobraGroup = this.physics.add.group();

    for (let i = 0; i < 6; i++) {
      const cobra = new Enemies2(
        this,
        this.initialX,
        this.initialY,
        "Cobra",
        this.velocityCobra
      );
      this.cobras.push(cobra);
    }
   
    this.physics.add.overlap(
      this.hitbox,
      this.cobras,
      this.playerHitEnemy,
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.CollectibleMision,
      this.ObjectCollected,
      null,
      this
    );
   
  }

  update() {
    if (this && this.hp) {
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
  }}

  

  playerHitEnemy(hitbox, cobra) {
    if (cobra.active && hitbox.active) {
      cobra.takeDamage(this.hitbox.damageAmount);
      cobra.anims.play("cobraDamage", true);
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
  ObjectCollected(player, collectible) {
    this.objectCollected = this.objectCollected + 1;
    this.objectCollectedText.setText("Objects collected: " + this.objectCollected +"/4")
      

    collectible.disableBody(true, true);
   
  }
  backCity() {
    const data = {
      lvl: this.lvl,
      hp: this.hp,
      maxHp: this.maxHp,
      exp: this.exp,
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
    this.objectCollectedText.setVisible(true);
    this.objectCollectedText.setActive(true);
    this.mision2Text.setVisible(true);
    this.mensajeAdicional.setVisible(true);
    this.rectangle.setVisible(true);
    if (this.objectCollected >= 3) {
      if (this.cobrasKilled >= 6) {
        for (const c of this.cobras) {
          c.destroy(true, true);
        }
        this.cobras = [];
       this.missionComplete=true
      }
      if(this.missionComplete=true){
        this.scene.launch("GameWin");
        this.scene.pause("Desert");
        this.scene.stop("UI");
        this.mision2Text.setText("");
        this.rectangle.setVisible(false);
        this.mensajeAdicional.setVisible(false);
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
    if (this.hp <= 0) {
      
      this.player.setVisible(false).setActive(false);
      if (cobra && cobra.anims.isPlaying) {
        cobra.anims.pause();
      }

      for (const s of this.cobras) {
        s.destroy(true, true);
      }
      this.cobras = [];
      this.scene.launch("GameEnd");
      this.scene.pause("Desert");
     
    }
  }
}
