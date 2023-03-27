interface Pole {
    x: number,
    y: number
}

export class Pill {
    positions : Pole[]
    interval : number

    constructor(x: number, y: number) {
        this.positions.push({x: x, y: y})
        this.positions.push({x: x+1, y: y})

        this.interval = setInterval(() => {
            console.log("lecI!")
        }, 1000)
    }
}