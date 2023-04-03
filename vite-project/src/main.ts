import './style.css'
import { Pill } from './Pill.js'

interface Blocks {
	x: number,
	y: number,
	color: string,
	state: string
}

class Game {
	width: number
	height: number
	main: HTMLElement
	pill: Pill

	currTab: Blocks[] = []

	constructor() {
		this.width = 8
		this.height = 16
		this.main = document.getElementById("main") as HTMLElement
		this.createBoard()
		this.pill = new Pill(3, 16)
	}

	createBoard() {
		for (let y = 0; y < this.height; y++) {
			for (let x = 0; x < this.width; x++) {
				let block = document.createElement("div")
				let id = x + "_" + y
				block.className = "block"
				block.id = id
				this.main.append(block)
				console.log("eququq")
			}
		}
	}
}

new Game()