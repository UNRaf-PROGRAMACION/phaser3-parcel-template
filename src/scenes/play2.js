// Declaracion de variables para esta escena
var player;
var stars;
var bombs;
var cursors;
var score;
var gameOver;
var victoria;
var scoreText;
var musicanivel2;
var initialTime;
var timeText;
var timedEvent;

// Clase Play, donde se crean todos los sprites, el escenario del juego y se inicializa y actualiza toda la logica del juego.
export class Play2 extends Phaser.Scene {
    constructor() {
      // Se asigna una key para despues poder llamar a la escena
      super("Play2");
    }

    preload() {
       this.load.tilemapTiledJSON("map2", "public/assets/tilemaps/mapanivel2.json");
       this.load.image("tubos1", "public/assets/tilemaps/tubos.png");
       this.load.image("fondo", "public/assets/images/fondo_nivel2.png");
       this.load.image("bandera", "public/assets/images/bandera.png"); 
       
    
    }

    create() {

        const map = this.make.tilemap({ key: "map2" });

        // Parameters are the name you gave the tileset in Tiled 
        // and then the key of the tileset image in
        // Phaser's cache (i.e. the name you used in preload)

        const tilesetBelow = map.addTilesetImage("fondo_nivel2", "fondo");
        const tilesetPlatform = map.addTilesetImage("tubos", "tubos1");

        // Parameters: layer name (or index) from Tiled, tileset, x, y
        const belowLayer = map.createLayer("fondo", tilesetBelow, 0, 0);
        const worldLayer = map.createLayer("solidos", tilesetPlatform, 0, 0);
        //const objectsLayer = map.getObjectLayer("objetos");

        worldLayer.setCollisionByProperty({ solidos: true });   


        // Find in the Object Layer, the name "dude" and get position
        const spawnPoint = map.findObject("objetos", (obj) => obj.name === "dude");
        // The player and its settings
        player = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "dude");

        //camara que sigue al player

        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        this.cameras.main.startFollow(player);

        //Player physics properties. Give the little guy a slight bounce.
        //player.setBounce(0.2);
        //player.setCollideWorldBounds(true);


        //  Input Events
        if ((cursors = !undefined)) {
            cursors = this.input.keyboard.createCursorKeys();
        }

        // Create empty group of starts
        stars = this.physics.add.group();

        // find object layer
        // if type is "stars", add to stars group
        /*objectsLayer.objects.forEach((objData) => {
            //console.log(objData.name, objData.type, objData.x, objData.y);

            const { x = 0, y = 0, name, type } = objData;
            switch (type) {
                case "stars": {
                    // add star to scene
                    // console.log("estrella agregada: ", x, y);
                    var star = stars.create(x, y, "star");
                    star.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
                    break;
                }
            }
        });*/

        // Create empty group of bombs
        bombs = this.physics.add.group();

        //  The score
        scoreText = this.add.text(30, 6, "score: 0", {
            fontSize: "32px",
            fill: "#000",
        });

        // Collide the player and the stars with the platforms
        // REPLACE Add collision with worldLayer
        this.physics.add.collider(player, worldLayer);
        this.physics.add.collider(stars, worldLayer);
        this.physics.add.collider(bombs, worldLayer);

        //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
        this.physics.add.overlap(player, stars, this.collectStar, null, this);

        this.physics.add.collider(player, bombs, this.hitBomb, null, this);

        gameOver = false;
        score = 0;

      //musica
      
      musicanivel2 = this.sound.add("musicanivel2");
      musicanivel2.play({volume:0.1, loop:true})

      // cronometro

      initialTime = 60;
      timeText = this.add.text(840, 50, 'Tiempo: ' + initialTime, 
      {font: 'bold 30pt Arial', fontSize: '36px', fill: '#000000', align:'center'});
      timeText.scrollFactorX = 0;
      timeText.scrollFactorY = 0;

        timedEvent = this.time.addEvent(
          {delay: 1000, callback: this.onSecond, callbackScope: this, loop: true});

          ////////////////////////////////////////////////////////////////////////
            const objectsLayer = map.getObjectLayer('objetos')

		    objectsLayer.objects.forEach(objData => {
              const { x = 0, y = 0, name, width = 0, height = 0 } = objData

                switch (name)
                {
                   case 'bandera':
                   {
                     const bandera = this.physics.add.sprite(x+ (width*0.5), y+(height*0.4), 'bandera')
                     this.physics.add.collider(bandera, worldLayer);
                     this.physics.add.overlap(player, bandera, this.victoria, null, this);
                     bandera.setScale(0.5);  
                
                      break
                    }
                }    
		    })




    }


    update() {
    
        if (cursors.left.isDown) {
            player.setVelocityX(-160);
            player.anims.play("left", true);

        } else if (cursors.right.isDown) {
            player.setVelocityX(160);
            player.anims.play("right", true);

        } else {
            player.setVelocityX(0);
            player.anims.play("turn");

        }

            // REPLACE player.body.touching.down
            if (cursors.up.isDown && player.body.blocked.down) {
            player.setVelocityY(-330);
        }

        if (initialTime <= 0){
            this.gameOver();
        }
    }

    collectStar(player, star) {
        star.disableBody(true, true);

        //  Add and update the score
        score += 10;
        scoreText.setText("Score: " + score);

        if (stars.countActive(true) === 0) {
            //  A new batch of stars to collect
            stars.children.iterate(function (child) {
                child.enableBody(true, child.x, child.y + 10, true, true);
            });

            var x =
                player.x < 400
                    ? Phaser.Math.Between(400, 800)
                    : Phaser.Math.Between(0, 400);

            var bomb = bombs.create(x, 16, "bomb");
            bomb.setBounce(1);
            bomb.setCollideWorldBounds(true);
            bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
        }
    

        // Función timeout usada para llamar la instrucción que tiene adentro despues de X milisegundos
        /*setTimeout(() => {
            // Instrucción que sera llamada despues del segundo
            this.scene.start(
                "Retry",
                { score: score } // se pasa el puntaje como dato a la escena RETRY
            );
        }, 1000); // Ese número es la cantidad de milisegundos*/
    }

    onSecond()
    {
    if (! gameOver)
    {
      //descuento de segundos
      initialTime = initialTime -1; // One second
      timeText.setText('Tiempo: '+ initialTime);
      if (initialTime == 0) 
      {
        timedEvent.paused = true;
        this.gameOver()
      }
    }
    }

    gameOver()
    {
      gameOver = true;
      this.physics.pause();
      musicanivel2.stop();
      this.scene.start("Retry");
    }

    victoria()
    {
      victoria = true;
      this.physics.pause();
      musicanivel2.stop();
      this.scene.start("victoria");

    }

}
