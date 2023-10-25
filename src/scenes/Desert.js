import Phaser from "phaser";
import events from "./EventCenter";
import Player from "../components/Player";
import Enemies2 from "../components/CobraEnemy";
import Hitbox from "../components/AttackHitbox";
import Npc from "../components/Npc";
import { FETCHED, FETCHING, READY, TODO } from "../enums/status";
import { getPhrase } from "../services/translations";
import keys from "../enums/keys";

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
    this.missionComplete;
    this.inAttackRange = false;
    this.cobras = [];
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
    this.sceneCityActive = data.sceneCityActive;
    this.cobrasKilled = data.cobrasKilled || 0;
    this.playerX = data.x || 3548;
    this.playerY = data.y || 1700;
    this.initialX = 500;
    this.initialY = 900;
    this.objectCollected = data.objectCollected || 0;
    this.missionComplete = data.missionComplete|| false
    
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
    this.createBites();
    this.Collectible = this.physics.add.group();
    this.Collectible.allowGravity = false;
    objectsLayer.objects.forEach((objData) => {
      const { x = 0, y = 0, name } = objData;

      switch (name) {
        case "recolectable": {
          let CollectibleMision1 = this.CollectibleMision.create(x, y, "Gear")
            .setScale(1)
            .setSize(200, 200);
          CollectibleMision1.anims.play("gear-anim", true);

          break;
        }
        case "cura": {
          let collectible1 = this.Collectible.create(x, y, "cura")
            .setScale(1)
            .setSize(200, 200);
          collectible1.anims.play("cura-anim", true);

          break;
        }
      }
    });
    this.player = new Player(this, this.playerX, this.playerY, "C4", this.velocityPlayer);
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
    this.physics.add.collider(
      this.player,
      this.biteGroup,
      this.damage,
      null,
      this
    );
    this.DesignUI2 = this.add.image(1700,105,"UIRectangle");
    this.DesignUI2.scaleX = 2.2;
    this.DesignUI2.scaleY = 1.1;
    this.DesignUI2.setVisible(false);
    this.DesignUI2.setScrollFactor(0);
    this.physics.add.overlap(this.player, this.fox, this.mision2, null, this);
    this.cobrasKilledText = this.add.text(1350, 30, "Cobras Killed", {
      fontSize: "50px",
      fontFamily: "Roboto Mono",
    });
    this.cobrasKilledText.setVisible(false);
    this.cobrasKilledText.setActive(false);
    this.cobrasKilledText.setScrollFactor(0);
    this.objectCollectedText = this.add.text(1350, 130, "Objects collected", {
      fontSize: "50px",
      fontFamily: "Roboto Mono",
    });
    this.objectCollectedText.setVisible(false);
    this.objectCollectedText.setActive(false);
    this.objectCollectedText.setScrollFactor(0);
    this.rectangle = this.add.image(957, 900, "rectangle");
    this.mision2Text = this.add
      .text(
        60,
        800,
        "C4, te estaba esperando. Nos han robado partes de un arma que estamos construyendo. Ve a recuperarlas y ten cuidado.",
        {
          fontSize: "40px",
          fontFamily: "Roboto Mono",
          color: "FFFF00",
        }
      )
      .setInteractive();
      this.rectangle.scaleX=1.1
    this.mision2Text.setWordWrapWidth(this.rectangle.width);
    this.mensajeAdicional = this.add.text( 
      690,
      950,
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
    this.physics.add.overlap(
      this.player,
      this.Collectible,
      this.heal,
      null,
      this
    );
  }

  update() {
    this.player.update();
    this.hitbox.update();

    this.inAttackRange = false;
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
      if (distanceToPlayer < 250) {
        if (cobra.timeToBite <= 0) {
          this.bite(this.player, cobra);
          cobra.timeToBite = 100;
        }
        cobra.timeToBite -= 1;

        this.cobras[i] = cobra;

      }
    }
  }

  

  playerHitEnemy(hitbox, cobra) {
    if (cobra.active && hitbox.active) {
      cobra.takeDamage(this.hitbox.damageAmount);
      cobra.anims.play("cobraDamage", true);
    }
  }
  
  takeDamage(damageAmount, biting, cobra) {
    this.enemyCobraHp -= damageAmount;
    console.log("daño");
    if (this.enemyCobraHp <= 0) {
      cobra.setActive(false).setVisible(false);
      cobra.anims.stop();
    }
  }
  ObjectCollected(player, collectible) {
    this.objectCollected = this.objectCollected + 1;
    this.objectCollectedText.setText(
      "Objects collected: " + this.objectCollected + "/4"
    );

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
      x: 30,
      y: 300,
      missionComplete: this.missionComplete,
      squirrelsKilled: this.squirrelsKilled,
    };
    for (const c of this.cobras) {
      c.destroy(true, true);
    }
    this.cobras = [];

      this.scene.start("City", data);

  }
  mision2(player, fox) {
    this.cobrasKilledText.setVisible(true);
    this.cobrasKilledText.setActive(true);
    this.objectCollectedText.setVisible(true);
    this.objectCollectedText.setActive(true);
    this.DesignUI2.setVisible(true);
    this.mision2Text.setVisible(true);
    this.mensajeAdicional.setVisible(true);
    this.rectangle.setVisible(true);
    if (this.objectCollected >= 3) {
      if (this.cobrasKilled >= 6) {
        for (const c of this.cobras) {
          c.destroy(true, true);
        }
        this.cobras = [];
        this.missionComplete = true;
      }
      if ((this.missionComplete = true)) {
        this.scene.launch("GameWin");
        this.scene.pause("Desert");
        this.scene.stop("UI");
        this.mision2Text.setText("");
        this.rectangle.setVisible(false);
        this.mensajeAdicional.setVisible(false);
      }
    }
  }

  createBites() {
    this.biteGroup = this.physics.add.group({
      inmovable: true,
      allowGravity: false,
    });

    this.biteGroup.createMultiple({
      classType: Phaser.Physics.Arcade.Sprite,
      key: "BigBite",
      frame: 0,
      visible: false,
      active: false,
      repeat: 50,
      setXY: {
        x: 0,
        y: 0,
      },
    });
    this.biteGroup.children.entries.forEach((bullet) => {
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

    setTimeout(() => {
      biting.destroy(true);
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

    let biting = this.biteGroup.get(cobra.x, cobra.y);
    if (biting) {
      biting.setActive(true);
      biting.setVisible(true);
      console.log("vel piedra", velocityX);
      this.physics.moveTo(biting, player.x, player.y, Math.abs(velocityX));
    }

  }
  damage(player, biting ,cobra){
      this.hp = this.hp - 15
      events.emit("UpdateHP", { hp: this.hp });
      this.scene.get("UI").updateHealthBar();
      biting.destroy(true);
      biting.setVisible(false);

    if (this.hp <= 0) {
    
      this.player.setVisible(false).setActive(false);


      for (const c of this.cobras) {
        c.destroy(true, true);
      }
      this.cobras = [];
      this.scene.launch("GameEnd", { fromScene: "Desert" });
      this.scene.pause("Desert");
      
    }
  }
  
  heal(player, Collectible) {
    if (this.hp < this.maxHp) {
      this.hp = this.hp + 50;

      if (this.hp > this.maxHp) {
        this.hp = this.maxHp;
      }
      events.emit("UpdateHP", { hp: this.hp });
      Collectible.disableBody(true, true);
    }
  }
}

