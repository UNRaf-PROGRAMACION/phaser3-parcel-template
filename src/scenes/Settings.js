import Phaser from "phaser";

import events from "./EventCenter";

// import RexUIPlugin from "phaser3-rex-plugins/templates/ui/ui-plugin.js";

export default class Settings extends Phaser.Scene {

    backButton;

    popupWidth;

    popupHeight;

    popupX;

    popupY;
    
    popupOutline; 

    musicVolume;

    soundVolume;
    
    constructor() {
        super("settings");

        // Definir valores para las variables de tamaño y posición del pop-up
        this.popupWidth = 600;
        this.popupHeight = 400;
        this.popupX = (1920 - this.popupWidth) / 2;
        this.popupY = (1080 - this.popupHeight) / 2;
    }

    init (data) {
        this.volume = 1;
        this.visibleVolume =100;
        
        this.mainMenuSong = data.mainMenuSong;
    }

    create() {
        // Fondo para el pop-up de configuración
        this.add.rectangle(this.popupX, this.popupY, this.popupWidth, this.popupHeight, 0x000000).setOrigin(0);

        // Contorno blanco alrededor del pop-up
        this.popupOutline = this.add.graphics();
        this.popupOutline.lineStyle(2, 0xffffff);
        this.popupOutline.strokeRect(this.popupX, this.popupY, this.popupWidth, this.popupHeight);
        
        // Título del pop-up de configuración
        this.add.text(1920 / 2, this.popupY + 20, "Configuración", {
            fontSize: '32px',
            color: '#fff',
            align: 'center'
        }).setOrigin(0.5);

        // Botón para volver al menú principal
        this.backButton = this.add.text(this.popupX + 50, this.popupY + this.popupHeight - 50, "Volver al Menú", {
            fontSize: '20px',
            color: '#fff'
        }).setInteractive();

        //  hacer que backButton cambie de tamaño si lo pasas con el raton

        this.backButton.on('pointerover', () => {
            this.backButton.setScale(1.2); // Cambia el tamaño cuando el ratón está sobre él
        });
        
        this.backButton.on('pointerout', () => {
            this.backButton.setScale(1); // Restaura el tamaño cuando el ratón sale
        });

        this.backButton.on('pointerdown', () => {
            // Detener la escena de configuración
            this.scene.stop("settings");
        });

        // Aquí puedes agregar más elementos de configuración, como controles de volumen, ajustes de calidad, etc.

        //  // Crear un control deslizante para la música
        // this.musicSlider = this.rexUI.add.slider({
        //     x: this.popupX + 20,
        //     y: this.popupY + 100,
        //     width: this.popupWidth - 40,
        //     value: 1, // Valor inicial del volumen de la música (1 es el volumen máximo)
        // }).layout();

        // // Crear un control deslizante para el sonido
        // this.soundSlider = this.rexUI.add.slider({
        //     x: this.popupX + 20,
        //     y: this.popupY + 200,
        //     width: this.popupWidth - 40,
        //     value: 1, // Valor inicial del volumen del sonido (1 es el volumen máximo)
        // }).layout();

        // Agregar etiquetas para los controles deslizantes
        this.volumeText = this.add.text(this.popupX + 50, this.popupY + 70, `Volumen ${this.visibleVolume}`, {
            fontSize: '20px',
            color: '#fff',
        })
       

        // crear cursor
        this.cursor = this.input.keyboard.createCursorKeys();

        
      

        // // Configurar eventos para actualizar el volumen
        // this.musicSlider.on('valuechange', (newValue) => {
        //     // Actualizar el volumen de la música con newValue (0 a 1)
        //     this.newValue = Math.round(newValue * 100);
        //     // Puedes reproducir un efecto de sonido aquí para que los jugadores prueben el volumen
        //     this.sound.volume = newValue;
        // });

        // this.soundSlider.on('valuechange', (newValue) => {
        //     // Actualizar el volumen del sonido con newValue (0 a 1)
        //     // Puedes reproducir un efecto de sonido aquí para que los jugadores prueben el volumen
        //     // this.sound.play('soundEffect', { volume: newValue });
        // });
    }

    update () {
        events.emit("music", {
            mainMenuSong: this.mainMenuSong,
          });
          
          if (this.cursor.left.isDown && this.volume > 0.1) {
            this.volume -= 0.1;
            this.visibleVolume -= 10;
            this.mainMenuSong.setVolume (this.volume);
            this.volumeText.setText (`Volumen ${this.visibleVolume}`);
          } else if (this.cursor.right.isDown && this.volume < 1) {
            this.volume += 0.1;
            this.visibleVolume += 10;
            this.volumeText.setText (`Volumen ${this.visibleVolume}`);
            this.mainMenuSong.setVolume (this.volume);
            }

       
    }

}