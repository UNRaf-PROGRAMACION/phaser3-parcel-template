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
    this.velocityPlayer = data.velocityPlayer;
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
    this.player = new Player(this, 3548,
      1700, "C4", this.velocityPlayer);  
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
            .create(x, y, "FlechaSalida")
            .setScale(1)
            .setSize(200, 200)
            .setVisible(true)
      
          break;
        }
      }
    });
    this.fox=new Npc (
      this,
      3548,
      150,
      "Fox"
    );
    this.physics.add.overlap(this.player,this.salidaDesierto,this.backCity,null,this);
    this.physics.add.overlap(this.player,this.fox,this.mision2,null,this);
    this.cobraKilledText=this.add.text(1150,60,"Cobras Killed",{
      fontSize:"50px",
      fontFamily: "Roboto Mono",
    });
    this.cobraKilledText.setVisible(false);
    this.cobraKilledText.setActive(false);
    this.cobraKilledText.setScrollFactor(0);
    this.ObjectRecolectedText=this.add.text(1150,160,"Objects collected",{
      fontSize:"50px",
      fontFamily: "Roboto Mono",
    });
    this.ObjectRecolectedText.setVisible(false);
    this.ObjectRecolectedText.setActive(false);
    this.ObjectRecolectedText.setScrollFactor(0);
    this.rectangle = this.add.image(900, 900, "rectangle");
    this.mision2Text= this.add.text(60,800,"Hola C4, matame a las cobras, recolectá sus partes y despues volvé",{
      fontSize: "40px",
          fontFamily: "Roboto Mono",
          color: "FFFF00",
    }).setInteractive();
    this.rectangle.setScrollFactor(0);
    this.rectangle.setVisible(false);
    this.mision2Text.setVisible(false);
    this.mision2Text.setActive(false);
    this.mision2Text.setScrollFactor(0);
    this.mision2Text.on("pointerdown", () => {
      this.mision2Text.setVisible(false);
      this.rectangle.setVisible(false);
    });
  }

  update() {
    this.player.update();
    this.hitbox.update();
  }
  backCity(){
    const data = {
      lvl: this.lvl,
      hp: this.hp,
      damageAmount: this.damageAmount,
      velocityPlayer: this.velocityPlayer,
    };
    this.scene.start("City",data);
  
    
  }
  mision2(player,fox){
    this.cobraKilledText.setVisible(true);
    this.cobraKilledText.setActive(true);
    this.ObjectRecolectedText.setVisible(true);
    this.ObjectRecolectedText.setActive(true);
    this.mision2Text.setVisible(true);
    this.rectangle.setVisible(true);

  }
}
