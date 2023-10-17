import Phaser from "phaser";
import EasyStar from "easystarjs";
import events from "./EventCenter";
import Player from "../components/Player";
import Enemies from "../components/Enemies";
import Hitbox from "../components/AttackHitbox";
import Npc from "../components/Npc";
import EnemiesHitbox from "../components/EnemiesHitbox";
import Rock from "../components/Rock";
import { FETCHED, FETCHING, READY, TODO } from "../enums/status";
import { getPhrase } from "../services/translations";
import keys from "../enums/keys";

//  Main biome, player starts the game here and after completing some tasks unlocks the desert
//  Has pathway to forest
//  holds some secret collectibles
//  Can access bossArena
//  Resistence camp with npcs are here
//  Has normal enemies
//  save station
export default class City extends Phaser.Scene {
  #wasChangedLanguage = TODO;
  constructor() {
    super("City");
    const { squirrelsKill } = keys.Enemy;
    this.deadSquirrel = squirrelsKill;
    this.lvl;
    this.hp;
    this.experience;
    this.player;
    this.velocityPlayer;
    this.squirrels = [];

    this.squirrelsKilled;
    this.squirrelsKilledText;
    this.damageAmount;
    this.enemyHp;
  }

  init(data) {
    this.lvl = data.lvl || 1;
    this.hp = data.hp || 200;
    this.experience = data.experience || 0;
    this.velocityPlayer = data.velocityPlayer || 700;
    this.velocitySquirrel = data.velocitySquirrel || 100;
    this.enemyHp = data.enemyhp || 2000;
    this.damageAmount = data.damageAmount || 0;
    this.squirrelsKilled = data.squirrelsKilled || 0;
    this.missionComplete = false;
  }

  create() {
    const map = this.make.tilemap({ key: "City" });
    this.tileWidth = map.tileWidth;
    this.tileHeight = map.tileHeight;

    const layerbackGround = map.addTilesetImage("TDJ2 - tileset", "Mapcity");
    const background = map.createLayer("Ground", layerbackGround, 0, 0);
    const layerObstacle = map.addTilesetImage("TDJ2 - tileset", "Mapcity");
    const obstacle = map.createLayer("Deco", layerObstacle, 0, 0);

    this.easystar = new EasyStar.js();
    this.easystar.setGrid(this.makeGrid(map, background, obstacle));
    this.easystar.setAcceptableTiles([0]);

    const objectsLayer = map.getObjectLayer("Objects");
    this.collectible = this.physics.add.group();
    this.collectible.allowGravity = false;
    this.salida = this.physics.add.group();
    this.salida.allowGravity = false;

    objectsLayer.objects.forEach((objData) => {
      //console.log(objData.name, objData.type, objData.x, objData.y);
      const { x = 0, y = 0, name } = objData;

      switch (name) {
        case "cura": {
          // add star to scene
          // console.log("estrella agregada: ", x, y);
          let collectible1 = this.collectible
            .create(x, y, "cura")
            .setScale(1)
            .setSize(200, 200);
          collectible1.anims.play("cura-anim", true);

          break;
        }

        case "desierto": {
          // add star to scene
          // console.log("estrella agregada: ", x, y);
          let salida = this.salida
            .create(x, y, "FlechaSalida")
            .setScale(1)
            .setSize(200, 200)
            .setVisible(false)
            .setActive(false);
          break;
        }
      }
    });

    this.player = new Player(this, 4100, 1900, "C4", this.velocityPlayer);
    const top = map.createLayer("Top", layerbackGround, 0, 0);

    this.playersGroup = this.physics.add.group();
    this.collectibleGroup = this.physics.add.group();
    this.squirrelGroup = this.physics.add.group();

    this.createRocks();
    this.attackSound = this.sound.add("swordAttack", { volume: 0.5 });

    this.hitbox = new Hitbox(this, this.player);

    this.Eagle = new Npc(this, 4550, 3290, "Eagle");

    this.squirrels.push(
      new Enemies(this, 500, 50, "Squirrel", this.velocitySquirrel)
    );
    this.squirrels.push(
      new Enemies(this, 500, 550, "Squirrel", this.velocitySquirrel)
    );
    this.squirrels.push(
      new Enemies(this, 500, 1050, "Squirrel", this.velocitySquirrel)
    );
    this.squirrels.push(
      new Enemies(this, 500, 1550, "Squirrel", this.velocitySquirrel)
    );

    //this.hitboxSquirrels = new EnemiesHitbox(this, this.squirrels[0]);
    //this.hitboxSquirrels1 = new EnemiesHitbox(this, this.squirrels[1]);
    //this.hitboxSquirrels2 = new EnemiesHitbox(this, this.squirrels[2]);
    //this.hitboxSquirrels3 = new EnemiesHitbox(this, this.squirrels[3]);
    //this.hitboxSquirrels.setScale(5);

    obstacle.setCollisionByProperty({ colision: true });

    this.cameras.main.startFollow(this.player);
    this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    this.physics.add.collider(this.player, obstacle);
    this.physics.add.overlap(this.player, this.squirrels);
    this.physics.add.overlap(this.squirrels, this.player);
    this.physics.add.collider(this.squirrels, obstacle);
    this.physics.add.overlap(
      this.player,
      this.squirrels,
      this.DamageTaken,
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.collectible,
      this.Heal,
      null,
      this
    );
    this.physics.add.overlap(this.player, this.Eagle, this.mision, null, this);
    this.physics.add.overlap(
      this.player,
      this.salida,
      this.NextLevel,
      null,
      this
    );
    // this.physics.add.overlap(
    //   this.player,
    //   this.squirrels,
    //   this.throwRockAtPlayer,
    //   null,
    //   this
    // );
    this.physics.add.collider(this.player, this.rock, this.damage, null, this);

    console.log(this.player);
    this.physics.add.overlap(
      this.hitbox,
      this.squirrels,
      this.playerHitEnemy,
      null,
      this
    );

    this.physics.add.overlap(
      this.player,
      this.rocksGroup,
      this.damage,
      null,
      this
    );

    this.squirrelsKilledText = this.add.text(
      1150,
      60, getPhrase(this.deadSquirrel),
      {
        fontSize: "50px",
        fontFamily: "Roboto Mono",
      }
    );

    this.rectangle = this.add.image(900, 900, "rectangle");
    this.misionText = this.add
      .text(
        60,
        880,
        "Hola viajero, necesitamos tu ayuda para derrotar a las ardillas, ve y matalas",
        {
          fontSize: "35px",
          fontFamily: "Roboto Mono",
          color: "FFFF00",
        }
      )
      .setInteractive();
    this.misionText.on("pointerdown", () => {
      this.misionText.setVisible(false);
      this.rectangle.setVisible(false);
    });
    this.misionText.setVisible(false);
    this.misionText.setScrollFactor(0);
    this.rectangle.setScrollFactor(0);
    this.rectangle.setVisible(false);
    this.squirrelsKilledText.setVisible(false);
    this.squirrelsKilledText.setScrollFactor(0);

    this.citySounds = this.sound.add("citySFX", { loop: true, volume: 0.8 });
    this.citySounds.play();
  }
  update() {
    this.player.update();
    this.hitbox.update();
    //this.hitboxSquirrels.update();
    //this.hitboxSquirrels1.update();
    //this.hitboxSquirrels2.update();
    //this.hitboxSquirrels3.update();
    for (let i = 0; i < this.squirrels.length; i++) {
      const squirrel = this.squirrels[i];
      if(!squirrel.active) return;
      squirrel.body.setSize(150, 150);
      const startX = Math.floor(squirrel.x / this.tileWidth);
      const startY = Math.floor(squirrel.y / this.tileHeight);
      const endX = Math.floor(squirrel.targetX / this.tileWidth);
      const endY = Math.floor(squirrel.targetY / this.tileHeight);
      const distanceToPlayer = Phaser.Math.Distance.Between(
        squirrel.x,
        squirrel.y,
        this.player.x,
        this.player.y
      );
      if (distanceToPlayer < 600) {
        if (squirrel.timeToThrowRock <= 0) {
          // console.log("timeToThrowRock", squirrel.timeToThrowRock);
          this.throwRockAtPlayer(this.player, squirrel);
          squirrel.timeToThrowRock = 100;
        }
        // Resta el tiempo para lanzar una piedra
        squirrel.timeToThrowRock -= 1;

        // console.log("ardilas", this.squirrels);
        this.squirrels[i] = squirrel;
        // console.log("ardilas 2", this.squirrels);
      }

      this.easystar.findPath(startX, startY, endX, endY, (path) => {
        if (path !== null && path.length > 1) {
          const nextTile = path[1];
          squirrel.targetX = nextTile.x * this.tileWidth;
          squirrel.targetY = nextTile.y * this.tileHeight;
        }
      });
      this.easystar.calculate();
    }
  }

  makeGrid(map, background, obstacle) {
    const grid = [];
    const walkableTiles = [0];

    for (let y = 0; y < map.height; y++) {
      const row = [];
      for (let x = 0; x < map.width; x++) {
        const groundTile = background.getTileAt(x, y, true, "Ground");
        const upperTile = obstacle.getTileAt(x, y, true, "Deco");

        const isWalkable = walkableTiles.includes(groundTile.index);

        row.push(isWalkable ? 0 : 1);
      }
      grid.push(row);
    }

    return grid;
  }

  DamageTaken(player, squirrel) {}

  playerHitEnemy(hitbox, squirrel) {
    if (squirrel.active && hitbox.active) {

        squirrel.takeDamage(this.hitbox.damageAmount);
        
        squirrel.anims.play("Damage", true);

      
    }
  }

  takeDamage(damageAmount,rock,squirrel) {
    this.enemyHp -= damageAmount;
    console.log("daño")
    if (this.enemyHp <= 0) {

      
      squirrel.setActive(false).setVisible(false);      
      squirrel.anims.stop();
      
    }

    
    
  }

  mision(player, Eagle) {
    this.squirrelsKilledText.setVisible(true);
    this.misionText.setVisible(true);
    this.rectangle.setVisible(true);

    if (this.squirrelsKilled >= 4) {
      this.missionComplete = true;
      this.misionText.setText(
        "Felicidades por completar la misión, el desierto lo espera"
      );
      this.squirrelsKilled = 0;
      this.squirrelsKilledText.setText("");

      this.lvl++;
      events.emit("UpdateLVL", { lvl: this.lvl });

      this.salida.setVisible(true).setActive(true);
    }
  }
  Heal(player, collectible) {
    this.hp = this.hp + 25;
    events.emit("UpdateHP", { hp: this.hp });
    collectible.disableBody(true, true);
  }
  NextLevel() {
    if (this.missionComplete) {
      const data = {
        lvl: this.lvl,
        hp: this.hp,
        damageAmount: this.damageAmount,
        velocityPlayer: this.velocityPlayer,
      };
      for (const s of this.squirrels) {
        s.destroy(true, true);
      }
      // Clear the squirrels array
      this.squirrels = [];

      this.scene.start("Desert", data);
    }
  }

  createRocks() {
    this.rocksGroup = this.physics.add.group({
      inmovable: true,
      allowGravity: false,
    });

    this.rocksGroup.createMultiple({
      classType: Phaser.Physics.Arcade.Sprite,
      key: "Rock",
      frame: 0,
      visible: false,
      active: false,
      repeat: 50,
      setXY: {
        x: -500,
        y: -550,
      },
    });

    this.rocksGroup.children.entries.forEach((bullet) => {
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

  throwRockAtPlayer(player, squirrel) {
    const directionX = player.x - squirrel.x;
    const directionY = player.y - squirrel.y;
    // Normaliza la dirección para obtener un vector unitario
    const length = Math.sqrt(directionX * directionX + directionY * directionY);
    const velocityX = (directionX / length) * this.velocityPlayer;
    const velocityY = (directionY / length) * this.velocityPlayer;

    // Agrega una lógica para determinar si debe tocar la animación hacia arriba o hacia abajo
    if (Math.abs(velocityX) < Math.abs(velocityY)) {
      if (velocityY < 0) {
        squirrel.anims.play("AttackUpSquirrel", true);
      } else {
        squirrel.anims.play("AttackDownSquirrel", true);

      }
    } else {
      if (velocityX < 0) {
        squirrel.anims.play("AttackLeftSquirrel", true);

      } else {
        squirrel.anims.play("AttackRightSquirrel", true);
      }
    }

    // Crea y configura la instancia de la clase Rock y su velocidad
    const rock = this.rocksGroup.get(squirrel.x, squirrel.y);
    if (rock) {
      rock.setActive(true);
      rock.setVisible(true);
      console.log("vel piedra", velocityX)
      this.physics.moveTo(rock, player.x, player.y, Math.abs(velocityX));
    }
  }

  damage(player, rock, squirrel) {
    console.log("auch");
    this.hp--;
    events.emit("UpdateHP", { hp: this.hp });

    if (this.hp <= 0) {
      this.player.setVisible(false).setActive(false);
      if (squirrel && squirrel.anims.isPlaying) {
        squirrel.anims.pause();
      }

      // Destroy each squirrel individually
      for (const s of this.squirrels) {
        s.destroy(true, true);
      }
      // Clear the squirrels array
      this.squirrels = [];

      this.scene.pause("City");
      this.scene.launch("GameEnd");
    }
  }
}
