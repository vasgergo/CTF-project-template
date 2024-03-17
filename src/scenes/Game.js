import {Scene} from 'phaser';

export class Game extends Scene {
    constructor() {
        super('Game');
    }

    create() {
        let gameWidth = this.scale.width;
        let gameHeight = this.scale.height;

        let imageWidth = this.textures.get('map').getSourceImage().width;
        let imageHeight = this.textures.get('map').getSourceImage().height;

        let scaleX = gameWidth / imageWidth;
        let scaleY = gameHeight / imageHeight;

        this.add.image(512, 384, 'map').setScale(scaleX, scaleY);

        // create player
        this.player = this.add.sprite(100, 100, 'player').setScale(0.5);

        this.anims.create({
            key: 'standing',
            frames: this.anims.generateFrameNumbers('player', {start: 0, end: 2}),
            frameRate: 4,
            yoyo: true,
            repeat: -1
        });

        this.anims.create({
            key: 'standingLeft',
            frames: this.anims.generateFrameNumbers('player', {start: 10, end: 12}),
            frameRate: 4,
            yoyo: true,
            repeat: -1
        });

        this.anims.create({
            key: 'standingUp',
            frames: this.anims.generateFrameNumbers('player', {start: 20, end: 20}),
            frameRate: 1,
            repeat: -1
        });

        this.anims.create({
            key: 'standingRight',
            frames: this.anims.generateFrameNumbers('player', {start: 30, end: 32}),
            frameRate: 4,
            yoyo: true,
            repeat: -1
        });

        //run animation
        this.anims.create({
            key: 'runingDown',
            frames: this.anims.generateFrameNumbers('player', {start: 40, end: 49}),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'runingLeft',
            frames: this.anims.generateFrameNumbers('player', {start: 50, end: 59}),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'runingUp',
            frames: this.anims.generateFrameNumbers('player', {start: 60, end: 69}),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'runingRight',
            frames: this.anims.generateFrameNumbers('player', {start: 70, end: 79}),
            frameRate: 10,
            repeat: -1
        });

        //animate


        this.cursors = this.input.keyboard.createCursorKeys();

    }

    update(time, delta) {
        if (this.cursors.left.isDown) {
            this.player.x -= 2;
            this.player.play('runingLeft', true);
        } else if (this.cursors.right.isDown) {
            this.player.x += 2;
            this.player.play('runingRight', true);
        } else if (this.cursors.up.isDown) {
            this.player.y -= 2;
            this.player.play('runingUp', true);
        } else if (this.cursors.down.isDown) {
            this.player.y += 2;
            this.player.play('runingDown', true);
        } else {
            this.player.play('standing', true);
        }

        super.update(time, delta);
    }
}
