import Phaser from 'phaser'

export class Creditos extends Phaser.Scene {
    constructor() {
  
      super("Creditos");
    }

    preload(){
      //imagen
    }
    
    init(data) {
      
      this.audio = data.audio;
      this.contar= data.contar;
      console.log(data)
  
  
    }

    create() {
      this.add.image(this.cameras.main.centerX,this.cameras.main.centerY,"cueva");
      this.add.image(this.cameras.main.centerX,this.cameras.main.centerY,"creditos"); 

      let retroceso = this.add.image(this.cameras.main.centerX/1.372,this.cameras.main.centerY/4.09,"volver").setInteractive()

    .on('pointerdown', () => {
        
        this.scene.start("MainMenu", {audio:this.audio, contar:this.contar,})
        
      })
  
    .on('pointerover', () => {
        retroceso.setScale(1.1)
      })
  
    .on('pointerout', () => {
        retroceso.setScale(1)
      })

      let iconoSonido= "music"
      if (this.contar === 1) {
        iconoSonido= "mute"
        
      }

      let musica = this.add.image(1830,80,iconoSonido).setInteractive({ useHandCursor: true})

      .on('pointerdown', () => {

        if(this.contar===0){
          iconoSonido= "mute"
          this.contar = 1
          this.audio.pause()
          musica.setTexture("mute")
          
          
        }else{
          if (this.contar === 1){
            iconoSonido= "music"
            this.contar = 0
            this.audio.resume()
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



//class BotonInicio extends Creditos{
 // constructor(volvermenu){
 //     super();

 //     this.volvermenu= volvermenu;
      
 // }

//}

//export default {Creditos, BotonInicio};