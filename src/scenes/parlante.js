class Parlante extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, activo = true){
        
      super(scene, x, y, activo ? 'music' : 'mute')

      this.activo = activo;

      scene.add.existing(this);

      this.setInteractive()
      .on('pointerdown', () => {

        this.activo = !this.activo
        this.setTexture(this.activo ? 'music' : 'mute')
          
/*         if(this.contar===0){
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
        } */
            
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