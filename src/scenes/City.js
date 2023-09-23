    import Phaser from "phaser";

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
         this.vida;
         this.experience;
         this.player;
         this.velocityPlayer;
       }

        init(data){
           this.level= data.level || 1
           this.vida= data.vida || 3
           this.experience= data.experience || 0
           this.velocityPlayer= data.velocityPlayer || 400
           this.velocitySquirrel= data.velocitySquirrel || 300

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
    this.squirrel= new Enemies(
      this,
      500,
      400,
      "Squirrel",
      this.velocitySquirrel,

    )
     

       Obstacle.setCollisionByProperty({ colision: true });
       
        this.cameras.main.startFollow(this.player);
        this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
       this.physics.add.collider(this.player,Obstacle);
     

       
      }

        update(){
           this.player.update();
           this.squirrel.update();

        }

    }