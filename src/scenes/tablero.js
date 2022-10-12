import Phaser from 'phaser'

export class Tablero extends Phaser.Scene {
    constructor() {
  
      super("Tablero");
    }

    preload(){
      this.load.tilemapTiledJSON("map", "assets/tilemaps/tablero.json");
      this.load.image("tilesBelow", "assets/images/cueva-atlas.png");
      this.load.image("tilesPlatform", "assets/images/casilas atlas.png");
    
    }
    
    init(data) {
      
      this.distancia = data.distancia;
      this.distancia2 = data.distancia2;
      this.turno = data.turno;
      this.contar = data.contar;
      this.audio2 = data.audio2;
     
  
    }

    create(){
      const map = this.make.tilemap({ key: "map" });

      const tilesetBelow = map.addTilesetImage("cueva-atlas", "tilesBelow");
  
      const tilesetPlatform = map.addTilesetImage(
        "casilas atlas",
        "tilesPlatform"
      );
  
      const belowLayer = map.createLayer("Fondo", tilesetBelow, 0, 0);
      const worldLayer = map.createLayer("Plataformas", tilesetPlatform, 0, 0);
      const objectsLayer = map.getObjectLayer("Objetos");
  
      worldLayer.setCollisionByProperty({ collides: true });


      const spawnPoint = map.findObject("Objetos", (obj) => obj.name === "final");
      final = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "banderaTablero");

// creacion del jugador y collides

//this.cameras.main.startFollow(this.player, true, 0.08, 0.08);

this.cameras.main.setZoom(2);

this.cameras.main.setBounds(0, 0, 1952, 1080); 

//this.parlante = new Parlante (//datos)
    }

    update(){

    }
}