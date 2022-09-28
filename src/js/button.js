// Clase Boton, para no repetir tanto codigo
class Button {
    boton;
    constructor(x, y, img, scene, callback) {
            this.boton = scene.add.image(x, y, img)
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => this.desactivar(callback))
        }
        desactivar(callback){
            callback();
            this.boton.disableInteractive();
            setTimeout(() => {
                this.boton.setInteractive({ useHandCursor: true })
              }, 2000);
        }
    }

export default Button;