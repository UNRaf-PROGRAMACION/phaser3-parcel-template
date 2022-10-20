class Dado extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture = 'dado'){

        super(scene, x, y, texture = 'dado')
        
        scene.add.existing(this);;

        this.setInteractive()

        .on('pointerdown', () => {
        
            scene.musica.destroy()
            this.destroy()
            scene.updateTexto()
           
            if (scene.turno === 0) {
              scene.player.setScale(1.1);
              let number = scene.add.text(scene.cameras.main.midPoint.x ,scene.cameras.main.midPoint.y - 100, scene.valor, { stroke: 'black', strokeThickness: 5, fontSize: '75px Arial', fill: 'white' })
            
              setTimeout(() => {
                number.destroy()
                scene.player.setX(scene.distancia + 128 * scene.valor)
                scene.player.setScale(1)
                scene.turno === 1              
                }, 3000)
      
              setTimeout(() => {
                //this.cameras.main.setPosition(distancia - 128 * valor,0)
                scene.cameras.main.startFollow(scene.player2, true, 0.08, 0.08);
                scene.player2.setScale(1.1)
                
                }, 5000)
      
              setTimeout(() => {
                scene.scene.start("Cartas", { distancia : scene.player.x, distancia2: scene.player2.x, audio2:null, contar:scene.contar, turno:1, movimiento: 1, valor:scene.valor   }
              )}, 8000)
    
             
            }
            
            if (scene.turno === 1) {
              scene.player2.setScale(1.1)
              let number = scene.add.text(scene.cameras.main.midPoint.x ,scene.cameras.main.midPoint.y-100, scene.valor, { stroke: 'black', strokeThickness: 5, fontSize: '75px Arial', fill: 'white' })
            
            setTimeout(() => {
              number.destroy()
              scene.player2.setX(scene.distancia2 + 128 * scene.valor)
              scene.player2.setScale(1)
              scene.turno === 0
              //this.cameras.main.stopFollow()
              }, 3000)
    
            setTimeout(() => {
              scene.cameras.main.startFollow(scene.player, true, 0.08, 0.08);
              scene.player.setScale(1.1)
              
              }, 5000)
    
            setTimeout(() => {
                scene.scene.start("Cartas", { distancia : scene.player.x, distancia2: scene.player2.x, audio2:null, contar:scene.contar, turno:0, movimiento: 1, valor:scene.valor   }
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