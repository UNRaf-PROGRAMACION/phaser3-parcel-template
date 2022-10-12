import Phaser from 'phaser'

export class Instrucciones extends Phaser.Scene {
    constructor() {
  
      super("Instrucciones");
    }

    preload(){
      //imagenes
    }
    
    init(data) {
      
      this.contar= data.contar;
      console.log(data)
  
    }
  
    create() {
      let audio2 = this.sound.add('theme2', {loop: true});
      audio2.play();
      
      
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, "cueva2");
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY/1.1, "dale");
    let intro = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY/0.53, "intro").setInteractive()
  
    .on('pointerdown', () => {
    
      this.scene.start(
        "Tablero",{distancia : 75,distancia2:65, turno:0, movimiento: 0 ,audio2:audio2, contar:this.contar}
    );
    })
  
  .on('pointerover', () => {
      intro.setScale(1.1)
    })
  
  .on('pointerout', () => {
      intro.setScale(1)
    })
  
    let iconoSonido= "music"
      
      if (this.contar === 1) {
        iconoSonido= "mute"
        audio2.play();
        audio2.pause();
      }
  
    let musica = this.add.image(1830,80,iconoSonido).setInteractive()
  
    .on('pointerdown', () => {
  
      if(this.contar===0){
        iconoSonido= "mute"
        this.contar = 1
        audio2.pause()
        musica.setTexture("mute")
  
      }else{
        if (this.contar === 1){
          iconoSonido= "music"
          this.contar = 0
          audio2.resume()
          musica.setTexture("music")
        }
      }
      
    })
  
    .on('pointerover', () => {
        musica.setScale(1.1)
    })
  
    .on('pointerout', () => {
    
        musica.setScale(1)
    })
  
    }

    update(){

    }
}