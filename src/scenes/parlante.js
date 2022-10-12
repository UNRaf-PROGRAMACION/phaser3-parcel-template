//import Button from "./button.js"


class Parlante extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture){
        
      super(scene, x, y, texture)

      scene.add.existing(this);

      if (this.iconoSonido= "mute") {
        this.contar = 1
      }else{
        if (this.iconoSonido= "music") {
          this.contar= 0
        }
      }

      this.setInteractive()
      .on('pointerdown', () => {
          
        if(this.contar===0){
          this.iconoSonido= "mute"
          this.contar = 1
          this.setTexture(this.iconoSonido)
          //this.audio.pause()
        }else{
          if (this.contar === 1){
            this.iconoSonido= "music"
            this.contar = 0
            this.setTexture(this.iconoSonido)
            //this.audio.resume()
          }
        }
            
      })
      
      .on('pointerover', () => {
        this.setScale(1.1)
        //sonido.setScale(1.1)
      })
      
      .on('pointerout', () => {
        this.setScale(1)
        //sonido.setScale(1)
      })
  
/*
      this.texture = texture;
      //this.tema = tema;
      this.x = x;
      this.y = y;
      */


    }
/*
  boton(){

    let parlante = this.add.image(1830,80,iconoSonido).setInteractive()
  
      .on('pointerdown', () => {
          
      if(this.contar===0){
        this.iconoSonido= "mute"
        this.contar = 1
        //this.audio.pause()
      }else{
        if (this.contar === 1){
          this.iconoSonido= "music"
          this.contar = 0
          //this.audio.resume()
        }
      }
          
    })
    
    .on('pointerover', () => {
      parlante.setScale(1.1)
      //sonido.setScale(1.1)
    })
    
    .on('pointerout', () => {
      parlante.setScale(1)
      //sonido.setScale(1)
    })

  }
  */
}


export default Parlante;