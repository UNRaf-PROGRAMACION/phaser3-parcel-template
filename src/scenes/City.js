import Phaser from "phaser";
import events from "./EventCenter";
import Player from "../components/Player";
import Enemies from "../components/Enemies";
import Hitbox from "../components/Hitbox";
import Npc from "../components/Npc";


//  Main biome, player starts the game here and after completing some tasks unlocks the desert
//  Has pathway to forest
//  holds some secret collectibles
//  Can access bossArena
//  Resistence camp with npcs are here
//  Has normal enemies
//  save station
export default class City extends Phaser.Scene {
  constructor() {
    super("City");
    this.level;
    this.hp;
    this.experience;
    this.player;
    this.velocityPlayer;
    this.squirrels = []
    this.squirrelsHP;
    this.squirrelsKilled;
    this.squirrelsKilledText;
    this.damageAmount;
    this.enemyHp;
  }

   init(data){
      this.level= data.level || 1
      this.hp= data.hp || 200
      this.experience= data.experience || 0
      this.velocityPlayer= data.velocityPlayer || 400
      this.velocitySquirrel= data.velocitySquirrel || 100
      this.squirrelsHP= data.squirrelsHP || 50
      this.enemyHp = data.enemyhp || 200     
      this.damageAmount = data.damageAmount || 100
      this.squirrelsKilled= data.squirrelsKilled || 0 

}

   create(){
    this.scene.launch("UI");

     const map = this.make.tilemap({ key: "City" });
     const layerbackGround = map.addTilesetImage("TDJ2 - tileset", "Mapcity");
     const background = map.createLayer("Ground", layerbackGround, 0, 0);

     this.player = new Player (
      this,
      60,
      2700,
      "C4",
      this.velocityPlayer
   );

     const top = map.createLayer("Top", layerbackGround, 0, 0);
    
  const layerObstacle = map.addTilesetImage(
   "TDJ2 - tileset","Mapcity",
 
  );
  const Obstacle = map.createLayer(
    "Deco",
    layerObstacle,
    0,
    0
  
  );
  const objectsLayer = map.getObjectLayer("Objects");
  this.collectible = this.physics.add.group();
  this.collectible.allowGravity= false
    objectsLayer.objects.forEach((objData) => {
      //console.log(objData.name, objData.type, objData.x, objData.y);

      const { x = 0, y = 0, name } = objData;

      switch (name) {
        case "cura": {
          // add star to scene
          // console.log("estrella agregada: ", x, y);
          const collectible1 = this.collectible
            .create(x, y, "cura")
            .setScale(0.4)
            .setSize(200, 200);
          break;
        }
        }
      })

  this.playersGroup = this.physics.add.group();
  this.collectibleGroup=this.physics.add.group();
  this.squirrelGroup=this.physics.add.group();

     this.hitbox = new Hitbox (
      this,
      this.player
   );
   this.Eagle= new Npc(
    this,
    4500,
    3800,
    "Eagle"
   );



this.squirrels.push(new Enemies(this, 500, 2300, "Squirrel", this.velocitySquirrel));
this.squirrels.push(new Enemies(this, 800, 2500, "Squirrel", this.velocitySquirrel));
this.squirrels.push(new Enemies(this, 1000, 2700, "Squirrel", this.velocitySquirrel));
this.squirrels.push(new Enemies(this, 900, 2900, "Squirrel", this.velocitySquirrel));


  Obstacle.setCollisionByProperty({ colision: true });
  
   this.cameras.main.startFollow(this.player);
   this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
   this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

  this.physics.add.collider(this.player, Obstacle);
  this.physics.add.overlap(this.player, this.squirrels);
  this.physics.add.overlap(this.squirrels, this.player);
  this.physics.add.collider(this.squirrels, Obstacle);
  this.physics.add.overlap(this.player, this.squirrels,this.DamageTaken,null,this);
  this.physics.add.overlap(this.player, this.collectible,this.incrementedHP,null,this);
  this.physics.add.overlap(this.player, this.Eagle,this.mision,null,this);

  for (const squirrel of this.squirrels) {
   squirrel.targetX = Phaser.Math.Between(600, 2800);
   squirrel.targetY = Phaser.Math.Between(600, 2800);
   squirrel.velocity = 300;
   }

   console.log(this.player)
   this.physics.add.overlap(this.hitbox, this.squirrels, this.playerHitEnemy, null, this);

 } 
   update() {
     this.player.update();
     this.hitbox.update();
     
     
     for (const squirrel of this.squirrels) {
      
       const deltaX = squirrel.targetX - squirrel.x;
       const deltaY = squirrel.targetY - squirrel.y;
       const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
 
     
     if (Math.abs(deltaX) > Math.abs(deltaY)) {
       // Movimiento horizontal
       if (deltaX > 0) {
         squirrel.anims.play('walk-right', true);
       } else {
         squirrel.anims.play('walk-left', true);
       }
     } else {
       // Movimiento vertical
       if (deltaY > 0) {
         squirrel.anims.play('walk-down', true);
       } else {
         squirrel.anims.play('walk-up', true);
       }
     }
     
     
   
     if (distance > 2) {
       // Calcular la dirección del movimiento
       const directionX = deltaX / distance;
       const directionY = deltaY / distance;
 
       // Calcular la cantidad de movimiento en este fotograma
       const movementX = directionX *squirrel.velocity * this.game.loop.delta / 1500;
       const movementY = directionY * squirrel.velocity * this.game.loop.delta / 1500;
 
       // Actualizar las coordenadas de la ardilla
      squirrel.x += movementX;
     squirrel.y += movementY;
     } else {
       
       squirrel.targetX = Phaser.Math.Between(100, 1920);
       squirrel.targetY = Phaser.Math.Between(100, 1080);
     }
    
}}

DamageTaken(player, squirrel){
  if (squirrel.active) {
    console.log("choque");
    this.hp--;
    events.emit("UpdateHP", { hp: this.hp });
  }


  if(this.hp <= 0){
    

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

playerHitEnemy(hitbox, squirrel) {
  if (squirrel instanceof Enemies) {
    squirrel.takeDamage(this.hitbox.damageAmount);
  }
}

takeDamage(damageAmount, squirrel) {
  this.enemyHp -= damageAmount;

  if (this.enemyHp <= 0) {
    squirrel.remove()
    this.squirrelsKilled++;
    
      this.squirrelsKilledText.setText(`Squirrels Killed ${this.squirrelsKilled}`);
    
  }
}


mision(player,Eagle){
  this.squirrelsKilledText= this.add.text(1000,60,"Squirrels Killed:",{
    fontSize : "50px"
  });
  this.squirrelsKilledText.setScrollFactor(0)
    
 
}
incrementedHP(player,collectible){
  collectible.disableBody(true,true);
  events.emit("UpdateHP", { hp: this.hp });
  this.hp= this.hp + 25
  
}
}
