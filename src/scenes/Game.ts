// @ts-nocheck
import Phaser from 'phaser'

export class Game extends Phaser.Scene {

	constructor() {
		super('game')
	}

	init() {
		this.cursors = this.input.keyboard.createCursorKeys();
	}
	preload(){
		this.load.image('background', 'assets/PNG/Background/bg_layer1.png');
	}

	create() {
		this.add.image(240, 320, 'background');
	}

	update() {
		
	}
}