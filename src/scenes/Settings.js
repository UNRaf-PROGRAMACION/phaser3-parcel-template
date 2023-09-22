import Phaser from "phaser";

export default class Settings extends Phaser.Scene {

    backButton;

    popupWidth;

    popupHeight;

    popupX;

    popupY;
    
    popupOutline; 
    
    constructor() {
        super("settings");

        // Definir valores para las variables de tamaño y posición del pop-up
        this.popupWidth = 600;
        this.popupHeight = 400;
        this.popupX = (1920 - this.popupWidth) / 2;
        this.popupY = (1080 - this.popupHeight) / 2;
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

        this.backButton.on('pointerdown', () => {
            // Detener la escena de configuración
            this.scene.stop("settings");
        });

        // Aquí puedes agregar más elementos de configuración, como controles de volumen, ajustes de calidad, etc.
    }
}