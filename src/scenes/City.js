import Phaser from "phaser";
//import events from "./EventCenter";
import Player from "../components/Player";
import Enemies from "../components/Enemies";


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
  }

   init(data){
      this.level= data.level || 1
      this.hp= data.hp || 3
      this.experience= data.experience || 0
      this.velocityPlayer= data.velocityPlayer || 400
      this.velocitySquirrel= data.velocitySquirrel || 100
     

}

   create(){
   
     const map = this.make.tilemap({ key: "City" });
     const layerbackGround = map.addTilesetImage("TDJ2 - tileset", "Mapcity");
     const background = map.createLayer("Ground", layerbackGround, 0, 0);
    
  const layerObstacle = map.addTilesetImage(
   "TDJ2 - tileset","Mapcity",
 
  );
  const Obstacle = map.createLayer(
    "Deco",
    layerObstacle,
    0,
    0
  
  );
  this.player= new Player (
   this,
   60,
   2300,
   "C4",
   this.velocityPlayer



);
this.squirrels.push(new Enemies(this, 500, 400, "Squirrel", this.velocitySquirrel));
this.squirrels.push(new Enemies(this, 800, 400, "Squirrel", this.velocitySquirrel));
this.squirrels.push(new Enemies(this, 1000, 600, "Squirrel", this.velocitySquirrel));
this.squirrels.push(new Enemies(this, 900, 800, "Squirrel", this.velocitySquirrel))





  Obstacle.setCollisionByProperty({ colision: true });
  
   this.cameras.main.startFollow(this.player);
   this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
   this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
  this.physics.add.collider(this.player,Obstacle);
  for (const squirrel of this.squirrels) {
   squirrel.targetX = Phaser.Math.Between(100, 1920);
   squirrel.targetY = Phaser.Math.Between(100, 1080);
   squirrel.velocity = 300;
   }
 } 
   update() {
     this.player.update();
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
     
 
    
   }
}
}