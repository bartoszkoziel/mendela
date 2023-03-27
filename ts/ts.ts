// import { Pill } from "./pill.js";

class Game {
    width: number
    height: number
    main: HTMLElement
    pill: Pill

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

interface Pole {
    x: number,
    y: number
}

class Pill {
    positions : Array<Pole>
    interval : number

    constructor(x: number, y: number) {
        this.positions[0] = {x: x, y: y}
        this.positions[1] = {x: x + 1, y: y}

        this.interval = setInterval(() => {
            console.log("lecI!")
        }, 1000)
    }
}

const game = new Game()