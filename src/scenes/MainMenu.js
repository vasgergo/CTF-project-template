import {Scene} from 'phaser';

export class MainMenu extends Scene {
    constructor() {
        super('MainMenu');
    }

    create() {
        this.add.image(512, 384, 'background');

        // this.add.image(512, 300, 'logo');

        let startText = this.add.text(512, 460, 'Start', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        startText.setInteractive({useHandCursor: true});
        startText.on('pointerdown', () => this.scene.start('Game'));

        //auto start
        // this.scene.start('Game');
    }
}
