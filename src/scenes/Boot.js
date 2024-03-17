import {Scene} from 'phaser';

export class Boot extends Scene {
    constructor() {
        super('Boot');
    }

    preload() {
        //  The Boot Scene is typically used to load in any assets you require for your Preloader, such as a game logo or background.
        //  The smaller the file size of the assets, the better, as the Boot Scene itself has no preloader.
        this.load.path = 'assets/';
        this.load.image('background', 'bg.png');
        this.load.image('map', 'map.png');
        this.load.spritesheet('player', 'defplayer.png', {frameWidth: 120, frameHeight: 130});
    }

    create() {
        this.scene.start('Preloader');
    }
}
