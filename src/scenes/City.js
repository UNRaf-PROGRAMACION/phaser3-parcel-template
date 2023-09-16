//  import Phaser from "phaser";
//   //import events from "./EventCenter";
//   import Player from "../components/Player";
  

//  //Main biome, player starts the game here and after completing some tasks unlocks the desert
//  //Has pathway to forest
//  //holds some secret collectibles
//  //Can access bossArena
//  //Resistence camp with npcs are here
//  //Has normal enemies
//  //save station
//  export default class City extends Phaser.Scene {
//      constructor() {
//        super("City");
//        this.level;
//        this.vida;
//        this.experience;
//        this.player;
//        this.velocityPlayer;
//      }

//      init(data){
//         this.level= data.level || 1
//         this.vida= data.vida || 3
//         this.experience= data.experience || 0
//         this.velocityPlayer= data.velocityPlayer || 200

//  }

//      create(){
//         this.player= new Player (
//             this,
//             212,
//             200,
//             "C4",
//             this.velocityPlayer


//         );
        
//      }

//      update(){
//         this.player.update();

//      }

//  }