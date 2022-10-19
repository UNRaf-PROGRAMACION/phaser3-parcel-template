class Dado extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture = 'dado'){

        super(scene, x, y, texture = 'dado')
        
        scene.add.existing(this);


        this.setInteractive()

        .on('pointerdown', () => {
        
            musica.destroy()
            this.destroy()
            this.updateTexto()
           
            if (turno === 0) {
              
              let number = this.add.text(this.cameras.main.midPoint.x ,this.cameras.main.midPoint.y - 100, valor, { stroke: 'black', strokeThickness: 5, fontSize: '75px Arial', fill: 'white' })
            
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
              
              let number = this.add.text(this.cameras.main.midPoint.x ,this.cameras.main.midPoint.y-100, valor, { stroke: 'black', strokeThickness: 5, fontSize: '75px Arial', fill: 'white' })
            
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
              this.setScale(1.1)
            })
        
            .on('pointerout', () => {
              this.setScale(1)
            })
       

    }

    boton(){    
    }
}

export default Dado;