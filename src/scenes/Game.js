import Phaser from "phaser";
import PrincipalCharacter from '../components/PrincipalCharacter';
import events from "./EventCenter";
import DynamiteGroup from "../components/Dynamite";

export default class Game extends Phaser.Scene {
  character;

  dynamite;

  velocity;

  dynamiteCuantity;

  level1Tile;

  constructor() {
    super("game");
  }

  init(data) {
    this.velocity = data.velocity || 400;
    this.level = data.level || 1;
    this.dynamiteCuantity = data.dynamiteCuantity || 0;
    this.score = data.score || 0;
  }

  create() {
    this.scene.launch("ui", {
      level: this.level,
    });

    this.initializeLevel();
    this.createCharacter();
    this.createDynamite();

    this.gameSong = this.sound.add("game-song");
    this.gameSong.play({ loop: true });

    this.physics.add.overlap(this.character, this.dynamite, this.hitDynamite, null, this);
    this.physics.add.collider(this.character, this.wallCollisionLayer);

    events.on("music", this.musicTransfer, this);

    this.keyP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
  }

  initializeLevel() {
    this.level1Tile = this.make.tilemap({ key: "level1" });
    this.atlas = this.level1Tile.addTilesetImage("Atlas", "Atlas");
    this.floorLayer = this.level1Tile.createLayer("Floor", this.atlas, 0, 0);
    this.wallCollisionLayer = this.level1Tile.createLayer("WallC", this.atlas, 0, 0);
    this.wallDecorativeLayer = this.level1Tile.createLayer("WallD", this.atlas, 0, 0);
    this.objectsLayer = this.level1Tile.getObjectLayer("objects");
    this.wallCollisionLayer.setCollisionByProperty({ colision: true });
  }

  createCharacter() {
    this.spawnPoint = this.level1Tile.findObject("objects", (obj) => obj.name === "principalCharacter");
    this.character = new PrincipalCharacter(this, this.spawnPoint.x, this.spawnPoint.y, "principal-character", this.velocity);
    this.add.existing(this.character);
    this.cameras.main.startFollow(this.character);
    this.physics.world.setBounds(0, 0, this.level1Tile.widthInPixels, this.level1Tile.heightInPixels);
    this.cameras.main.setBounds(0, 0, this.level1Tile.widthInPixels, this.level1Tile.heightInPixels);
  }

  createDynamite() {
    this.dynamite = new DynamiteGroup(this, 0); // Ajusta la cantidad según tus necesidades
    this.objectsLayer.objects.forEach((objData) => {
      const { x = 0, y = 0, name } = objData;
      if (name === "dynamite") {
        const dynamite = this.dynamite.create(x, y, "dynamite").setSize(100, 100);
        if (dynamite) {
          dynamite.setActive(true).setVisible(true);
        }
      }
    });
  }

  update() {
    this.character.update();
    if (this.keyP.isDown) {
      this.scene.pause();
      this.scene.launch("pause", {
        gameSong: this.gameSong,
      });
    }
  }
  

  hitDynamite(character, dynamite) {
    dynamite.disableBody(true, true);
    this.dynamiteCuantity += 1;
    events.emit("actualizarDatos", {
      level: this.level,
      dynamiteCuantity: this.dynamiteCuantity,
      score: this.score,
    });
  }

  musicTransfer(data) {
    this.gameSong = data.gameSong;
  }
}