let audio2;

import Phaser from 'phaser'
import Jugador from './jugador';
import Dado from './dado';



export class Tablero extends Phaser.Scene {
  player
  player2
  turno
  musica
  distancia
  valor
  distancia2    
  audio2
  

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
      this.activo = data.activo;
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
      this.final = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "banderaTablero");

// creacion del jugador y collides

      this.player2 = new Jugador(this, this.distancia2, 862.83, "prota2", 1)
      this.player = new Jugador(this, this.distancia , 862.83, "prota", 0)
      
      this.physics.add.collider(this.player, worldLayer);
      this.physics.add.collider(this.player2, worldLayer);
      this.physics.add.collider(this.final, worldLayer);

      this.physics.add.overlap(this.player, this.final, this.hitFinal, null, this);
      this.physics.add.overlap(this.player2, this.final, this.hitFinal2, null, this);
      
      
      if (this.turno == 0 ){
        console.log("jugador a seguir 1")
        this.cameras.main.startFollow(this.player, true, 0.08, 0.08);  
      } else {
        console.log("jugador a seguir 2")
        this.cameras.main.startFollow(this.player2, true, 0.08, 0.08);  
      }

      
      this.cameras.main.setZoom(2);

      this.cameras.main.setBounds(0, 0, 1952, 1080); 

  //parlante distinto
      this.activo= true ? 'music2' : 'mute2'

      this.musica = this.add.image(1395, 310 ,this.activo).setInteractive()
        
      .on('pointerdown', () => {

        this.activo = !this.activo
        this.musica.setTexture(this.activo ? 'music2' : 'mute2')
      })

      .on('pointerover', () => {
        this.musica.setScale(1.1)
      })

      .on('pointerout', () => {
        this.musica.setScale(1)
      })

      this.musica.setScrollFactor(0);


      this.dado = new Dado (this ,535, 320, 'dado')
      this.dado.setScrollFactor(0);
    }

    
    updateTexto(){
      if (this.turno == 0) {
        this.valor = Phaser.Math.Between(6,6);
      } else {
        this.valor = Phaser.Math.Between(3,3);
      }
      
     
    }

    hitFinal(player, final){

      this.dado.destroy();
      this.musica.destroy();
      setTimeout(() => {
        this.add.image(this.distancia -400, this.player.y-100, "completo");

        let otro = this.add.image(this.distancia -410, this.player.y + 25, "botone").setInteractive()
        
        .on('pointerdown', () => {
          
          this.scene.start(
            "Preloads")
        })
      
      .on('pointerover', () => {
          otro.setScale(1.1)
        })
      
      .on('pointerout', () => {
          otro.setScale(1)
        })
         
       }, 3000)
    }

    hitFinal2(player2, final){

      this.dado.destroy();
      this.musica.destroy();
      setTimeout(() => {
        this.add.image(this.distancia2 -400, this.player2.y-100, "completo");

        let otro = this.add.image(this.distancia2 -410, this.player2.y + 25, "botone").setInteractive()
        
        .on('pointerdown', () => {
          
          this.scene.start(
            "Preloads")
        })
      
      .on('pointerover', () => {
          otro.setScale(1.1)
        })
      
      .on('pointerout', () => {
          otro.setScale(1)
        })
         
       }, 3000)
    }
    
    update(){
    if (this.turno===0) {
      //this.cameras.main.startFollow(this.player, true, 0.08, 0.08);
      this.player.setScale(1.1);
    }

    if (this.turno===1) {
      //this.cameras.main.startFollow(this.player2, true, 0.08, 0.08);
      this.player2.setScale(1.1);
    }

  } 
  
}

/*

    create() {

      this.player2 = this.physics.add.sprite(distancia2, 862.83, "prota2").setCollideWorldBounds(true);
      this.player = this.physics.add.sprite(distancia, 862.83, "prota").setCollideWorldBounds(true);
      
  
      this.physics.add.collider(this.player, worldLayer);
      this.physics.add.collider(this.player2, worldLayer);
      this.physics.add.collider(final, worldLayer);

      this.cameras.main.startFollow(this.player, true, 0.08, 0.08);

      let iconoSonido= "music2"
      
      if (this.contar === 1) {
        iconoSonido= "mute2"
        audio2.play();
        audio2.pause();
      }

      let musica = this.add.image(1395, 310 ,iconoSonido).setInteractive()
      
      .on('pointerdown', () => {

        if(this.contar === 0){
          iconoSonido= "mute2"
          this.contar = 1
          audio2.pause()
          musica.setTexture("mute2")
        }else{
          if (this.contar === 1){
            iconoSonido= "music2"
            this.contar = 0
            audio2.resume()
            musica.setTexture("music2")
          }
        }
      })

      .on('pointerover', () => {
        musica.setScale(1.1)
      })

      .on('pointerout', () => {
        musica.setScale(1)
      })

      musica.setScrollFactor(0);

      this.physics.add.overlap(this.player, final, this.hitFinal, null, this);
      this.physics.add.overlap(this.player2, final, this.hitFinal2, null, this);

      boton = this.add.image(535, 320  ,"dado").setInteractive()
      
      .on('pointerdown', () => {
        
        musica.destroy()
        boton.destroy()
        this.updateTexto()
       
        if (turno === 0) {
          
          number = this.add.text(this.cameras.main.midPoint.x ,this.cameras.main.midPoint.y - 100, valor, { stroke: 'black', strokeThickness: 5, fontSize: '75px Arial', fill: 'white' })
        
        setTimeout(() => {
          number.destroy()
          this.player.setX(distancia + 128 * valor)
          this.player.setScale(1)
          turno === 1
          //this.cameras.main.stopFollow()
          }, 3000)

        setTimeout(() => {
          //this.cameras.main.setPosition(distancia - 128 * valor,0)
          this.player2.setScale(1.1)
          
          }, 5000)

        setTimeout(() => {
          this.scene.start("Cartas", { distancia : this.player.x, distancia2: this.player2.x, audio2:audio2, contar:this.contar, turno:1, movimiento: 1, valor:valor   }
         )}, 8000)

         
        }
        
        if (turno === 1) {
          
          number = this.add.text(this.cameras.main.midPoint.x ,this.cameras.main.midPoint.y-100, valor, { stroke: 'black', strokeThickness: 5, fontSize: '75px Arial', fill: 'white' })
        
        setTimeout(() => {
          number.destroy()
          this.player2.setX(distancia2 + 128 * valor)
          this.player2.setScale(1)
          turno === 0
          //this.cameras.main.stopFollow()
          }, 3000)

        setTimeout(() => {
          //this.cameras.main.setPosition(this.player.x ,this.player.y)
          this.player.setScale(1.1)
          
          }, 5000)

        setTimeout(() => {
            this.scene.start("Cartas", { distancia : this.player.x, distancia2: this.player2.x, audio2:audio2, contar:this.contar, turno:0, movimiento: 1, valor:valor   }
           )}, 8000)
         
        }
        
        
        })
        .on('pointerover', () => {
          boton.setScale(1.1)
        })
    
        .on('pointerout', () => {
          boton.setScale(1)
        })

        
        boton.setScrollFactor(0);

        if (this.movimiento === 0) {
          boton.destroy();

          setTimeout(() => {
            this.scene.start("Cartas", { distancia : this.player.x, distancia2: this.player2.x, audio2:audio2, contar:this.contar, turno:turno, movimiento: 1, valor:valor   })
    
            }, 3000)
        }
 
    }
    
  
*/

