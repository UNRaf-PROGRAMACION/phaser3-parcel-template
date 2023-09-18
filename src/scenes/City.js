//    import Phaser from "phaser";
//     import events from "./EventCenter";
//     import Player from "../components/Player";
  

//    // Main biome, player starts the game here and after completing some tasks unlocks the desert
//    // Has pathway to forest
//    // holds some secret collectibles
//    // Can access bossArena
//    // Resistence camp with npcs are here
//    // Has normal enemies
//    // save station
//   export default class City extends Phaser.Scene {
//       constructor() {
//         super("City");
//         this.level;
//         this.vida;
//         this.experience;
//         this.player;
//         this.velocityPlayer;
//       }

//       init(data){
//          this.level= data.level || 1
//          this.vida= data.vida || 3
//          this.experience= data.experience || 0
//          this.velocityPlayer= data.velocityPlayer || 200

//   }

//       create(){
        
//          const map = this.make.tilemap({ key: "City" });
//          const layerbackGround = map.addTilesetImage("TDJ2 - tileset", "Mapcity");
//          const background = map.createLayer("Ground", layerbackGround, 0, 0);
         
      
//       const layerObstacle = map.addTilesetImage(
//        "TDJ2 - tileset","Mapcity",
      
//      );
//      const Obstacle = map.createLayer(
//        "Deco",
//        layerObstacle,
//        0,
//        0
       
//      );
//      this.player= new Player (
//       this,
//       212,
//       200,
//       "C4",
//       this.velocityPlayer
     


//   );
     

//      Obstacle.setCollisionByProperty({ colision: true });
//      Obstacle.setSize(50,50)
//       this.cameras.main.startFollow(this.player);
//       this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
//       this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
//      this.physics.add.collider(this.player,Obstacle);
     
//       }

//       update(){
//          this.player.update();

//       }

//   }